import { Router, Request, Response } from 'express';
import { controller } from '../controllers/Controller'

const router: Router = Router();

router.post('/agregar_unidad', controller.agregarUnidades);
router.post('/remover_unidad', controller.quitarUnidades);
router.post('/modificar_unidad', controller.modificarUnidades);

export default router;