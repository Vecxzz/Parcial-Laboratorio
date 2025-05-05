import mongoose from 'mongoose';
import BookModel from '../models/BookModel.js';

class BookController {
  // Método POST
  async create(req, res) {
    try {
      const data = await BookModel.create(req.body);
      res.status(201).json({ message: 'Libro creado correctamente', data });
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

      const data = await BookModel.update(id, req.body);

      // Verificar si existe
      if (!data) {
        return res.status(404).json({ message: 'Libro no encontrado' });
      }

      res
        .status(200)
        .json({ message: 'Libro actualizado correctamente', data });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  // Método DELETE
  async delete(req, res) {
    try {
      // Obtener ID de params
      const { id, authorId } = req.params;

      // Validar ID
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'El ID es inválido' });
      }

      const data = await BookModel.delete(id);

      // Verificar si existe
      if (!data) {
        return res.status(404).json({ message: 'Libro no encontrado' });
      }

      // Validación
      const author = AuthorModel.getOne(authorId);

      if (author.libros.includes(data)) {
        return res.status(400).json({
          message: 'No se pude eliminar un libro asignado a un autor',
        });
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
      const data = await BookModel.getAll();
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

      const data = await BookModel.getOne(id);

      // Verificar si existe
      if (!data) {
        return res.status(404).json({ message: 'Libro no encontrado' });
      }

      res.status(200).json(data);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}

export default new BookController();
