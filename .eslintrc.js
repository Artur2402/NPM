module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "plugins": [
        'jsx-a11y',
    ],
    "overrides": [],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error", "always"],
        indent: ["error", 2],
        "no-console": "error",
        // "jsx-a11y/rule-name": 2
    }
}
