import fastify from 'fastify';
import onboardRoutes from './routes/v1/onboard';

export default function app() {
  const server = fastify({
    logger: true,
    disableRequestLogging: true,
  });

  server.register(onboardRoutes, { prefix: '/v1/onboard' });

  return server;
}
