import { Router } from 'express';
import { brandsController } from '../controllers/marcas.controller';

const router: Router = Router();

router.post('/', brandsController.agregarMarca);
router.post('/:id', brandsController.activarMarca);
router.delete('/:id', brandsController.quitarMarca);
router.patch('/:id', brandsController.desactivarMarca);
router.put('/:id', brandsController.modificarMarca);
router.get('/:id', brandsController.obtenerMarca);
router.get('/', brandsController.obtenerMarcas);

export default router;