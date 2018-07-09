import { Model } from 'mongoose';
import { merge } from 'lodash';
import { RequestHandler, RequestParamHandler } from 'express';

import '../../services/express';
class Controller<T extends Model<any>> {
  constructor(private model: T) {}

  public createOne: RequestHandler = (req, res, next) =>
    this.model
      .create(req.body)
      .then(doc => res.status(201).json(doc))
      .catch(err => next(err));

  public updateOne: RequestHandler = (req, res, next) => {
    const docToUpdate = req.docFromId;

    const changes = req.body;

    /// data mutation ///
    merge(docToUpdate, changes);

    docToUpdate
      .save()
      .then(doc => res.status(201).json(doc))
      .catch(err => next(err));
  };

  public deleteOne: RequestHandler = (req, res, next) =>
    req.docFromId
      .remove()
      .then(doc => res.status(201).json(doc))
      .catch(err => next(err));

  public getOne: RequestHandler = (req, res, next) =>
    Promise.resolve(res.status(200).json(req.docFromId)).catch(err => next(err));

  public getAll: RequestHandler = (_req, res, next) =>
    this.model
      .find({})
      .exec()
      .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
      })
      .catch(err => next(err));

  public findByParam: RequestParamHandler = (req, _res, next, id) =>
    this.model
      .findById(id)
      .exec()
      .then(doc => {
        if (doc) {
          req.docFromId = doc;
          next();
        } else {
          next(new Error(`Failed to lookup document with id: ${id}.`));
        }
      })
      .catch(err => next(err));
}

export default Controller;
