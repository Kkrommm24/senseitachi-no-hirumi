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
  },

  getFoodDetail: (foodId) => {
    const url = '/get-food-detail'
    return API.get(url, {
      params: {
        id: foodId,
      }
    })
  }

}

export default Food
