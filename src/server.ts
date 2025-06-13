import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './app/config/index';
let server: Server;

async function main() {
  try {
    await mongoose.connect(config.dataBase_url as string);

    server = app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();

process.on('unhandledRejection', () => {
  console.log(' Unhandled the rejection');
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  process.exit(1);
});
