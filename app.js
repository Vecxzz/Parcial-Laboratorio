import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import BookRoutes from '../routes/BookRoutes.js';
import AuthorRoutes from '../routes/AuthorRoutes.js';

const app = express();

app.use(express.json());

// Rutas
app.use('/books', BookRoutes);
app.use('/authors', AuthorRoutes);

async function conectarDB() {
  try {
    mongoose.connect(process.env.MONGO_URL + process.env.DB_NAME);
    console.log('Conectado a MongoDB');
  } catch (e) {
    console.error('Error al conectar con MongoDB');
    process.exit(1);
  }
}

const PORT = process.env.PORT;
async function iniciarServidor() {
  await conectarDB();
  app.listen(PORT, () => console.log('Conectado a MongoDB'));
}

iniciarServidor();
