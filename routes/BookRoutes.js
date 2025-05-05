import express from 'express';
import BookController from '../controllers/BookController.js';

const BookRoutes = express.Router();

// Rutas GET
BookRoutes.get('/', BookController.getAll);
BookRoutes.get('/:id', BookController.getOne);

// Ruta POST
BookRoutes.post('/', BookController.create);

// Ruta PUT
BookRoutes.put('/:id', BookController.update);

// Ruta DELETE
BookRoutes.delete('/:id', BookController.delete);

export default BookRoutes;
