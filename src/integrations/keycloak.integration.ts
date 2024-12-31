import api from '../configs/api_keycloak.config';

interface UserLogin {
  email: string;
  password: string;
}

class KeycloackIntegration {
  authenticate = async (payload: UserLogin) => {
    try {
      const response = await api().post(process.env.KEYCLOACK_URL as string, {
        grant_type: 'password',
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        username: payload.email,
        password: payload.password,
        scope: 'openid',
      });

      return response.data;
    } catch (error: any) {
      return this.handleError(error);
    }
  };

  decodingToken = async (token: string): Promise<any> => {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
  };

  generationToken = async (): Promise<any> => {
    try {
      const response = await api().post(process.env.KEYCLOACK_TOKEN as string, {
        grant_type: 'client_credentials',
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
      });

      return response.data;
    } catch (error: any) {
      console.log({ error });
      return this.handleError(error);
    }
  };

  create = async (name: string, email: string, pass?: string): Promise<any> => {
    try {
      const { access_token } = await this.generationToken();

      const payload = {
        attributes: {
          attribute_key: 'sgp',
        },
        credentials: [
          {
            temporary: false,
            type: 'password',
            value: pass,
          },
        ],
        username: email,
        firstName: name.split(' ').shift(),
        lastName: name.split(' ').pop(),
        email: email,
        emailVerified: true,
        enabled: true,
      };

      await api(true, access_token).post(
        process.env.KEYCLOACK_URL_CREATE_USER as string,
        payload
      );

      const { data: userData } = await api(false, access_token).get(
        (process.env.KEYCLOACK_GET_USERS + email) as string
      );

      return userData.find((user: any) => user.email == email);
    } catch (error: any) {
      return this.handleError(error);
    }
  };

  update = async (id: string, name: string, email: string): Promise<any> => {
    try {
      const { access_token } = await this.generationToken();

      const payload = {
        username: email,
        firstName: name.split(' ').shift(),
        lastName: name.split(' ').pop(),
        email: email,
        emailVerified: false,
        enabled: true,
      };

      await api(true, access_token).put(
        (process.env.KEYCLOACK_URL_CREATE_USER + '/' + id) as string,
        payload
      );

      const { data: userData } = await api(false, access_token).get(
        (process.env.KEYCLOACK_GET_USERS + email) as string
      );

      return userData.find((user: any) => user.email == email);
    } catch (error) {
      return this.handleError(error);
    }
  };

  reset = async (id: string, email: string): Promise<any> => {
    try {
      const { access_token } = await this.generationToken();

      const response = await api(true, access_token).put(
        (process.env.KEYCLOACK_URL_CREATE_USER +
          '/' +
          id +
          '/reset-password-email') as string
      );

      return response.status;
    } catch (error) {
      return this.handleError(error);
    }
  };

  refreshToken = async (refresh_token: string): Promise<any> => {
    try {
      const response = await api().post(process.env.KEYCLOACK_TOKEN as string, {
        grant_type: 'refresh_token',
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        refresh_token: refresh_token,
      });

      return response.data;
    } catch (error: any) {
      return this.handleError(error);
    }
  };

  checkToken = async (token: string): Promise<any> => {
    try {
      const response = await api().post(
        process.env.KEYCLOACK_CHECK_TOKEN as string,
        {
          token: token,
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
        }
      );

      return response.data;
    } catch (error: any) {
      return this.handleError(error);
    }
  };

  handleError = (error: any) => {
    const message = error?.response?.data?.error_description
      ? error?.response?.data?.error_description
      : error?.response?.statusText
      ? error?.response?.statusText
      : '';

    return {
      statusCode: error?.response?.status,
      message,
    };
  };
}

export default new KeycloackIntegration();
