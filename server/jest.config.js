module.exports = {
  testEnvironment: 'node',
  displayName: 'server',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$',
  transform: { '^.+\\.ts$': 'ts-jest' },
  moduleFileExtensions: ['ts', 'js'],
  testPathIgnorePatterns: ['/.next/'],

  setupFiles: ['./test/jest.setup.js'],
  globals: { 'ts-jest': { tsConfigFile: '../tsconfig.test.json' } },
};
