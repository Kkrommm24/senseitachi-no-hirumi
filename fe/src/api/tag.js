import API from './axios.config'

const Tag = {
  getAllTags: () => {
    const url = '/tags'
    return API.get(url)
  },

  saveFavouriteTags: (tagIds) => {
    const url = `/tags/favorite-tags`;
    return API.post(url, { tagIds });
  },

  getFavouriteTags: () => {
    const url = '/tags/favorite-tags'
    return API.get(url)
  }
}

export default Tag
