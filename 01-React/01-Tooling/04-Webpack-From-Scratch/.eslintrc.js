module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    // "extends": [
    //     "eslint:recommended",
    //     "plugin:react/recommended",
    //     "plugin:@typescript-eslint/eslint-recommended"
    // ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    // "rules": {
    // }
    {
  "extends": "airbnb-base",
  "rules": {
    "comma-dangle": "off",
    "quotes": "off",
    "arrow-body-style": 0,
    "space-before-function-paren": 0
  },
  "env": {
    "browser": true
  }
}
};
