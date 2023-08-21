module.exports = {
  moduleFileExtensions: ["ts", "js", "json"],
  rootDir: "src",
  testRegex: ".spec.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  coverageDirectory: "../coverage",
  testEnvironment: "node",
  setupFiles: [],
};
