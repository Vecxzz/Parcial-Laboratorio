import mongoose from mongoose;
import AuthorSchema from "../schemas/AuthorSchema.js"

class AuthorModel {
  // Método CREATE
  async create(author) {
    return await AuthorSchema.create(author);
  }

  // Método UPDATE
  async update(id, author) {
    // Validar ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("El ID es inválido")
    }

    return await AuthorSchema.findByIdAndUpdate(
      id,
      {$set: author},
      {new: true}
    )
  }

  // Método DELETE
  async delete(id) {
    // Validar ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("El ID es inválido")
    }

    return await AuthorSchema.findByIdAndDelete(id)
  }

  // Métodos GET

  // Método GETALL
  async getAll() {
    return await AuthorSchema.find();
  }

  // Método GETONE
  async getOne(id) {
    // Validar ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("El ID es inválido")
    }

    return await AuthorSchema.findById(id)
  }
}

export default new AuthorModel()