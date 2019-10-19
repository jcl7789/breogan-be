import { Router } from 'express';
import { unitsController } from '../controllers/unidades.controller';

const router: Router = Router();

router.post('/', unitsController.agregarUnidad);
router.put('/:id', unitsController.modificarUnidad);
router.get('/', unitsController.consultarUnidades);
router.get('/:id', unitsController.consultarUnidad);
router.delete('/:id', unitsController.removerUnidad);

export default router;