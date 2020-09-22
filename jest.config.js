module.exports = {
  verbose: true,
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
    'vue'
  ],
  transform: {
    '^.+\\.vue$': require.resolve('vue-jest')
  },
  collectCoverageFrom: [
    'src/**/*.{ts,vue}'
  ],
  coveragePathIgnorePatterns: ['.d.ts'],
  coverageDirectory: './coverage',
  coverageReporters: ['json', 'lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 14,
      functions: 3,
      lines: 12,
      statements: 12
    }
  }
}
