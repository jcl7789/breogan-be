import { Router } from 'express';
import { controller } from '../controllers/Controller';

const router: Router = Router();

router.post('/add', controller.agregarUnidades);
router.post('/rem', controller.quitarUnidades);
router.post('/mod', controller.modificarUnidades);
router.get('/con', controller.consultarUnidades);
router.get('/rem/:id', controller.removerUnidades);

export default router;