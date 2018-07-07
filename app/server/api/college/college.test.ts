import mongoose from 'mongoose';
import CollegeModel from './college.model';
import { generateApiTests } from '../../test/helper/generateApiTest';

beforeAll(async () => {
  await mongoose.connect(process.env.DB_URL);
});

afterAll(async () => {
  await mongoose.disconnect();
});

generateApiTests(CollegeModel, 'college', {});
