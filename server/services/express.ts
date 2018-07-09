import { Document } from 'mongoose';

declare global {
  namespace Express {
    interface Request {
      // The middleware will throw an Error if undefined
      docFromId: Document;
    }
  }
}
