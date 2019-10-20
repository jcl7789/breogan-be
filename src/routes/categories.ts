import { Router } from 'express';
import { categoriasController } from '../controllers/categorias.controller';

const router: Router = Router();

router.post('/', categoriasController.agregarCategoria);
router.delete('/:id', categoriasController.removerCategoria);
router.put('/:id', categoriasController.modificarCategoria);
router.get('/', categoriasController.consultarCategorias);

export default router;