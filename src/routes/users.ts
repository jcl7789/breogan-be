import { Request, Response, Router } from 'express';
import { userController } from '../controllers/UserControllers';

const router: Router = Router();

router.post('/signup', userController.registrarUsuario);
router.post('/login', userController.loginUsuario);

export default router;