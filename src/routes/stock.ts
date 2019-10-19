import { Router } from 'express';
import { productsController } from '../controllers/productos.controller';

const router: Router = Router();

// Create
router.post('/', productsController.agregarProducto);
// Read
router.get('/:id', productsController.obtenerProducto);
router.get('/', productsController.obtenerListaProducto);
// Update
router.put('/:id', productsController.modificarProducto);
// Delete
router.delete('/:id', productsController.borrarProducto);

export default router;