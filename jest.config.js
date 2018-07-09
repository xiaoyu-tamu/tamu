module.exports = {
  // shared jest config
  coverageDirectory: './.coverage',
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}'],
  coverageThreshold: {
    global: {
      statements: 10,
      branches: 10,
      functions: 10,
      lines: 10,
    },
  },
  projects: ['./client', './server'],
};
