module.exports = {
  env: {
    //사용 환경 기술
    node: true,
    browser: true,
    commonjs: true,
    es6: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:switch-case/recommended",
    "plugin:markdown/recommended",
    "plugin:prettier/recommended",
    "eslint-config-prettier",
    "prettier",
    //plugin의 rule를 하나하나 지정해서 사용하기 번거롭기 때문에
    //이처럼 plugin에서는 recommended 로 extends 할 수 있게 제공한다.
  ],
  globals: {
    $: "off", //사용불가처리
    g: "writable", //수정 가능
    g2: "readonly", //수정 불가
  },
  overrides: [
    {
      files: ["**/*.js"],
      rules: {
        // "no-console": "off",
        "no-unused-vars": "off",
      },
    },
    {
      files: ["**/*.md"],
      processor: "markdown/markdown",
    },
    {
      files: ["**/*.md/*.js"],
      rules: {
        "no-undef": "error",
        "no-console": ["error", { allow: ["error"] }],
      },
    },
  ],
  parserOptions: {
    //parser option
    //eslint는 default 로
    //ECMAScript 5 sytax 를 사용
    ecmaVersion: "latest", //최신 버전 사용
    // "ecmaVersion": "6"
    sourceType: "module",
    ecmaFeatures: {
      globalReturn: false, //글로 scope 에서 반환문을 허용할지 여부
      impliedStrict: true, //strict mode 활성여부
      jsx: true, //jsx 사용
    },
  },
  ignorePatterns: ["**/ignore*.js"],
  parser: "Espree",
  plugins: [
    "meiday2",
    "react",
    "switch-case", //plugin의 경우 eslint-plugin을 생략할 수 있다.
    "markdown",
  ],
  rules: {
    // indent: ["error", 4],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    // semi: ["error", "never"],
    "no-empty": "warn",
    "init-declarations": "off",
    "no-console": "error",
    "meiday2/functioncheck": "error",
    // "switch-colon-spacing/newline-between-switch-case": ["error", "always"]
  },
  noInlineConfig: false,
  reportUnusedDisableDirectives: true,
};
