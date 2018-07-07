import express from 'express';
import courseController from './course.controller';

const courseRouter = express.Router();

courseRouter.param('id', courseController.findByParam);

courseRouter
  .route('/')
  .get(courseController.getAll)
  .post(courseController.createOne);

courseRouter
  .route('/:id')
  .get(courseController.getOne)
  .put(courseController.updateOne)
  .delete(courseController.deleteOne);

export default courseRouter;
