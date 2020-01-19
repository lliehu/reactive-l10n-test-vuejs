# Reactive localization test application using Vue.js and i18next

This is just an application for testing reactive internationalization, related to my Master's Thesis.

## Project setup

```
docker-compose up
```

This will create a Docker container and run `npm install`.

If Dockerfile has been changed, the image needs to be rebuilt with `docker-compose build`.

For editing Vue.js code with Visual Studio Code, it is recommended to install the following extensions for that editor:

* Vetur
* ESLint
* Prettier - Code formatter

## Features

* Reactive retranslation when translation source changes. (When a string is changed inside store, it will cause the UI to update. Changes to json files will cause hot reload to reload the app.)

## Commands for use inside the Docker container

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
