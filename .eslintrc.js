module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  plugins: ["@typescript-eslint"],
  extends: ["@marknjunge/eslint-config-ts"],
  overrides: [
    {
      files: ["*.js"],
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
    }
  ],
  rules: {},
};
