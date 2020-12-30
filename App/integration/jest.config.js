module.exports = {
  preset: 'jest-puppeteer',
  testRegex: './*\\.test\\.js$',
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
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/*.config.{ts,tsx,js,jsx}",
    "!**/*.test.{ts,tsx,js,jsx}",
    "!**/*.transform.{ts,tsx,js,jsx}",
    "!**/src/registerServiceWorker.js",
    "!**/src/index.js",
    "**/src/react-app-env.d.ts",
  ]
}
