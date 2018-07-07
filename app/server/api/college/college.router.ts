import * as express from 'express';
import collegeController from './college.controller';

const collegeRouter = express.Router();

collegeRouter.param('id', collegeController.findByParam);

collegeRouter
  .route('/')
  .get(collegeController.getAll)
  .post(collegeController.createOne);

collegeRouter
  .route('/:id')
  .get(collegeController.getOne)
  .put(collegeController.updateOne)
  .delete(collegeController.deleteOne);

export default collegeRouter;
