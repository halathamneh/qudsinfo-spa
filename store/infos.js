import {
  getCategories,
  getCategoryDetails,
  getCategoryInfos
} from '../API/Infos'
import placeholderImageWide from '~/assets/images/placeholder-wide.svg'

const defaultSubjectDetails = {
  image: placeholderImageWide
}

export const state = () => ({
  subjects: [],
  infos: [],
  subjectDetails: {},
  subjectsLoading: false,
  categoryLoading: false
})

export const mutations = {
  FETCH_SUBJECTS(state, subjects) {
    state.subjects = subjects
  },
  FETCH_DETAILS(state, details) {
    state.subjectDetails = details
  },
  FETCH_INFOS(state, infos) {
    state.infos = infos
  },
  SUBJECTS_LOADING(state, isLoading) {
    state.subjectsLoading = isLoading
  },
  CATEGORY_LOADING(state, isLoading) {
    state.categoryLoading = isLoading
  }
}

export const actions = {
  fetchCategories({ commit }) {
    commit('SUBJECTS_LOADING', true)
    return getCategories().then((data) => {
      commit('FETCH_SUBJECTS', data)
      commit('SUBJECTS_LOADING', false)
    })
  },
  fetchDetails({ commit }, slug) {
    commit('CATEGORY_LOADING', true)
    commit('FETCH_DETAILS', defaultSubjectDetails)
    return getCategoryDetails(slug).then((cat) => {
      const subjectDetails = { ...cat }
      if (!cat.image) subjectDetails.image = placeholderImageWide
      commit('FETCH_DETAILS', subjectDetails)
      commit('CATEGORY_LOADING', false)
    })
  },
  fetchInfosList({ commit }, slug) {
    commit('CATEGORY_LOADING', true)
    return getCategoryInfos(slug).then((infos) => {
      commit('FETCH_INFOS', infos)
      commit('CATEGORY_LOADING', false)
    })
  }
}

export const getters = {
  subjects(state) {
    return state.subjects
  },
  subjectDetails(state) {
    return state.subjectDetails || defaultSubjectDetails
  },
  infosList(state) {
    return state.infos
  },
  subjectsLoading(state) {
    return state.subjectsLoading
  },
  categoryLoading(state) {
    return state.categoryLoading
  }
}
