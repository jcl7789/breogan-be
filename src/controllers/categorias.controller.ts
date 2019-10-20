import { Response, Request } from 'express';

import CategoriaModel, { Categoria } from '../models/Categoria';
import { INACTIVE, sendErrorResponse } from './shared';

class Controller {
	constructor() {}

	// Categoria
	public agregarCategoria(req: Request, res: Response) {
		try {
			const requestData: Categoria = req.body;
			new CategoriaModel(requestData).save({validateBeforeSave: true})
			.then((response) => {
				res.status(200).json({ code: 1, message: "Agregado", object: response });
			})
			.catch((error) => {
				sendErrorResponse(error, res);
			});
		} catch (error) {
			sendErrorResponse(error, res, 'fail');
		}
	}

	public removerCategoria(req: Request, res: Response) {
		try {
			const { id } = req.params;
			CategoriaModel.findByIdAndDelete({ _id: id })
				.then((response) => {
					res.json({
						code: 1,
						object: response,
						message: "Unidad removida"
					})
				})
				.catch((error) => { 
					sendErrorResponse(error, res, 'Error al intentar eliminar la categoria');		
				});
		} catch (error) {
			sendErrorResponse(error, res);
		}
	}

	public modificarCategoria(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const modifiedData: Categoria = req.body;
			CategoriaModel.updateOne({ _id: id }, modifiedData)
				.then((response) => {
					res.json({
						code: response,
						message: 'Modificacion exitosa.'
					});
				})
				.catch((error) => {
					sendErrorResponse(error, res);
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
