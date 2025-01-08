import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  collectCoverage: true,
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**", // Exclude dependencies
    "!**/.next/**", // Exclude build artifacts
    "!<rootDir>/coverage/**", // Exclude coverage reports
    "!**/*.d.ts", // Exclude TypeScript declaration files
    "!**/jest.config.{js,ts}", // Exclude Jest config files
    "!**/*.config.{js,ts}", // Exclude Jest config files
  ],
  coverageDirectory: 'coverage', // Directory where coverage reports will be stored
  coverageReporters: ['lcov', 'text'], // Generate lcov and text reports
  // Optional thresholds to enforce coverage quality
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  // Additional setup for your environment
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Uncomment and create jest.setup.ts if needed
};

// Create Jest config for Next.js
export default createJestConfig(config);