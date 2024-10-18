# prOttonicFusion's ESLint config

## Usage
1. Install package
    ```
    npm i --save-dev eslint-config-prottonic
    ```
2. Include it to your ESLint configuration file as:
    ```js
    // eslint.config.js
    import base from 'eslint-config-prottonic/base.js'
    import typescript from 'eslint-config-prottonic/typescript.js'

    export default [
        ...base,
        ...typescript,
        {
            rules: [
                // ...
            ]
        }
    ]
    ```

## Development

Publishing a new version:
```
npm version <major|minor|patch> -m "release %s"
npm publish
```

## Versions 

[Changelog](./CHANGELOG.md)
