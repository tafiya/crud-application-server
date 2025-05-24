
import { Router } from 'express';
import { projectRoutes } from '../modules/project/project.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/project',
    route: projectRoutes,
  },

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
