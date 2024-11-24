import API from './axios.config'

const Food = {
  getAllFood: () => {
    const url = '/all-foods'
    return API.get(url)
  },

  getFoodByTags: (tagNames) => {
    const url = '/searchByTag'
    return API.get(url, {
      params: {
        tags: tagNames,
      }
    });
  }

}

export default Food
