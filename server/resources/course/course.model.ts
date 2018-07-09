import * as mongoose from 'mongoose';
import { Course } from '../../../shared/types/models';

/**
 * Course Schema
 *
 * 🚨 Make sure update corresponding data definition in shared/ folder.
 * 📋 Fields with default values should be cast in data definition.
 */

const courseSchema = new mongoose.Schema({
  /*==================================
    Required
   ==================================*/

  name: {
    type: String,
    required: [true, 'Course name is required'],
  },

  courseCode: {
    type: String,
    required: [true, 'Course code is required'],
  },

  degree: {
    type: String,
    enum: ['graduate', 'undergraduate'],
    required: [true, 'Course degree is required'],
  },

  /*==================================
    Optional
   ==================================*/

  alias: String,

  prerequisite: String,

  description: String,

  report: mongoose.Schema.Types.ObjectId,

  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
  },

  /*==================================
     With default
   ==================================*/
  invalid: {
    type: Boolean,
    default: false,
  },

  crosslist: {
    type: [String],
    default: [],
  },

  lecture: {
    type: [String],
    default: [],
  },

  credits: {
    type: [String],
    default: [],
  },

  labs: {
    type: [String],
    default: [],
  },

  createAt: {
    type: Date,
    default: Date.now(),
  },

  updateAt: {
    type: Date,
    default: Date.now(),
  },
});

courseSchema.pre('update', function() {
  this.update(null, { updateAt: Date.now() });
});

type CourseModelType = Course & mongoose.Document;

const CourseModel = mongoose.model<CourseModelType>('Course', courseSchema);

export default CourseModel;
