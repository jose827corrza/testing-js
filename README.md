`"lint": "eslint src/**"`

que me muestre los errores de los archivos de esa carpeta

`"lint:fix": "eslint src/** --fix"`

los arregla de una vez

```
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
  },
};
```

Activar el jest:true para que ignore las importaciones de jest

`npm run test -- --coverage`

Nos permite ver la cobertura de las pruebas sobre el codigo a probar
