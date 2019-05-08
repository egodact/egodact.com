const dutchLocales = ['nl-NL', 'nl-BE'];

const browserLanguageIsDutch = () =>
  dutchLocales.includes(navigator.language);

export default browserLanguageIsDutch;
