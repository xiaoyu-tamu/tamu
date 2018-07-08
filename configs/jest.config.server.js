const config = require('./jest.config');

module.exports = {
  ...config,
  setupFiles: ['<rootDir>/configs/jest.setup.server.js'],
  testPathIgnorePatterns: ['/app/server/.next/', '/app/client/', '/node_modules/'],
};
