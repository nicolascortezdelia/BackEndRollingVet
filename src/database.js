import mongoose from 'mongoose';

const url =
  'mongodb+srv://NicoCortez:mongodbatlas1402@cluster0.7liso.mongodb.net/rollingvet';

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Estoy conectado a la Base de Datos!');
});
