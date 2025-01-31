import { Router } from 'express';
import { controller } from '../controllers/Controller';

const router: Router = Router();

router.get('/add', controller.agregarUnidades);
router.post('/rem', controller.quitarUnidades);
router.post('/mod', controller.modificarUnidades);

export default router;