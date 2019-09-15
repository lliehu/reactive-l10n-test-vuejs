# vuejs-reactive-i18n-test

## TODO

### Need to code

* Realistic store management: Vuex?
* Realistic translation store
* Reactive translation of document.title
* Explore i18next backends. https://www.i18next.com/overview/plugins-and-utils What happens when translation strings are modified? How can this be reflected in the UI automatically?
* Language switcher that shows correct status also when language is auto detected.
* Put translations somewhere else.
* Reactive retranslation when translation source changes.
* Be able to insert places to map and comment them.

### Want to research

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

For editing Vue.js code with Visual Studio Code, it is recommended to install the Vetur extension for that editor.

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
