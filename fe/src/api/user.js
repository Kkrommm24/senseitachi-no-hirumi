import API from './axios.config'

const user = {
  getProfile: () => {
    const url = '/profile'
    return API.get(url)
  },
  updateUserProfile: (data) => {
    const url = '/profile/update'
    return API.put(url, data)
  },
  uploadImage: (image) => {
    const url = '/upload-images';
    const formData = new FormData();
    formData.append('image', image);
    return API.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  logout: () => {
    localStorage.clear();
  },
  getAllCustomer: () => {
    const url = '/users/customer-list'
    return API.get(url)
  },
  deleteUser: (user_id) => {
    const url = `/users/${user_id}`
    return API.delete(url)
  },
}

export default user
