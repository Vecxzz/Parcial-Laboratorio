import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
  // Titulo del libro
  titulo: {
    type: String,
    required: true,
  },

  // Resumen del libro
  resumen: {
    type: String,
  },

  // Género del libro
  genero: {
    type: String,
    required: true,
  },

  // Fecha de publicación del libro
  publicacion: {
    type: Date,
    required: true,
  },

  // Disponibilidad del libro
  disponible: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model('Book', BookSchema);
