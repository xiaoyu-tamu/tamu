import Controller from '../_private/controller.base';
import CollegeModel, { CollegeModelType } from './college.model';

class CollegeController extends Controller<CollegeModelType> {}

export default new CollegeController(CollegeModel);
