import { Document } from 'mongoose';
declare global {
  export namespace Express {
    interface Request {
      docFromId?: Document;
    }
  }
}
