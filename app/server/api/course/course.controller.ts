import Controller from '../_private/controller.base';
import CourseModel from './course.model';
import { Course } from 'shared/types';

class CourseController extends Controller<Course> {}

export default new CourseController(CourseModel);
