import Controller from '../_private/controller.base';
import ReportModel, { ReportModelType } from './report.model';

class ReportController extends Controller<ReportModelType> {}

export default new ReportController(ReportModel);
