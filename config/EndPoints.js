import config from './runtime-config'

const endpoints = {}

if (config.mode === 'dev') {
  endpoints.about = '/sample-data/about.json'
  endpoints.contact = '/sample-data/contact.json'
  endpoints.services = '/sample-data/services.json'
  endpoints.socialLinks = '/sample-data/social-links.json'
  endpoints.infosCategories = '/sample-data/infos-categories.json'
  endpoints.infoCategory = '/sample-data/info-category.json'
}

export default endpoints
