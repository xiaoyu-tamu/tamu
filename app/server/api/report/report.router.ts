import * as express from 'express';
import reportController from './report.controller';

const reportRouter = express.Router();

reportRouter.param('id', reportController.findByParam);

reportRouter
  .route('/')
  .get(reportController.getAll)
  .post(reportController.createOne);

reportRouter
  .route('/:id')
  .get(reportController.getOne)
  .put(reportController.updateOne)
  .delete(reportController.deleteOne);

export default reportRouter;
