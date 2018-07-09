interface BaseModel {
  // The date on which the course was created.
  createAt: Date;

  // The date on which the course was updated.
  updateAt: Date;
}

export interface College extends BaseModel {}

export interface Department extends BaseModel {}

export interface Course extends BaseModel {
  // The name of the course.
  name: string;

  // The identifier of the course
  courseCode: string;

  // The degree of the course.
  degree: Degree;

  // An alias for the course.
  alias?: string;

  // The requirements for taking the course
  prerequisite?: string;

  // The course description.
  description?: string;

  // A reference to the associate report.
  report?: string;

  // A reference to the associate department.
  department?: [Department];

  // A flag indicates data integrity.
  invalid: boolean;

  // The equivalent courses
  crosslist: string[];

  // The range of course lecture hours
  lecture: number[];

  // The course credits
  credits: number[];

  // The range of course lab hours
  labs: number[];
}

export interface Report extends BaseModel {}

export enum Degree {
  Graduate = 'graduate',
  Undergraduate = 'undergraduate',
}
