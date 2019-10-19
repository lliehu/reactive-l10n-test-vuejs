# Reactive i18n test application using Vue.js and i18next

## TODO

### Need to code

* Be able to insert places to map and comment them.
  * Also write log messages about these actions.
* Better store: https://vuejs.org/v2/guide/state-management.html#Simple-State-Management-from-Scratch
* Reactive retranslation when translation source changes.

### Want to research

* Do changes to translation files update automatically to the UI?
* Look into the reason why translations are automatically updated in the UI when language changes.
* Look into how vue-i18next npm package handles reactive localization.
* How does vue integration for Leaflet (npm packages) deal with localization? Or do they at all?

### Nice to have at some point

* Test select component. There are usually some kind of problems with them.

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
