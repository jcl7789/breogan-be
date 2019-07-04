import { Router } from 'express';
import { controller } from '../controllers/Controller';

const router: Router = Router();

router.post('/add', controller.agregarCategorias);
router.get('/rem/:id', controller.removerCategorias);
router.post('/mod', controller.modificarCategorias);
router.get('/con', controller.consultarCategorias);

export default router;