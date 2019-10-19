import { Router } from 'express';
import { unitsController } from '../controllers/unidades.controller';

const router: Router = Router();

router.post('/', unitsController.agregarUnidades);
router.put('/:id', unitsController.modificarUnidades);
router.get('/', unitsController.consultarUnidades);
router.get('/:id', unitsController.consultarUnidad);
router.delete('/:id', unitsController.removerUnidades);

export default router;