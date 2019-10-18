import { Router } from 'express';
import { controller } from '../controllers/marcas.controller';

const router: Router = Router();

router.post('/', controller.agregarMarca);
router.post('/:id', controller.activarMarca);
router.delete('/:id', controller.quitarMarca);
router.patch('/:id', controller.desactivarMarca);
router.put('/:id', controller.modificarMarca);
router.get('/:id', controller.obtenerMarca);
router.get('/', controller.obtenerMarcas);

export default router;