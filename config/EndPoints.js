import config from './runtime-config'

export const BASE_URL = `${process.env.remoteHost}/wp-json/app/v2`
export const API_TOKEN =
  config.mode === 'dev'
    ? 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcXVkc2luZm8udGVzdCIsImlhdCI6MTU4Nzk4Mjg0MCwibmJmIjoxNTg3OTgyODQwLCJleHAiOjE5MDMzNDI4NDAsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.2Qoo0pF_JAxYEjpMw8HUYZx_IkGb0JIYH25uIqIMN30'
    : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcXVkc2luZm8uY29tIiwiaWF0IjoxNTg4NDYwODk1LCJuYmYiOjE1ODg0NjA4OTUsImV4cCI6MTkwMzgyMDg5NSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.JVZlFz7pt5FaAIEfKinqrVgaKXeFDtvrbzPq6y__p8Y'

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
