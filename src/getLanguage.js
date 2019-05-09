const dutchLocales = ['nl-NL', 'nl-BE', 'nl'];

const getLanguage = () => {
  if (dutchLocales.includes(navigator.language)) {
    return 'nl';
  }

  return 'en';
};

export default getLanguage;
