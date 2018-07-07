import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import { setupServer } from './server';

dotenv.config();
mongoose.connect(process.env.DB_URL);

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const clientPath = './app/client';

setupServer({ clientPath, dev, port });
