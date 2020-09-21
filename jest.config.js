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
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  }
}
