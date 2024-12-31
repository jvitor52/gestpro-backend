import request from 'supertest';
import app from '../../app';

describe('User Management', () => {
  let token: string;
  let uid_user: string;

  beforeAll(async () => {
    const response = await request(app).post('/user/login').send({
      email: 'bcim012@einstein.br',
      password: '123456',
    });
    token = response.body.token.access_token;
    uid_user = response.body.user.uid;
  });

  it('Should be able to create a new User', async () => {
    const responseUser = await request(app)
      .post('/user')
      .set('Authorization', `Bearer ${token}`)
      .send({
        name: 'Funcionario 021',
        email: 'func021@gmail.com',
        status: 'Ativo',
        password: '123456',
      });
    expect(responseUser.status).toBe(200);
    expect(responseUser.body).toHaveProperty('uid');
    uid_user = responseUser.body.uid; // Para reutilizar no teste de atualização
  });

  // it('Should be able to update a User', async () => {
  //   const responseUpdate = await request(app)
  //     .put(`/user/${uid_user}`)
  //     .set('Authorization', `Bearer ${token}`)
  //     .send({
  //       name: 'Funcionario Atualizado',
  //       email: 'func013_updated@gmail.com',
  //       status: 'Ativo',
  //     });
  //   expect(responseUpdate.status).toBe(200);
  //   expect(responseUpdate.body).toHaveProperty('name', 'Funcionario Atualizado');
  // });

  it('Should be able to retrieve a User by ID', async () => {
    const responseGetById = await request(app)
      .get(`/user/${uid_user}`)
      .set('Authorization', `Bearer ${token}`);
    expect(responseGetById.status).toBe(200);
    expect(responseGetById.body).toHaveProperty('uid', uid_user);
  });

  // it('Should be able to list all active Users', async () => {
  //   const responseActive = await request(app)
  //     .get('/user/active')
  //     .set('Authorization', `Bearer ${token}`);
  //   console.log(responseActive);
  //   expect(responseActive.status).toBe(200);
  // });

  it('Should be able to search for all Users with pagination', async () => {
    const responsePagination = await request(app)
      .get('/user/pagination')
      .query({
        q: '',
        take: 10,
        skip: 0,
      })
      .set('Authorization', `Bearer ${token}`);
    expect(responsePagination.status).toBe(200);
    expect(responsePagination.body).toHaveProperty('data');
    expect(Array.isArray(responsePagination.body.data)).toBe(true);
  });

  // it('Should be able to delete a User by ID', async () => {
  //   const responseDelete = await request(app)
  //     .delete(`/user/${uid_user}`)
  //     .set('Authorization', `Bearer ${token}`);
  //   expect(responseDelete.status).toBe(200);
  //   expect(responseDelete.body).toEqual(true);
  // });
});
