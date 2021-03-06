import mongoose from 'mongoose';
import DepartmentModel from './department.model';
import { generateApiTests } from '../../services/test/generateApiTest';

beforeAll(async () => {
  await mongoose.connect(process.env.DB_URL!);
});

afterAll(async () => {
  await mongoose.disconnect();
});

generateApiTests(DepartmentModel, 'department', {});
