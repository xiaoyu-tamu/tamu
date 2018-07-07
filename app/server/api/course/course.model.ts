import { prop, arrayProp, Typegoose, ModelType, pre, Ref } from 'typegoose';
import { ObjectID } from 'bson';
import { Degree } from 'shared/types';
import { DepartmentSchema } from '../department/department.model';
export type CourseModelType = ModelType<CourseSchema>;

@pre<CourseSchema>('update', function(next) {
  this.update(null, { updateAt: Date.now() });
  next();
})
export class CourseSchema extends Typegoose {
  /**
   * A flag indicates data integrity.
   * The data is crawl from Texas A&M course listing website,
   * some of the course is not valid.
   */
  @prop({ default: false })
  invalid: boolean;

  /**
   * A name of the course
   */
  @prop({ required: true })
  name: string;

  /**
   * An alias for the item.
   */
  @prop() alias?: string;

  /**
   * The course degree identifier
   */
  @prop({ required: true })
  degree: Degree;

  /**
   * A description of the course
   */
  @prop() description?: string;

  /**
   * Requirements for taking the Course
   */
  @prop() prerequisite?: string;

  /**
   * The identifier for the Course used by the course provider, e.g. CSCE121
   */
  @prop({ required: true })
  courseCode: string;

  /**
   * The date on which the course was created.
   */
  @prop({ default: Date.now() })
  createAt: Date;

  /**
   * The date on which the course was updated.
   */
  @prop({ default: Date.now() })
  updateAt: Date;

  /**
   * The equivalent courses
   */
  @arrayProp({ items: String, default: [] })
  crosslist: string[];

  /**
   * The range of course lecture hours
   */
  @arrayProp({ items: Number, default: [] })
  lecture: number[];

  /**
   * The range of course credits
   */
  @arrayProp({ items: Number, default: [] })
  credits: number[];

  /**
   * The range of course lab hours
   */
  @arrayProp({ items: Number, default: [] })
  labs: number[];

  /**
   * A reference to the associate department.
   */
  @prop({ ref: DepartmentSchema, required: true })
  department: Ref<DepartmentSchema>;

  /**
   * A reference to the associate report.
   */
  @prop() report?: ObjectID;
}

export default new CourseSchema().getModelForClass(CourseSchema);
