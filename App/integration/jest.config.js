module.exports = {
  preset: 'jest-puppeteer',
  testRegex: './*\\.integration.test\\.js$',
  rootDir: '..',
  collectCoverage: true,
  transform: {
    "^.+\\.(svg|css)$": "./svgTransform.js",
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
    "!**/*.config.{ts,tsx,js,jsx}"
  ]
}
