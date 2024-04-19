const path = require('path');

module.exports = {
    // Indicates which environment Jest should run tests in
    testEnvironment: 'jest-environment-jsdom',
    // The glob patterns Jest uses to detect test files
    testMatch: [path.join(__dirname + "/src/**/*.test.js")],

    // Transform files with Jest's Babel preset
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    // Map CSS imports to an identity-obj-proxy for handling CSS modules
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy',
    },
  };
  
