import mongoose from 'mongoose';
import AuthorModel from '../models/AuthorModel.js';
import BookModel from '../models/BookModel.js';

class AuthorController {
  // Método POST
  async create(req, res) {
    try {
      const data = await AuthorModel.create(req.body);
      res.status(201).json({ message: 'Autor creado correctamente', data });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  // Método PUT
  async update(req, res) {
    try {
      // Obtener ID de params
      const { id } = req.params;

      // Validar ID
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'El ID es inválido' });
      }

      const data = await AuthorModel.update(id, req.body);

      // Verificar si existe
      if (!data) {
        return res.status(404).json({ message: 'Autor no encontrado' });
      }

      res
        .status(200)
        .json({ message: 'Autor actualizado correctamente', data });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  // Método DELETE
  async delete(req, res) {
    try {
      // Obtener ID de params
      const { id } = req.params;

      // Validar ID
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'El ID es inválido' });
      }

      const data = await AuthorModel.delete(id);

      // Verificar si existe
      if (!data) {
        return res.status(404).json({ message: 'Autor no encontrado' });
      }

      res.status(204).send();
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  // Métodos GET

  // Método GETALL
  async getAll(req, res) {
    try {
      const data = await AuthorModel.getAll();
      res.status(200).json(data);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  // Método GETONE
  async getOne(req, res) {
    try {
      // Obtener ID de params
      const { id } = req.params;

      // Validar ID
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'El ID es inválido' });
      }

      const data = await AuthorModel.getOne(id);

      // Verificar si existe
      if (!data) {
        return res.status(404).json({ message: 'Autor no encontrado' });
      }

      res.status(200).json(data);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  // Método addBook
  async addBook(req, res) {
    try {
      // Obtener IDs
      const { id, bookId } = req.params;

      // Validar IDs
      if (
        !mongoose.Types.ObjectId.isValid(id) ||
        !mongose.Types.ObjectId.isValid(bookId)
      ) {
        return res.status(400).json({ error: e.message });
      }

      // Obtener Autor y Libro
      const author = await AuthorModel.getOne(id);
      const book = await BookModel.getOne(bookId);

      // Verificar si existen
      if (!author) {
        return res.status(404).json({ message: 'Autor no encontrado' });
      }
      if (!book) {
        return res.status(404).json({ mesage: 'Libro no encontrado' });
      }

      // Verificar si ya esta asignado
      if (author.libros.includes(bookId) {
        return res.status(400).json({message: "El libro ya esta asignado a un autor"})
      }

      // Guardar Libro en lista
      author.libros.push(bookId);
      
      // Guardar cambios
      await AuthorModel.update(id, {libros: author.libros})

      res.status(200).json({message: "Libro asignado a autor correctamente"})
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}

export default new AuthorController();
