import Controller from '../_private/controller.base';
import CourseModel from './course.model';

class CourseController extends Controller<typeof CourseModel> {}

export default new CourseController(CourseModel);
