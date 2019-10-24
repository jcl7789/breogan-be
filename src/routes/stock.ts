import { Router } from 'express';
import { productsController } from '../controllers/productos.controller';

const router: Router = Router();

// Create
router.post('/', productsController.agregarProducto);

// Create (Reactivate)
router.post('/:id', productsController.activarProducto);

// Read
router.get('/:id', productsController.obtenerProducto);

// Read all
router.get('/', productsController.obtenerProductos);

// Update
router.put('/:id', productsController.modificarProducto);

// Delete (Deactivate)
router.delete('/:id', productsController.borrarProducto);

// actualizar stock
router.post('/refresh/:id', productsController.actualizarStock);

export default router;