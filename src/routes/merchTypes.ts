import { Router } from 'express';
import { categoriasController } from '../controllers/categorias.controller';

const router: Router = Router();

router.post('/', categoriasController.agregarCategorias);
router.delete('/:id', categoriasController.removerCategorias);
router.put('/:id', categoriasController.modificarCategorias);
router.get('/', categoriasController.consultarCategorias);

export default router;