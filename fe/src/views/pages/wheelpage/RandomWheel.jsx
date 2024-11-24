import { useState } from "react";
import { SpinWheel } from "spin-wheel-game";
import { useSelector, useDispatch } from "react-redux";
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
    setSelectedResult(result);
    setIsModalOpen(true);
  };

  const spinWheelProps = {
    segments,
    onFinished: handleSpinFinish,
    primaryColor: "black",
    contrastColor: "white",
    buttonText: "Spin",
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
          <h1 style={{ margin: 0 }}>ランダムホイール</h1>
          <SpinWheel {...spinWheelProps}
            key={segments.length}
          />
          {/* Modal hiển thị kết quả */}
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            style={{
              content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                padding: "20px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <h2>🎉 お祝い! 🎉</h2>
            <p>
              <strong style={{ fontSize: "20px" }}>食べ物: {selectedResult} </strong>
            </p>
            <button
              style={{
                marginTop: "20px",
                padding: "10px 15px",
                backgroundColor: "#ff5733",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
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
              placeholder="Search your favorite food..."
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
                    Delete
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
                No items found
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RandomWheel;
