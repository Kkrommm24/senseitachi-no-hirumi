import API from './axios.config';

const Food = {
    getAllFood: () => {
        const url = '/all-foods';
        return API.get(url);
    },

    getFoodByTags: (tagNames) => {
        const url = '/searchByTag';
        return API.get(url, {
            params: {
                tags: tagNames,
            },
        });
    },

    getFoodDetail: (foodId) => {
        const url = '/get-food-detail';
        return API.get(url, {
            params: {
                id: foodId,
            },
        });
    },

    searchFoods: (food) => {
        const url = '/search';
        const params = {};

        if (food.name) params.name = food.name;
        if (food.type) params.type = food.type;
        if (food.minPrice) params.minPrice = food.minPrice;
        if (food.maxPrice) params.maxPrice = food.maxPrice;
        if (food.ingredients && food.ingredients.length > 0)
            params.ingredients = food.ingredients;
        if (food.flavors && food.flavors.length > 0)
            params.flavors = food.flavors;
        if (food.tags && food.tags.length > 0) params.tags = food.tags;

        return API.get(url, { params });
    },

    getFavoritesFood: (user_id) => {
        const url = `/favorites/${user_id}`;
        return API.get(url);
    },
    addFavoritesFood: (foodId) => {
        const url = '/add-favorites/';
        return API.post(url, { foodId });
    },
    removeFavoritesFood: (foodId) => {
        const url = `/favorites/${foodId}`;
        return API.delete(url);
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
    getIngredients: () => {
        const url = '/ingredients';
        return API.get(url);
    },
    getFlavors: () => {
        const url = '/flavors';
        return API.get(url);
    },
    addFood: (foodData) => {
        const url = '/add-food';
        return API.post(url, foodData);
    },
    getCreatedFood: () => {
        const url = '/get-created-foods';
        return API.get(url);
    },
    deleteFood: (foodId) => {
        const url = `/delete-food?id=${foodId}`
        return API.delete(url);
    },
    updateFood: (foodData, id) => {
        const url = `/update-food?id=${id}`;
        return API.put(url, foodData);
    },
};

export default Food;
