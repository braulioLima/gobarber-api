import { Router } from 'express';

import User from './app/models/User';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

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

export default routes;
