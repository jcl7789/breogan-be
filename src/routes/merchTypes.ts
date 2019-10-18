import { Router } from 'express';
import { controller } from '../controllers/categorias.controller';

const router: Router = Router();

router.post('/', controller.agregarCategorias);
router.delete('/:id', controller.removerCategorias);
router.put('/:id', controller.modificarCategorias);
router.get('/', controller.consultarCategorias);

export default router;