import Controller from '../_private/controller.base';
import DepartmentModel from './department.model';
import { Department } from 'shared/types';

class DepartmentController extends Controller<Department> {}

export default new DepartmentController(DepartmentModel);
