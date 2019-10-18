export const ACTIVE = 1;
export const INACTIVE = 0;

import { Response } from 'express';

export const sendErrorResponse = (error: any, res: Response) => {
    res.json({ code: -1, message: 'Error en la consulta.', 'object': error.message });
}