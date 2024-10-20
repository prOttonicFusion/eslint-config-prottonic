import eslint from '@eslint/js'

export default [
    eslint.configs.recommended,
    {
        "rules": {
            "semi": ["warn", "never"],
            "quotes": ["warn", "single"],
            "jsx-quotes": ["warn", "prefer-double"],
            "comma-dangle": ["warn", "always-multiline"],
            "comma-spacing": ["warn", { "before": false, "after": true }],
            "comma-style": ["warn", "last"],
            "arrow-parens": ["warn", "always"],
            "array-bracket-spacing": ["warn", "never"],
            "object-curly-spacing": ["warn", "always"],
            "eol-last": "warn",
            "indent": ["warn", 4],
            "key-spacing": [
                "warn",
                {
                    "beforeColon": false,
                    "afterColon": true
                }
            ],
            "keyword-spacing": "warn",
            "linebreak-style": "error",
            "max-len": [
                "warn",
                {
                    "code": 120,
                    "tabWidth": 4,
                    "ignoreComments": true,
                    "ignoreStrings": true,
                    "ignoreRegExpLiterals": true,
                    "ignoreTemplateLiterals": true

                }
            ],
            "sort-imports": [
                "warn",
                {
                    "ignoreDeclarationSort": true,
                    "ignoreMemberSort": false,
                    "allowSeparatedGroups": true
                }
            ],
            "no-case-declarations": "error",
            "no-constant-condition": "warn",
            "no-delete-var": "error",
            "no-dupe-args": "error",
            "no-dupe-keys": "error",
            "no-duplicate-case": "error",
            "no-empty-character-class": "warn",
            "no-empty-pattern": "error",
            "no-empty": "error",
            "no-ex-assign": "error",
            "no-extra-boolean-cast": "error",
            "no-extra-parens": "warn",
            "no-fallthrough": "error",
            "no-func-assign": "error",
            "no-invalid-regexp": "error",
            "no-irregular-whitespace": "warn",
            "no-lonely-if": "warn",
            "no-mixed-spaces-and-tabs": "warn",
            "no-negated-in-lhs": "warn",
            "no-obj-calls": "error",
            "no-octal": "error",
            "no-redeclare": "error",
            "no-regex-spaces": "warn",
            "no-self-assign": "error",
            "no-sparse-arrays": "error",
            "no-trailing-spaces": "warn",
            "no-undef": "warn",
            "no-unexpected-multiline": "warn",
            "no-unreachable": "warn",
            "no-unused-labels": "warn",
            "no-unused-vars": "off",
            "no-use-before-define": [
                "warn",
                {
                    "functions": false,
                    "classes": false,
                    "variables": false
                }
            ],
            "no-useless-concat": "warn",
            "no-useless-constructor": "warn",
            "no-useless-escape": "warn",
            "no-useless-rename": [
                "warn",
                {
                    "ignoreDestructuring": false,
                    "ignoreImport": false,
                    "ignoreExport": false
                }
            ],
            "valid-typeof": "error",
            "prefer-arrow-callback": "warn",
            "prefer-const": "warn",
            "prefer-template": "warn"
        }
    }
]
