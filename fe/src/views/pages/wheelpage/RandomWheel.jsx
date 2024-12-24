import { useState } from "react";
import { SpinWheel } from "spin-wheel-game";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from 'react-i18next';
import { deselectDish } from "store/slices/selectedDishesSlice";
import Modal from "react-modal";

Modal.setAppElement("#root");

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Component RandomWheel
const RandomWheel = () => {
  const { t } = useTranslation();
  const selectedDishes = useSelector((state) => state.selectedDishes.value);
  const dispatch = useDispatch();
  const segments = selectedDishes.map((dish) => ({
    id: dish.id,
    segmentText: dish.name,
    segColor: getRandomColor(),
  }));

  const [searchQuery, setSearchQuery] = useState(""); // State tìm kiếm

  const [selectedResult, setSelectedResult] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lọc danh sách dựa trên tìm kiếm
  const filteredSegments = segments.filter((segment) =>
    segment.segmentText.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Xóa segment
  const removeSegment = (id) => {
    dispatch(deselectDish(id));
  };

  const handleSpinFinish = (result) => {
    const selectedDish = selectedDishes.find(dish => dish.name === result);
    setSelectedResult(selectedDish);
    setIsModalOpen(true);
  };

  const spinWheelProps = {
    segments,
    onFinished: handleSpinFinish,
    primaryColor: "black",
    contrastColor: "white",
    buttonText: t('spin'),
    isOnlyOnce: false,
    size: 300,
    upDuration: 100,
    downDuration: 600,
    fontFamily: "Arial",
    arrowLocation: "top",
    showTextOnSpin: true,
    isSpinSound: true,
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "50px",
          gap: "20px",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        {/* Phần vòng quay */}
        <div
          className="container"
          style={{
            flex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <h1 style={{ margin: 0 }}>{t('random_wheel')}</h1>
          <div className="relative">
            {/* Custom arrow overlay */}
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 z-1"
              style={{
                width: '70px',
                height: '110px',
                clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                backgroundColor: '#ff5733',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
              }}
            />
            <SpinWheel {...spinWheelProps} key={segments.length} />
          </div>
          {/* Modal hiển thị kết quả */}
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            className="fixed inset-0 flex items-center justify-center p-4 z-50"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50"
          >
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4 text-center">🎉 {t('congratulations')}! 🎉</h2>
              <p className="text-lg mb-4 text-center">
                <strong>{t('food')}: {selectedResult?.name}</strong>
              </p>
              <img src={selectedResult?.images[0]} alt={selectedResult?.name} className="w-full h-auto max-w-sm mx-auto rounded-lg mb-4" />
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                onClick={() => setIsModalOpen(false)}
              >
                {t('close')}
              </button>
            </div>
          </Modal>
        </div>

        {/* Phần sidebar và danh sách */}
        <div
          className="sidebar"
          style={{
            flex: 1,
            backgroundColor: "#ffeeba",
            borderRadius: "8px",
            alignItems: "center",
            padding: "15px",
          }}
        >
          <form>
            <input
              type="text"
              name="text"
              placeholder={t('search_favorite_food')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
              }}
            />
          </form>
          <ul
            className="item-list"
            style={{
              listStyle: "none",
              padding: "0",
              margin: "0",
            }}
          >
            {filteredSegments.length > 0 ? (
              filteredSegments.map((segment, index) => (
                <li
                  key={index}
                  className="list-item"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 5px",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span
                      className="color-box"
                      style={{
                        width: "15px",
                        height: "15px",
                        backgroundColor: segment.segColor,
                        borderRadius: "3px",
                        marginRight: "10px",
                      }}
                    ></span>
                    {segment.segmentText}
                  </div>
                  <button
                    onClick={() => removeSegment(segment.id)} // Xóa mục
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "#ff5733",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      marginLeft: "5px",
                    }}
                  >
                    {t('delete')}
                  </button>
                </li>
              ))
            ) : (
              <li
                style={{
                  textAlign: "center",
                  padding: "10px",
                  color: "#666",
                  fontStyle: "italic",
                }}
              >
                {t('no_items_found')}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RandomWheel;
