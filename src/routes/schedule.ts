import { Router, Request, Response } from 'express';

const router: Router = Router();

const responder = (req:Request, res:Response): void => {
        res.status(501).send();
}

router.all('/', responder);
    
export default router;