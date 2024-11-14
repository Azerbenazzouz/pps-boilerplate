import { Router } from 'express';
import { getProfile, updateProfile } from '../controllers/users';
import { authenticate } from '../middleware/authenticate';
import { validateRequest } from '../middleware/validate-request';
import { updateProfileSchema } from '../schemas/users';

export const usersRouter = Router();

usersRouter.get('/profile', authenticate, getProfile);
usersRouter.patch('/profile', authenticate, validateRequest(updateProfileSchema), updateProfile);