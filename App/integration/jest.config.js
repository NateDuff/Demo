module.exports = {
  preset: 'jest-puppeteer',
  testRegex: './*\\.integration.test\\.js$',
  rootDir: '..',
  collectCoverage: true,
  transform: {
    "^.+\\.(svg|css)$": "./svg.transform.js",
    "\\.[jt]sx?$": "babel-jest"
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx"
  ],
  collectCoverageFrom: [
    "**/*.{ts,tsx,js,jsx}",
    "!**/node_modules/**",
    "!**/*.config.{ts,tsx,js,jsx}",
    "!**/*.test.{ts,tsx,js,jsx}",
    "!**/*.transform.{ts,tsx,js,jsx}"
  ]
}
