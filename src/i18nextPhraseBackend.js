const REFERENCE_LANGUAGE = 'en'

class Backend {
  constructor(services, options) {
    this.init(services, options)
  }

  type = 'backend'

  static type = 'backend'

  init(services, options = {}) {
    this.services = services

    this.options = {
      ...this.options,
      ...options
    }

    if (this.options.phraseEnabled) {
      window.PHRASEAPP_CONFIG = this.options

      const phraseapp = document.createElement('script')
      phraseapp.type = 'text/javascript'
      phraseapp.async = true
      phraseapp.src = [
        'https://',
        'app.phrase.com/assets/in-context-editor/2.0/app.js?',
        new Date().getTime()
      ].join('')
      var s = document.getElementsByTagName('script')[0]
      if (s !== undefined) {
        s.parentNode.insertBefore(phraseapp, s)
      } else {
        document.body.appendChild(phraseapp)
      }
    }
  }

  read(language, namespace, callback) {
    const original = this.options.resources?.[REFERENCE_LANGUAGE]?.[namespace]
    if (original) {
      const decorated = this.decorateResourceObject(original)
      if (decorated) {
        callback(null, decorated)
        return
      }
    }

    callback(
      `Requested resource for language "${language}" and namespace "${namespace}" was not found.`,
      null
    )
  }

  readMulti(languages, namespaces, callback) {
    callback('readMulti not supported.', null)
  }

  decorateResourceObject(original, prefix = '') {
    const ret = {}
    Object.keys(original).map(key => {
      if (typeof original[key] === 'object') {
        const decorated = this.decorateResourceObject(
          original[key],
          prefix + key + '.'
        )
        if (decorated) {
          ret[key] = decorated
        } else {
          return null
        }
      } else if (typeof original[key] === 'string') {
        ret[key] = this.decoratedKeyName(prefix + key)
      } else {
        return null
      }
    })
    return ret
  }

  decoratedKeyName(key) {
    // This works as long as language is assumed to be English.
    const pluralPostfix = '_plural'
    if (key.endsWith(pluralPostfix)) {
      key = key.substring(0, key.length - pluralPostfix.length)
    }
    var prefix = this.options.prefix ?? '[[__'
    var suffix = this.options.suffix ?? '__]]'
    return `${prefix}phrase_${key}${suffix}`
  }

  // Function for storing translations in a cache. Not implemented.
  /* save(language, namespace, data) {} */

  // Function for saving missing translations. Not implemented.
  /* create(languages, namespace, key, fallbackValue) {} */
}

export default Backend
