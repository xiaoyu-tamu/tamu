import mongoose from 'mongoose';
import { College } from '../../../shared/types/models';

const collegeSchema = new mongoose.Schema({
  createAt: {
    type: Date,
    default: Date.now(),
  },

  updateAt: {
    type: Date,
    default: Date.now(),
  },
});

collegeSchema.pre('update', function() {
  this.update(null, { updateAt: Date.now() });
});

type CollegeModelType = College & mongoose.Document;

const CollegeModel = mongoose.model<CollegeModelType>('College', collegeSchema);

export default CollegeModel;
