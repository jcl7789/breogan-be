import { Router, Request, Response } from 'express';
import { controller } from '../controllers/Controller'

const router: Router = Router();

router.get('/', controller.index);

export default router;