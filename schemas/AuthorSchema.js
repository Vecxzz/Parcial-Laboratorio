import mongoose, { mongo } from 'mongoose';

const AuthorSchema = new mongoose.Schema({
  // Nombre del autor
  nombre: {
    type: String,
    required: true,
  },

  // Biografía del autor
  bio: {
    type: String,
  },

  // Fecha de nacimiento del autor
  fechaNacimiento: {
    type: Date,
    required: true,
  },

  // Nacionalidad del autor
  nacionalidad: {
    type: String,
    required: true,
  },

  // Libros del autor
  libros: [{ type: mongoose.Types.ObjectId, ref: 'Book' }],
});

export default mongoose.model('Author', AuthorSchema);
