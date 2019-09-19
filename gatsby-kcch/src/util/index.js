export const createLocaleTextGetter = languageCode => {
  const languages = [languageCode, "nl"] // last language in array is default;
  const localize = value => {
    if (value != null) {
      if (Array.isArray(value)) {
        return value.map(v => localize(v, languages))
      } else if (typeof value == "object") {
        if (value._type != "undefined") {
          if (/^locale[A-Z]/.test(value._type)) {
            const language = languages.find(lang => value[lang])
            return value[language]
          }
          return Object.keys(value).reduce((result, key) => {
            result[key] = localize(value[key], languages)
            return result
          }, {})
        }
      }
    }

    return value
  }
  return localize
}
