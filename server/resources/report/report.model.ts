import { prop, Typegoose, ModelType, pre } from 'typegoose';

export type ReportModelType = ModelType<ReportSchema>;

@pre<ReportSchema>('update', function(next) {
  this.update(null, { updateAt: Date.now() });
  next();
})
export class ReportSchema extends Typegoose {
  @prop({ default: Date.now() })
  createAt: Date;

  @prop({ default: Date.now() })
  updateAt: Date;
}

export default new ReportSchema().getModelForClass(ReportSchema);
