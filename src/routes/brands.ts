import { Router } from 'express';
import { controller } from '../controllers/Controller';

const router: Router = Router();

router.post('/add', controller.agregarMarcas);
router.post('/rem/:id', controller.quitarMarcas);
router.post('/mod/:id', controller.modificarMarcas);
router.get('/con', controller.obtenerMarcas);

export default router;