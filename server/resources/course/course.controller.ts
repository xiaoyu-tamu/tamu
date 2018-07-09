import Controller from '../_private/controller.base';
import CourseModel, { CourseModelType } from './course.model';

class CourseController extends Controller<CourseModelType> {}

export default new CourseController(CourseModel);
