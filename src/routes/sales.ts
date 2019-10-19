import { Router } from 'express';
import { salesController } from './../controllers/ventas.controller';

const router: Router = Router();

// Create
router.post('/', salesController.registrarVenta);

// Read
router.get('/:id', salesController.obtenerVenta);

// Read All
router.get('/', salesController.obtenerVentas);

// Update
router.patch('/:id', salesController.registrarVenta);

// Delete
router.delete('/:id', salesController.registrarVenta);


export default router;