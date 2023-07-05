# Storefront Backend - Udacity Fullstack JS Nanodegree
---

## Getting Started

### Installing dependencies


```
npm install
```

### Running the server

To execute the application use the following command in terminal:

```
npm run start
```

the app will then be available on port 3000 by default, but that can be changed by editing the port constant value in the app.ts file.

### Scripts

The following actions can be executed through npm scripts:

#### Transpiling typescript to javascript

```
npm run build
```

The transpiled code will be available in the `build` folder.
#### Linting

The code can ba automatically linted using ESlint. Note that ESlint will also use prettier to test for incorrect formatting. Rules, plugins and extensions for ESlint can be modified through the `.eslintrc` file.

```
npm run lint

#### Testing

A jasmine testing suite can be used to validate the endpoint as well as the imageTransform functionality.

```
npm run test
```

#### Formatting

The code can be automatically formatted using prettier. The formatting options can be customised by editin the `.prettierrc`file.

```
npm run prettier
```

---



