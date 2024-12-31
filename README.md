# Como configurar o sistema:

1. Clone o repositório
2. Copie `.env.example` para o arquivo `.env` e substitua o valor das variaveis
3. Altere a versão do node para `20.9.0`, conforme arquivo .node-version
4. Instale as dependencias do projeto com o comando `npm install`

# OBS: Caso queira rodar o BD localmente, rode os passos (4), (5), (6) e (7)

4. Instale o docker em sua máquina.
5. Crie o banco de dados rodando o comando `npm run up`.
6. Crie as tabelas rodando o comando `npm run prisma:migrate:dev` (Em producao, alterar para `npm run prisma:migrate:prd`)
7. Crie os dados inicias rodando o comando `npm run prisma:seed`

# Start

8. Inicie o sistema com o comando `npm run dev`

<!-- # DOCKER
docker run --name postgres-platform-main -d -p 5432:5432 -e POSTGRES_PASSWORD=root -e POSTGRES_USER=admin -e POSTGRES_DB=db_platform_main -v /var/lib/postgresql/data postgres -->
