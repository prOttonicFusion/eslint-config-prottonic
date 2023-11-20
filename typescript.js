module.exports = {
    "plugins": [
        "@typescript-eslint"
    ],
    "extends": [
        "plugin:@typescript-eslint/recommended"
    ],
    "rules": {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                "args": "none",
                "ignoreRestSiblings": true
            }
        ],
    }
}
