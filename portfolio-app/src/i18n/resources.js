import enCommon from './locales/en/common.json';
import nlCommon from './locales/nl/common.json';
import enProjects from './locales/en/projects.json';
import nlProjects from './locales/nl/projects.json';
import enHome from './locales/en/home.json';
import nlHome from './locales/nl/home.json';
import enContact from './locales/en/contact.json';
import nlContact from './locales/nl/contact.json';
import enSphaera from './locales/en/sphaera.json';
import nlSphaera from './locales/nl/sphaera.json';


export const resources = {
  en: {
    common: enCommon,
    projects: enProjects,
    home: enHome,
    contact: enContact,
    sphaera: enSphaera,
  },
  nl: {
    common: nlCommon,
    projects: nlProjects,
    home: nlHome,
    contact: nlContact,
    sphaera: nlSphaera,
  },
};

export const defaultLanguage = 'en';
export const supportedLanguages = Object.keys(resources);
