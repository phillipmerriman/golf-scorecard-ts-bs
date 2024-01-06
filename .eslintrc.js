module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: [
        // 'eslint:recommended',
        // 'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    // parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        // '@typescript-eslint',
        'react',
        'prettier',
    ],
    rules: {
        'prettier/prettier': 'error',
        // indent: ['error', 'tab'],
        // 'linebreak-style': ['warn', 'unix'],
        // quotes: ['error', 'single'],
        // semi: ['error', 'always'],
    },
};
