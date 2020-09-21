module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
    'vue'
  ],
  transform: {
    '^.+\\.vue$': require.resolve('vue-jest')
  },
  coverageDirectory: './coverage',
  coverageReporters: ['json', 'lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85
    }
  }
}
