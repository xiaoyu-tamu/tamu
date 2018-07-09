import Controller from '../_private/controller.base';
import DepartmentModel from './department.model';

class DepartmentController extends Controller<typeof DepartmentModel> {}

export default new DepartmentController(DepartmentModel);
