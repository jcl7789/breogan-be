import { Router } from 'express';
import { categorias_controller } from '../controllers/categorias.controller';

const router: Router = Router();

router.post('/', categorias_controller.agregarCategorias);
router.delete('/:id', categorias_controller.removerCategorias);
router.put('/:id', categorias_controller.modificarCategorias);
router.get('/', categorias_controller.consultarCategorias);

export default router;