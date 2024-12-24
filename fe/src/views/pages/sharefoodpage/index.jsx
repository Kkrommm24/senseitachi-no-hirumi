import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from 'react-i18next';
import MapComponent from './MapComponent';
import Food from 'api/food';
import Tag from 'api/tag';
import DropdownSearch from './DropSearch';
import { useLocation, useNavigate } from 'react-router-dom';
import { t } from 'i18next';

function ShareFoodPage() {
  const location = useLocation();
  const food = location.state?.food;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({  
    name: food?.name || '',  
    images: food?.images || [],  
    restaurant: {
      name: food?.foodRestaurant[0]?.restaurant?.name || '',
      address: food?.foodRestaurant[0]?.restaurant?.address || '',
      longitude: food?.foodRestaurant[0]?.restaurant?.longitude || 105.804817, // Default to HN City coordinates
      latitude: food?.foodRestaurant[0]?.restaurant?.latitude || 21.028511
    },  
    tags: food?.foodTag?.map(tag => tag.tag.name) || [],
    price: food?.price || 0,
    ingredients: food?.ingredients?.map(ingredient => ingredient.ingredient.name) || [],
    flavors: food?.flavors?.map(flavor => flavor.flavor.name) || [],
    description: food?.description || '', 
  }); 

  const [ingredients, setIngredients] = useState([]);
  const [flavors, setFlavors] = useState([]);
  const [tags, setTags] = useState([]);

  const sliderSettings = {
    dots: true,
    infinite: formData.images.length >= 2,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ingredientsResponse = await Food.getIngredients();
        const flavorsResponse = await Food.getFlavors();
        const tagsResponse = await Tag.getAllTags();
  
        setIngredients(ingredientsResponse.data.map((ingredient) => ingredient.name));
        setFlavors(flavorsResponse.data.map((flavor) => flavor.name));
        setTags(tagsResponse.data.map((tag) => tag.name));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Upload images
    const uploadedImageUrls = await Promise.all(
      formData.images.map(async (image) => {
        if (typeof image === 'string') {
          return image;
        }
        try {
          const response = await Food.uploadImage(image.file);
          return response.data.imageUrl;
        } catch (error) {
          console.error('Error uploading image:', error);
          return null;
        }
      })
    );

    // Filter out any null values in case of upload errors
    const validImageUrls = uploadedImageUrls.filter(url => url !== null);

    // Update formData with the uploaded image URLs
    const finalFormData = {
      ...formData,
      images: validImageUrls
    };

    // Submit the final form data
    console.log('Form submitted:', finalFormData);
    if (food) {
      // Update existing food
      Food.updateFood(finalFormData, food.id);
      setTimeout(() => {
        navigate('/foods/manage', {flushSync: true});
      }, 2000);
      return;
    }
    Food.addFood(finalFormData);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => ({
      file,
      url: URL.createObjectURL(file)
    }));
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...newImages]
    }));
  };

  const removeImage = (index) => {
    URL.revokeObjectURL(formData.images[index]);
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleMapClick = (event) => {
    setFormData(prev => ({
      ...prev,
      restaurant: {
        ...prev['restaurant'],
        latitude: event['lat'],
        longitude: event['lng']
      }
    }));
  };

  return (
    <div className="container mx-auto p-6">
      <form onSubmit={handleSubmit} className="flex gap-6">
        {/* Left Column */}
        <div className="w-1/2 space-y-6">
          {/* Tên món ăn */}
          <div>
            <input
              type="text"
              placeholder={t('enter_food_name')}
              className="w-full p-2 border rounded-md"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
            />
          </div>
          {/* Price */}
          <div>
            <input
              type="number"
              placeholder={t('enter_price')}
              className='w-full p-2 border rounded-md'
              value={formData.price}
              min="0"
              onChange={(e) => setFormData(prev => ({...prev, price: parseFloat(e.target.value)}))}
            />
          </div>

          {/* Upload hình ảnh */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <label className="cursor-pointer px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                <span>{t('upload_images')}</span>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>

            {/* Image Slider */}
            {formData.images.length > 0 && (
              <div className="mt-4">
                <Slider {...sliderSettings}>
                {formData.images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={typeof image === "string" ? image : image.url}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-64 object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                    >
                      x
                    </button>
                  </div>
                ))}
                </Slider>
              </div>
            )}
          </div>

          {/* Tags */}  
          <div className="space-y-2"> 
            <label className='text-pretty text-sm font-bold'>タグ</label>
            <DropdownSearch data={tags} previousSelectedData={formData.tags}
            setData={(data) =>  setFormData((prev) => ({ ...prev, tags: [...prev.tags, data] }))} 
            removeData={(data) => setFormData((prev) => ({ ...prev, tags: prev.tags.filter((tag) => tag !== data) }))}
            />
          </div>

          {/* Ingredients */}
          <div className="space-y-2"> 
            <label className='text-pretty text-sm font-bold'>材料</label>
            <DropdownSearch data={ingredients} previousSelectedData={formData.ingredients}
            setData={(data) =>  setFormData((prev) => ({ ...prev, ingredients: [...prev.ingredients, data] }))} 
            removeData={(data) => setFormData((prev) => ({ ...prev, ingredients: prev.ingredients.filter((ingredient) => ingredient !== data) }))}
            />
          </div>

          {/* Flavors */}
          <div className="space-y-2"> 
            <label className='text-pretty text-sm font-bold'>フレーバー</label>
            <DropdownSearch data={flavors} previousSelectedData={formData.flavors}
            setData={(data) =>  setFormData((prev) => ({ ...prev, flavors: [...prev.flavors, data] }))} 
            removeData={(data) => setFormData((prev) => ({ ...prev, flavors: prev.flavors.filter((flavor) => flavor !== data) }))}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-1/2 space-y-6">
          {/* Nút lưu */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              {t('share')}
            </button>
          </div>
          {/* Restaurant Name */}
          <div>
            <input
              type="text"
              placeholder={t('enter_restaurant_name')}
              className="w-full p-2 border rounded-md"
              value={formData.restaurant.name}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                restaurant: {
                  ...prev.restaurant,
                  name: e.target.value
                }
              }))}
            />
          </div>

          {/* Restaurant Address */}
          <div>
            <input
              type="text"
              placeholder={t('enter_restaurant_address')}
              className="w-full p-2 border rounded-md"
              value={formData.restaurant.address}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                restaurant: {
                  ...prev.restaurant,
                  address: e.target.value
                }
              }))}
            />
          </div>
          {/* Google Maps */}
          <div className="w-full h-[300px] rounded-md overflow-hidden">
              <MapComponent position={{lat: formData.restaurant.latitude, lng: formData.restaurant.longitude}} onLocationSelect={handleMapClick}/>
          </div>

          {/* Mô tả */}
          <div>
            <textarea
              placeholder={t('enter_food_description')}
              className="w-full p-2 border rounded-md h-32"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({...prev, description: e.target.value}))}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ShareFoodPage;
