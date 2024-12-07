import API from './axios.config';

const Comment = {
  saveComment: (foodId, content) => {
    const url = `/foods/${foodId}/comments`;
    return API.post(url, { content });
  },
};

export default Comment;
