const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';

module.exports = {
  rootDir: '../',
  testRegex: TEST_REGEX,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.test.json',
    },
  },
};
