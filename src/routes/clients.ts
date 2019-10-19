import { Router } from 'express';
import { clientsController } from '../controllers/clientes.controller';
import { defaultController } from '../controllers/shared';

const router: Router = Router();

// C
router.post('/', clientsController.nuevoCliente);
// R
router.get('/:id', clientsController.obtenerCliente);
router.get('/', clientsController.obtenerClientes);
// U
router.put('/:id', clientsController.modificarCliente);
// D 
router.delete('/', defaultController.sinImplementar);

export default router;