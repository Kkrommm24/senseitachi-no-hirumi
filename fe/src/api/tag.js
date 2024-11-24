import API from './axios.config'

const Tag = {
  getAllTags: () => {
    const url = '/tags'
    return API.get(url)
  },

}

export default Tag
