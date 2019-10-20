# Reactive i18n test application using Vue.js and i18next

## TODO

### Need to code (MUST)

1. Reactive retranslation when translation source changes.
2. Test with Locize
    * https://locize.com/how-it-works.html
    * https://www.youtube.com/watch?v=9NOzJhgmyQE (for React.js)
3. Be able to comment markers on the map.
    * Also write log messages about these actions.
4. Test select component. There are usually some kind of problems with them. Especially its i18n.
5. Test i18n of Vuetify (or another UI component library). Why? Because they are popular. I wonder if Vuetify was the right choice here after all. Hmm... Well, if it's ok, then I don't really want to change it anymore.

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
