import { Router } from 'express';
import { userController } from '../controllers/usuarios.controller';

const router: Router = Router();

router.post('/signup', userController.registrarUsuario);
router.get('/login', userController.loginUsuario);
router.get('/dev', userController.obtenerTodosUsers);

export default router;