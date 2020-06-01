import endpoints from '../config/EndPoints'
import api from './API'

const formatReceivedCategory = (category) => {
  const out = {
    id: category.id,
    slug: category.slug,
    label: category.label,
    to: `/information/category/${category.slug}`
  }
  if (category.children && category.children.length > 0) {
    out.children = category.children.map((child) =>
      formatReceivedCategory(child)
    )
  }
  return out
}

export const getCategories = () => {
  return api
    .get(endpoints.infosCategories)
    .then((res) => res.data.map((cat) => formatReceivedCategory(cat)))
}

export const getCategoryDetails = (slug) => {
  const url = String.format(endpoints.categoryDetails, slug)
  return api.get(url).then((res) => res.data)
}

export const getCategoryInfos = (slug) => {
  const url = String.format(endpoints.categoryInfos, slug)
  return api.get(url).then((res) => res.data)
}
