import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'
import express from 'express';
import { routes } from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

dotenv.config();

app.use('/', routes);



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
