import express from 'express';
import apiRoute from './routes/meliservice';

const app = express();

app.use(express.json());

app.use('/api', apiRoute);

app.listen( 3001, () => console.log('Server on port 3001 '));