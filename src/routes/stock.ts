import { Router } from 'express';
import { productsController } from '../controllers/ProductosController';

const router: Router = Router();

router.get('/:id', productsController.obtenerProducto);
router.get('/', productsController.obtenerListaProducto);
router.post('/', productsController.agregarProducto);
router.delete('/:id', productsController.borrarProducto);
router.put('/:id', productsController.modificarProducto);

export default router;