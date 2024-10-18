# prOttonicFusion's ESLint config

## Usage
1. Install package
    ```
    npm i --save-dev eslint-config-prottonic
    ```
2. Include it to your ESLint configuration file as:
    ```js
    // eslint.config.js
    import prottonic from 'eslint-config-prottonic'

    export default [
        ...prottonic,
        {
            rules: [
                // ...
            ]
        }
    ]
    ```

## Versions 

[Changelog](./CHANGELOG.md)
