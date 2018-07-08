declare namespace Express {
  import { Document } from 'mongoose';
  interface Request {
    docFromId?: Document;
  }
}
