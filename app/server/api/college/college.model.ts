import { prop, Typegoose, ModelType, pre } from 'typegoose';

export type CollegeModelType = ModelType<CollegeSchema>;

@pre<CollegeSchema>('update', function(next) {
  this.update(null, { updateAt: Date.now() });
  next();
})
export class CollegeSchema extends Typegoose {
  @prop({ default: Date.now() })
  createAt: Date;

  @prop({ default: Date.now() })
  updateAt: Date;
}

export default new CollegeSchema().getModelForClass(CollegeSchema);
