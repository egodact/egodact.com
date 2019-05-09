const dutchLocales = ['nl-NL', 'nl-BE'];

const getLanguage = () => {
  if (dutchLocales.includes(navigator.language)) {
    return 'nl';
  }

  return 'en';
};

export default getLanguage;
