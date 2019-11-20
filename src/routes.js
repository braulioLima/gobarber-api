import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';

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
 * Return all provider's
 */
routes.get('/providers', ProviderController.index);

/**
 * Return all appointments
 */
routes.get('/appointments', AppointmentController.index);
/**
 * Create a appointment
 */
routes.post('/appointments', AppointmentController.store);

/**
 * Route responsible to return all Schedules from provider
 */
routes.get('/schedule', ScheduleController.index);

/**
 * Route to file upload
 */
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
