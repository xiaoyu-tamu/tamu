import * as mongoose from 'mongoose';
import ReportModel from './report.model';
import { generateApiTests } from '../../test/helper/generateApiTest';

beforeAll(async () => {
  await mongoose.connect(process.env.DB_URL);
});

afterAll(async () => {
  await mongoose.disconnect();
});

generateApiTests(ReportModel, 'report', {});
