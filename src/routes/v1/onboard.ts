import { FastifyInstance } from 'fastify/types/instance';
import { getMe } from '../../controller/onboard';

async function onboardRoutes(app: FastifyInstance) {
  app.get('/me', getMe);
}

export default onboardRoutes;
