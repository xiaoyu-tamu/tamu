import { Model } from 'mongoose';

/**
 *
 * @param model
 * @param resourceName
 * @param newResource
 */
export const generateApiTests = (_model: Model<any>, resourceName: string, _newResource: any) => {
  describe(`/${resourceName}`, () => {
    console.log('testing...');

    test('GET /${resourceName}', async () => {
      console.log('get');
    });

    test('POST /${resourceName}', async () => {
      console.log('post');
    });
  });
};
