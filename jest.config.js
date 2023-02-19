import nextJest from 'next/jest.js';

const createJestConfig = nextJest({ dir: './' })

const config = {
  extensionsToTreatAsEsm: ['.ts', '.jsx', '.tsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
}

export default createJestConfig(config);

