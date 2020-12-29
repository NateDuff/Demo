module.exports = {
  preset: 'jest-puppeteer',
  testRegex: '../*\\.test\\.js$',
  //rootDir: '../src',
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx"
  ],
  collectCoverageFrom: [
    "**/*.{ts,tsx,js,jsx}"
  ]
}
