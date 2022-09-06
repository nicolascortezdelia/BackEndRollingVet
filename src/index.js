import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import routerPacientes from './routes/pacientes.routes';
import routerTurnos from './routes/turnos.routes';
import routerAdmin from './routes/admin.routes';
import './database';

const app = express();

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
  console.log('estoy en el puerto ' + app.get('port'));
});

app.use(morgan('dev'));
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.use('/apivet', routerPacientes);

app.use('/apivet', routerTurnos);

app.use('/apivet', routerAdmin);
