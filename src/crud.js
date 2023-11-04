const Book = require('./book')

const getBookById = async id => {
  try {
    const book = await Book.findById(id).exec()
    return book
  } catch (error) {
    throw new Error(`Error al buscar el libro por ID: ${error}`)
  }
}
const getAllBooks = async () => {
  try {
    const books = await Book.find({}).exec()
    return books
  } catch (error) {
    throw new Error(`Error al buscar todos los libros: ${error}`)
  }
}

const createBook = async bookDetails => {
  try {
    const newBook = await Book.create(bookDetails)
    return newBook
  } catch (error) {
    throw new Error(`Error al crear un nuevo libro: ${error}`)
  }
}
const removeBookById = async id => {
  try {
    const result = await Book.findByIdAndRemove(id).exec()
    return result
  } catch (error) {
    throw new Error(`Error al eliminar el libro por ID: ${error}`)
  }
}

const updateBookById = async (id, update) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(id, update, {
      new: true,
    }).exec()
    return updatedBook
  } catch (error) {
    throw new Error(`Error al actualizar el libro por ID: ${error}`)
  }
}

module.exports = {
  getBookById,
  getAllBooks,
  createBook,
  removeBookById,
  updateBookById,
}
