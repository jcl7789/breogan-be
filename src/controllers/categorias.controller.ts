import { Response, Request } from 'express';

import CategoriasModel, { Categorias } from '../models/Categorias';
import { INACTIVE, sendErrorResponse } from './constants';

class Controller {
	constructor() {}

	// Categorias
	public async agregarCategorias(req: Request, res: Response) {
		try {
			const { identificador, nombre } = req.body;
			const categorias: Categorias = new CategoriasModel({
				identificador,
				nombre
			});
			await categorias.save();
			res.send('Categoria agregada');
		} catch (error) {
			sendErrorResponse(error, res);
		}
	}

	public async removerCategorias(req: Request, res: Response) {
		try {
			const { id } = req.params;
			console.log(id);
			const response = await CategoriasModel.find(elem => {
				return elem == id;
			}).update({
				INACTIVE
			});
			res.send(response);
		} catch (error) {
			sendErrorResponse(error, res);
		}
	}

	public async modificarCategorias(req: Request, res: Response) {
		try {
			const { identificador, nombre } = req.body;
			const categorias: Categorias = new CategoriasModel({
				identificador,
				nombre
			});
			const response = await categorias.update(categorias._id);
			res.json({
				code: response,
				message: 'Modificacion exitosa.'
			});
		} catch (error) {
			sendErrorResponse(error, res);
		}
	}

	public async consultarCategorias(req: Request, res: Response) {
		try {
			const categorias = await CategoriasModel.find();
			res.json(categorias);
		} catch (error) {
			sendErrorResponse(error, res);
		}
	}
}

export const controller = new Controller();
