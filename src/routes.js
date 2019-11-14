import { Router } from 'express';

import User from './app/models/User';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

/**
 * Route: /users
 * Route responsible to create a User in DB
 */
routes.post('/users', UserController.store);

/**
 * Route responsible to create a session
 */
routes.post('/sessions', SessionController.store);

/**
 * Global Middleware - Verify if user have a token
 */
routes.use(authMiddleware);

/**
 * Route: /users
 * Route responsible to update a User in DB
 */
routes.put('/users', UserController.update);

export default routes;
