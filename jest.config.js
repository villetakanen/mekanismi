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
      branches: 33,
      functions: 8,
      lines: 20,
      statements: 20
    }
  }
}
