import 'reflect-metadata';
import express from 'express';
import "./database/config";
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors())
app.use(express.urlencoded())
app.use(express.json())
app.use(routes)
app.listen(2000)
console.log("CONEXÃO INICIADA")