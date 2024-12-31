import app from './app';

const appPort = process.env.APP_PORT || 3000;
const appEnv = process.env.APP_ENV || 'local';

app.listen(appPort, async () => {
  console.log(
    `🚀 Server is running at port ${appPort}, environment "${appEnv}"`
  );
})