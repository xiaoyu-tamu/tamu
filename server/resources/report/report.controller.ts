import Controller from '../_private/controller.base';
import ReportModel from './report.model';

class ReportController extends Controller<typeof ReportModel> {}

export default new ReportController(ReportModel);
