const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';
const config = require('./jest.config');

module.exports = {
  ...config,

  setupFiles: ['<rootDir>/configs/jest.setup.client.js'],

  testPathIgnorePatterns: [
    '<rootDir>/app/.next/',
    '<rootDir>/app/server/',
    '<rootDir>/node_modules/',
  ],
};
