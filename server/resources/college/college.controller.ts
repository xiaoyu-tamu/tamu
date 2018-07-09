import Controller from '../_private/controller.base';
import CollegeModel from './college.model';

class CollegeController extends Controller<typeof CollegeModel> {}

export default new CollegeController(CollegeModel);
