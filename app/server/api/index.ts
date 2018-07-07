import * as express from 'express';
import courseRouter from './course/course.router';
import collegeRouter from './college/college.router';
import departmentRouter from './department/department.router';

export const apiRouter = express.Router();

apiRouter.use('/courses', courseRouter);
apiRouter.use('/departments', departmentRouter);
apiRouter.use('/colleges', collegeRouter);
