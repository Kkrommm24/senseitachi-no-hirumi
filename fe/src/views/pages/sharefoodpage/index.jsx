import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';  
import Slider from 'react-slick';  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import MapComponent from './MapComponent';

function ShareFoodPage() {  
  const [formData, setFormData] = React.useState({  
    name: '',  
    images: [],  
    location: {  
      lat: 21.028511,  // Default to HN City coordinates  
      lng: 105.804817 
    },  
    tags: [],  
    description: ''  
  });  

  const [imageUrls, setImageUrls] = React.useState([]);  

  const mapContainerStyle = {  
    width: '100%',  
    height: '300px'  
  };  

  const sliderSettings = {  
    dots: true,  
    infinite: imageUrls.length >= 2, 
    speed: 500,  
    slidesToShow: 1,  
    slidesToScroll: 1,  
    arrows: true  
  };  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    console.log('Form submitted:', formData);  
  };  

  const handleImageUpload = (e) => {  
    const files = Array.from(e.target.files);  
    const urls = files.map(file => URL.createObjectURL(file));  
    setImageUrls(prev => [...prev, ...urls]);  
    setFormData(prev => ({  
      ...prev,  
      images: [...prev.images, ...files]  
    }));  
  };  

  const removeImage = (index) => {  
    URL.revokeObjectURL(imageUrls[index]);  
    setImageUrls(prev => prev.filter((_, i) => i !== index));  
    setFormData(prev => ({  
      ...prev,  
      images: prev.images.filter((_, i) => i !== index)  
    }));  
  };  

  const handleMapClick = (event) => {  
    setFormData(prev => ({  
      ...prev,  
      location: {  
        lat: event['lat'],  
        lng: event['lng'] 
      }  
    }));  
  };  

  const addTag = () => {  
    const newTag = document.getElementById('tagInput').value;  
    if (newTag) {  
      setFormData(prev => ({  
        ...prev,  
        tags: [...prev.tags, newTag]  
      }));  
      document.getElementById('tagInput').value = '';  
    }  
  };  

  const removeTag = (index) => {  
    setFormData(prev => ({  
      ...prev,  
      tags: prev.tags.filter((_, i) => i !== index)  
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
              placeholder="料理名を入力してください"  
              className="w-full p-2 border rounded-md"  
              value={formData.name}  
              onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}  
            />  
          </div>  

          {/* Upload hình ảnh */}  
          <div className="space-y-2">  
            <div className="flex items-center space-x-2">  
              <label className="cursor-pointer px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">  
                <span>画像をアップロードします</span>  
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
            {imageUrls.length > 0 && (  
              <div className="mt-4">  
                <Slider {...sliderSettings}>  
                  {imageUrls.map((url, index) => (  
                    <div key={index} className="relative">  
                      <img  
                        src={url}  
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
            <div className="flex items-center space-x-2">  
              <input  
                id="tagInput"  
                type="text"  
                placeholder="タグを入力します"  
                className="p-2 border rounded-md"  
              />  
              <button  
                type="button"  
                onClick={addTag}  
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"  
              >  
                +  
              </button>  
            </div>  
            <div className="flex flex-wrap gap-2">  
              {formData.tags.map((tag, index) => (  
                <div  
                  key={index}  
                  className="flex items-center bg-gray-100 rounded-full px-3 py-1"  
                >  
                  <span>{tag}</span>  
                  <button  
                    type="button"  
                    onClick={() => removeTag(index)}  
                    className="ml-2 text-red-500"  
                  >  
                    x  
                  </button>  
                </div>  
              ))}  
            </div>  
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
              共有
            </button>  
          </div>  
          {/* Google Maps */}  
          <div className="w-full h-[300px] rounded-md overflow-hidden">  
              <MapComponent position={formData.location} onLocationSelect={handleMapClick}/>
          </div>  

          {/* Mô tả */}  
          <div>  
            <textarea  
              placeholder="食べ物の説明を入力してください"  
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