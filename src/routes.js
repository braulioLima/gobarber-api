import { Router } from 'express';

import User from './app/models/User';

import UserController from './app/controllers/UserController';

const routes = new Router();

/**
 * Route: /users
 * Route responsible to create a User in DB
 */
routes.post('/users', UserController.store);

export default routes;
