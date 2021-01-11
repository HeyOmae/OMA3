module.exports = {
  roots: ["<rootDir>"],
  moduleFileExtensions: ["js", "ts", "tsx", "json"],
  testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js",
    "^@/components(.*)$": "<rootDir>/components$1",
    "^@/runner(.*)$": "<rootDir>/runner$1",
    "^@/test(.*)$": "<rootDir>/test$1",
    "^@/hooks(.*)$": "<rootDir>/hooks$1",
    "^@/data(.*)$": "<rootDir>/data$1",
    "^@/types(.*)$": "<rootDir>/types$1",
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  coveragePathIgnorePatterns: ["/node_modules/", "/test/"],
}
