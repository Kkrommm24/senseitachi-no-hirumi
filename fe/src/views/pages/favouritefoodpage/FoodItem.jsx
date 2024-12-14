const FoodItem = ({ id, image, name, removeFood }) => {
  return (
    <div 
    key={id}
    className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img
        src={image}
        alt={name}
        className="w-full aspect-square object-cover"
      />
      <div className="p-3 flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-800">{name}</h2>
        <button
          onClick={() => removeFood(id)}
          className="text-red-500 hover:text-red-600 p-1"
          >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default FoodItem;