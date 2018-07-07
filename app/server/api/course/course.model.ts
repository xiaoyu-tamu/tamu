import { prop, Typegoose, ModelType, pre } from 'typegoose';

export type CourseModelType = ModelType<CourseSchema>;

@pre<CourseSchema>('update', function(next) {
  this.update(null, { updateAt: Date.now() });
  next();
})
class CourseSchema extends Typegoose {
  @prop({ default: Date.now() })
  createAt: Date;

  @prop({ default: Date.now() })
  updateAt: Date;
}

export default new CourseSchema().getModelForClass(CourseSchema);
