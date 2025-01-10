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
    '**/*.{js,jsx,ts,tsx}', // Include all JS/TS files
    '!**/node_modules/**', // Exclude dependencies
    '!**/.next/**', // Exclude build artifacts
    '!<rootDir>/coverage/**', // Exclude coverage reports
    '!**/*.d.ts', // Exclude TypeScript declaration files
    '!**/*.config.{js,ts}', // Exclude config files
    "!**/test/**",
    '!<rootDir>/jest.config.{js,ts}', // Exclude Jest config files
    '!<rootDir>/src/pages/_app.tsx', // Exclude _app.tsx
    '!<rootDir>/src/pages/_document.tsx', // Exclude _document.tsx
    '!<rootDir>/src/pages/index.tsx', // Exclude index.tsx
    '!<rootDir>/src/pages/api/**', // Exclude everything under pages/api
  ],
  coverageDirectory: 'coverage', // Directory for coverage reports
  coverageReporters: ['lcov', 'text'], // Generate lcov and text reports
};

// Create Jest config for Next.js
export default createJestConfig(config);
