import { prop, Typegoose, ModelType, pre } from 'typegoose';

export type DepartmentModelType = ModelType<DepartmentSchema>;

@pre<DepartmentSchema>('update', function(next) {
  this.update(null, { updateAt: Date.now() });
  next();
})
export class DepartmentSchema extends Typegoose {
  @prop({ default: Date.now() })
  createAt: Date;

  @prop({ default: Date.now() })
  updateAt: Date;
}

export default new DepartmentSchema().getModelForClass(DepartmentSchema);
