import API from './axios.config'

const Food = {
  getAllFood: () => {
    const url = '/all-foods'
    return API.get(url)
  },

}

export default Food
