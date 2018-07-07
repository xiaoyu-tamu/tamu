const config = require('./jest.config');

module.exports = {
  ...config,
  setupFiles: ['<rootDir>/configs/jest.setup.server.js'],
  testPathIgnorePatterns: ['/app/.next/', '/app/client/', '/node_modules/'],
};
