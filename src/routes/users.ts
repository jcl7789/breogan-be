import { Router } from 'express';
import { userController } from '../controllers/usuarios.controller';

const router: Router = Router();

// Create
router.post('/signup', userController.registrarUsuario);
// Read
router.get('/login', userController.loginUsuario);
router.get('/dev', userController.obtenerTodosUsers);

// Update (ChangePassword)
router.patch('/pass/:id', userController.cambiarPassword);

// Update (ChangeUserType)
router.patch('/user/:id', userController.actualizarUsuario);

// Update (ResetPassword)
router.patch('/reset_pass/:id', userController.bleachingPassword);

export default router;