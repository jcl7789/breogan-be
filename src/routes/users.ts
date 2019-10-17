import { Request, Response, Router } from 'express';
import { userController } from '../controllers/UserControllers';

const router: Router = Router();

router.post('/signup', userController.registrarUsuario);
router.get('/login', userController.loginUsuario);
router.post('/login', userController.loginUsuario);
router.get('/', userController.obtenerTodosUsers);


export default router;