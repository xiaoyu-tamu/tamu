import mongoose from 'mongoose';
import { Report } from '../../../shared/types/models';

const reportSchema = new mongoose.Schema({
  createAt: {
    type: Date,
    default: Date.now(),
  },

  updateAt: {
    type: Date,
    default: Date.now(),
  },
});

reportSchema.pre('update', function() {
  this.update(null, { updateAt: Date.now() });
});

type ReportModelType = Report & mongoose.Document;

const ReportModel = mongoose.model<ReportModelType>('Report', reportSchema);

export default ReportModel;
