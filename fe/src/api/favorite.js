import API from './axios.config'

const Favorite = {
  getAllFavorite: ({page, limit}) => {
    const url = `/favorites?page=${page}&limit=${limit}`
    return API.get(url)
  },

  deleteFavorite: (foodId) => {
    const url = `/favorites/${foodId}`
    return API.delete(url)
  }
}

export default Favorite