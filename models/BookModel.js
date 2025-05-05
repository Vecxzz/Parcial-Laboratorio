import mongoose from mongoose;
import BookSchema from "../schemas/BookSchema.js"

class BookModel {
  // Método CREATE
  async create(book) {
    return await BookSchema.create(book);
  }

  // Método UPDATE
  async update(id, book) {
    // Validar ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("El ID es inválido")
    }

    return await BookSchema.findByIdAndUpdate(
      id,
      {$set: book},
      {new: true}
    )
  }

  // Método DELETE
  async delete(id) {
    // Validar ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("El ID es inválido")
    }

    return await BookSchema.findByIdAndDelete(id)
  }

  // Métodos GET

  // Método GETALL
  async getAll() {
    return await BookSchema.find();
  }

  // Método GETONE
  async getOne(id) {
    // Validar ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("El ID es inválido")
    }

    return await BookSchema.findById(id)
  }
}

export default new BookModel()