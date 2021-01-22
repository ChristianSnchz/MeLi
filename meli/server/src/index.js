
/**
 * Servidor de prueba Front End 
 * 
 * 
 */

import express from 'express';
import apiRoute from './routes/meliservice';
import cors from 'cors';

const app = express();

app.use(cors());

app.use('/api', apiRoute);

app.listen( 4000, () => console.log('Server on port 4000 '));