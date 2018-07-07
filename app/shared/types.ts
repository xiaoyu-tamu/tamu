/**
 * 🚨 Warning: Becarefull cicular dependencies, it won't compile.
 */

import { CourseModelType } from 'server/api/course/course.model';
import { DepartmentModelType } from 'server/api/department/department.model';
import { CollegeModelType } from 'server/api/college/college.model';
import { ReportModelType } from 'server/api/report/report.model';

export type Course = CourseModelType;
export type Department = DepartmentModelType;
export type College = CollegeModelType;
export type Report = ReportModelType;
