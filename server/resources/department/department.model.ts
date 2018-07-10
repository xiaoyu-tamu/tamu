import mongoose from 'mongoose';
import { Department } from '../../../shared/types/models';

const departmentSchema = new mongoose.Schema({
  createAt: {
    type: Date,
    default: Date.now(),
  },

  updateAt: {
    type: Date,
    default: Date.now(),
  },
});

departmentSchema.pre('update', function() {
  this.update(null, { updateAt: Date.now() });
});

type DepartmentModelType = Department & mongoose.Document;

const DepartmentModel = mongoose.model<DepartmentModelType>('Department', departmentSchema);

export default DepartmentModel;
