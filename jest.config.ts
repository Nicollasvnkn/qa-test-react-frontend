module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: [
    "**/__tests__/**/*.ts?(x)", // Matches test files with .ts/.tsx extension
    "**/?(*.)+(spec|test).ts?(x)" // Matches test files with .spec.ts/.test.ts extension
  ],
  moduleNameMapper: {
    // Map your TypeScript path aliases
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  setupFilesAfterEnv: ['<rootDir>/jest.config.ts'], // Add this line
};
