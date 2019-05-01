import { Router } from 'express';
import { controller } from '../controllers/Controller';

const router: Router = Router();

router.get('/add', controller.agregarMarcas);
router.post('/rem', controller.quitarMarcas);
router.post('/mod', controller.modificarMarcas);

export default router;