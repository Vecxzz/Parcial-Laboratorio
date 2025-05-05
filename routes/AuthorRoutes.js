import express from 'express';
import AuthorController from '../controllers/AuthorController.js';

const AuthorRoutes = express.Router();

// Rutas GET
AuthorRoutes.get('/', AuthorController.getAll);
AuthorRoutes.get('/:id', AuthorController.getOne);

// Ruta POST
AuthorRoutes.post('/', AuthorController.create);

// Rutas PUT
AuthorRoutes.put('/:id', AuthorController.update);
AuthorRoutes.put('/:id/addBook/:bookId', AuthorController.addBook);

// Ruta DELETE
AuthorRoutes.delete('/:id', AuthorController.delete);

export default AuthorRoutes;
