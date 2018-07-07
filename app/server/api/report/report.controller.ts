import Controller from '../_private/controller.base';
import ReportModel from './report.model';
import { Report } from 'shared/types';

class ReportController extends Controller<Report> {}

export default new ReportController(ReportModel);
