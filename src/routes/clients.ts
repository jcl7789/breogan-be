import { Router, Request, Response } from 'express';
import { clientes_controller } from '../controllers/clientes.controller';

const router: Router = Router();

// C
router.post('/', clientes_controller.nuevoCliente)
// R
router.get('/:id', clientes_controller.obtenerCliente)
router.get('/', clientes_controller.obtenerClientes)
// U
router.put('/:id', clientes_controller.modificarCliente)

export default router;