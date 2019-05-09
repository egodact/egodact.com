const dutchLocales = ['nl-NL', 'nl-BE', 'nl'];

const browserLanguageIsDutch = () =>
  dutchLocales.includes(navigator.language);

export default browserLanguageIsDutch;
