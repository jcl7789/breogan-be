import { Response, Request } from 'express';

import CategoriaModel, { Categoria } from '../models/Categoria';
import { INACTIVE, sendErrorResponse } from './shared';

class Controller {
	constructor() {}

	// Categoria
	public async agregarCategoria(req: Request, res: Response) {
		try {
			const { identificador, nombre } = req.body;
			const categorias: Categoria = new CategoriaModel({
				identificador,
				nombre
			});
			await categorias.save();
			res.send('Categoria agregada');
		} catch (error) {
			sendErrorResponse(error, res);
		}
	}

	public async removerCategoria(req: Request, res: Response) {
		try {
			const { id } = req.params;
			console.log(id);
			const response = await CategoriaModel.find(elem => {
				return elem == id;
			}).update({
				INACTIVE
			});
			res.send(response);
		} catch (error) {
			sendErrorResponse(error, res);
		}
	}

	public async modificarCategoria(req: Request, res: Response) {
		try {
			const { identificador, nombre } = req.body;
			const categorias: Categoria = new CategoriaModel({
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
			const categorias = await CategoriaModel.find();
			res.json(categorias);
		} catch (error) {
			sendErrorResponse(error, res);
		}
	}
}

export const categoriasController = new Controller();
