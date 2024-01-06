import app from './src/app';
import { HOST, PORT } from './src/utils/constant';

// Run the server!
app().then(server =>
  server.listen({ port: PORT, host: HOST }, (error, address) => {
    if (error) {
      console.error(error);
      process.exit(0);
    }

    console.log(`Server listening at ${address}`);
  }),
);
