import * as express from 'express';
import departmentController from './department.controller';

const departmentRouter = express.Router();

departmentRouter.param('id', departmentController.findByParam);

departmentRouter
  .route('/')
  .get(departmentController.getAll)
  .post(departmentController.createOne);

departmentRouter
  .route('/:id')
  .get(departmentController.getOne)
  .put(departmentController.updateOne)
  .delete(departmentController.deleteOne);

export default departmentRouter;
