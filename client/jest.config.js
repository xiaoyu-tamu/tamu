module.exports = {
  displayName: 'client',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ['/.next/'],

  globals: { 'ts-jest': { tsConfigFile: '../tsconfig.test.json' } },
};
