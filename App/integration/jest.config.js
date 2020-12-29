module.exports = {
  preset: 'jest-puppeteer',
  testRegex: './*\\.test\\.js$',
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
