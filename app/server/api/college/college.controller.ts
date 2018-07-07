import Controller from '../_private/controller.base';
import CollegeModel from './college.model';
import { College } from 'shared/types';

class CollegeController extends Controller<College> {}

export default new CollegeController(CollegeModel);
