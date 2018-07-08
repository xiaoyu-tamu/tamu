import Controller from '../_private/controller.base';
import DepartmentModel, { DepartmentModelType } from './department.model';

class DepartmentController extends Controller<DepartmentModelType> {}

export default new DepartmentController(DepartmentModel);
