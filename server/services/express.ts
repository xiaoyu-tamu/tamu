import { Document } from 'mongoose';

declare global {
  namespace Express {
    interface Request {
      docFromId?: Document;
    }
  }
}
