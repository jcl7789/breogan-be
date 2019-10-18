import { Router } from 'express';
import { controller } from '../controllers/unidades.controller';

const router: Router = Router();

router.post('/', controller.agregarUnidades);
router.put('/:id', controller.modificarUnidades);
router.get('/', controller.consultarUnidades);
router.get('/:id', controller.consultarUnidad);
router.delete('/:id', controller.removerUnidades);

export default router;