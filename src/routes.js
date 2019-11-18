import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

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

/**
 * Route to file upload
 */
routes.post('/files', upload.single('file'), FileController.store);

/**
 * Return all provider's
 */
routes.get('/providers', ProviderController.index);

export default routes;
