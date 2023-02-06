module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        "plugin:@typescript-eslint/strict",
        'standard-with-typescript',
    ],
    overrides: [
        // {
        //     files: ["**/*.ts", "**/*.tsx"],
        //     rules: {
        //         "indent": ["error", 4]
        //     },
        // }
    ],
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            globalReturn: false,
        },
        allowImportExportEverywhere: false,
        ecmaVersion: '2020',
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
    },
    plugins: [
        '@typescript-eslint',
        'react',
    ],
    rules: {
        "import/no-unresolved": "error",
        // "@typescript-eslint/no-useless-empty-export": "warn"
    },
    settings: {
        react: {
            version: 'detect' // 버전 명시를 하여 자잘한 warn 메세지를 삭제
        },
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
    ignorePatterns: ['.eslintrc.js']
}
