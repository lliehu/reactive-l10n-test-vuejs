# Reactive i18n test application using Vue.js and i18next

This is just an application for testing reactive internationalization, related to my Master's Thesis.

## TODO

### Want to research (WANT)

* Do changes to translation files update automatically to the UI?
* Look into the reason why translations are automatically updated in the UI when language changes.
* Look into how vue-i18next npm package handles reactive localization.
* How does vue integration for Leaflet (npm packages) deal with localization? Or do they at all?
* Dialogs? What if someone used an error dialog and the user wanted to change the UI language before dismissing it?

### Nice to have at some point (NICE TO HAVE)

* Clean code up a bit and learn in the process.

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
