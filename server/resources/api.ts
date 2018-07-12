import express from 'express';
import courseRouter from './course/course.router';
import collegeRouter from './college/college.router';
import departmentRouter from './department/department.router';
import reportRouter from './report/report.router';

export const apiRouter = express.Router();

apiRouter.use('/courses', courseRouter);
apiRouter.use('/departments', departmentRouter);
apiRouter.use('/colleges', collegeRouter);
apiRouter.use('/reports', reportRouter);
