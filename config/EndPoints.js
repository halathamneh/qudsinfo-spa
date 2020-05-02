export const BASE_URL = `${process.env.remoteHost}/wp-json/app/v2`
export const API_TOKEN = process.env.apiToken

const endpoints = {
  infosCategories: '/terms/category',
  categoryDetails: '/term/{0}',
  categoryInfos: '/infos/{0}'
}

endpoints.about = '/sample-data/about.json'
endpoints.contact = '/sample-data/contact.json'
endpoints.services = '/sample-data/services.json'
endpoints.socialLinks = '/sample-data/social-links.json'

export default endpoints
