import express from 'express';
import routes from './routes/main';

const app = express();

app.use(express.json());
app.use(routes)


app.listen(3000, () => console.log('Hello world!!'))