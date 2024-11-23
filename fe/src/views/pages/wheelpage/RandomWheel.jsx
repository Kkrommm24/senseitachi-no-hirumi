import React, { useState } from 'react';
import { SpinWheel } from 'spin-wheel-game';
import Modal from 'react-modal';

Modal.setAppElement("#root");

// Component RandomWheel
const RandomWheel = () => {
  const [segments, setSegments] = useState([
    { segmentText: "Food 1", segColor: "#FF5733" },
    { segmentText: "Food 2", segColor: "#33FF57" },
    { segmentText: "Food 3", segColor: "#3357FF" },
    { segmentText: "Better Luck Next Time", segColor: "#F0E68C" },
    { segmentText: "Food 4", segColor: "#FF33A6" },
  ]);

  const [searchQuery, setSearchQuery] = useState(""); // State tìm kiếm

  const [selectedResult, setSelectedResult] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lọc danh sách dựa trên tìm kiếm
  const filteredSegments = segments.filter((segment) =>
    segment.segmentText.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Xóa segment
  const removeSegment = (index) => {
    const updatedSegments = segments.filter((_, i) => i !== index);
    setSegments(updatedSegments);
  };
  // Hàm xử lý khi vòng quay kết thúc
  const handleSpinFinish = (result) => {
    setSelectedResult(result);
    setIsModalOpen(true);
  };

  // Thuộc tính truyền vào SpinWheel
  const spinWheelProps = {
    segments,
    onFinished: handleSpinFinish,
    primaryColor: 'black',
    contrastColor: 'white',
    buttonText: 'Spin',
    isOnlyOnce: false,
    size: 300,
    upDuration: 100,
    downDuration: 600,
    fontFamily: 'Arial',
    arrowLocation: 'top',
    showTextOnSpin: true,
    isSpinSound: true,
  };

  return (
    <div><div class="search-area">
      <div class="search-input">
        <div class="search-close">
          <span></span>
          <span></span>
        </div>
        <form>
          <input type="text" name="text" placeholder="*Search Here......." />
        </form>
      </div>
    </div>

      <div class="mobile-menu">
        <nav class="mobile-header d-xl-none">
          <div class="header-logo">
            <a href="index.html" class="logo"><img src="assets/images/logo/01.png" alt="logo" /></a>
          </div>
          <div class="header-bar">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
        <nav class="menu">
          <div class="mobile-menu-area d-xl-none">
            <div class="mobile-menu-area-inner" id="scrollbar">
              <div class="mobile-search">
                <input type="text" placeholder="Search Here........." />
                <button type="submit"><i class="icofont-search-2"></i></button>
              </div>
              <ul>
                <li>
                  <a class="active" href="index-3.html#0">Home</a>
                  <ul>
                    <li><a href="index.html">Home Page One</a></li>
                    <li><a href="index-2.html">Home Page Two</a></li>
                    <li><a class="active" href="index-3.html">Home Page</a></li>
                    <li><a href="index-4.html">Home Page Four</a></li>
                    <li><a href="index-5.html">Home Page Five</a></li>
                  </ul>
                </li>
                <li><a href="about.html">About</a></li>
                <li>
                  <a href="index-3.html#0">Pages</a>
                  <ul>
                    <li>
                      <a href="index-3.html#0">Category</a>
                      <ul>
                        <li><a href="food-menu.html">Food Category</a></li>
                        <li><a href="menu-card.html">Category style 1</a></li>
                        <li><a href="menu-card-2.html">Category style 2</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="index-3.html#0">Chef</a>
                      <ul>
                        <li><a href="homechef.html">Home Chef</a></li>
                        <li><a href="homechef-single.html">Home Chef Single</a></li>
                      </ul>
                    </li>
                    <li><a href="recepi-single.html">Single Recipe</a></li>
                    <li><a href="404.html">404 Page</a></li>
                    <li><a href="coming-soon.html">Coming Soon Page</a></li>
                  </ul>
                </li>
                <li>
                  <a href="index-3.html#0">Blog</a>
                  <ul>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="blog-single.html">Blog Single</a></li>
                  </ul>
                </li>
                <li>
                  <a href="index-3.html#0">Shop</a>
                  <ul>
                    <li><a href="shop-page.html">Shop Page</a></li>
                    <li><a href="shop-single.html">Shop Single style-1</a></li>
                    <li><a href="shop-single-2.html">Shop Single style-2</a></li>
                    <li><a href="cart-page.html">Cart Page</a></li>
                  </ul>
                </li>
                <li><a href="contact-us.html">Contact</a></li>
              </ul>
              <div class="scocial-media">
                <a href="index-3.html#" class="facebook"><i class="icofont-facebook"></i></a>
                <a href="index-3.html#" class="twitter"><i class="icofont-twitter"></i></a>
                <a href="index-3.html#" class="linkedin"><i class="icofont-linkedin"></i></a>
                <a href="index-3.html#" class="vimeo"><i class="icofont-vimeo"></i></a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <header class="header-section header-3 d-xl-block d-none">
        <div class="container">
          <div class="">
            <div class="header-top w-100">
              <div class="logo">
                <a href="index.html"><img src="assets/images/logo/01.png" alt="logo" /></a>
              </div>
              <div class="menu-search-form">
                <div class="widget-search">
                  <form action="https://foxcoders.com/" method="get">
                    <input type="text" placeholder="Type here and press enter..." name="s" />
                    <button type="submit"><i class="icofont-search-2"></i></button>
                  </form>
                </div>
              </div>
              <div class="scocial-media">
                <a href="index-3.html#" class="facebook"><i class="icofont-facebook"></i></a>
                <a href="index-3.html#" class="twitter"><i class="icofont-twitter"></i></a>
                <a href="index-3.html#" class="linkedin"><i class="icofont-linkedin"></i></a>
                <a href="index-3.html#" class="vimeo"><i class="icofont-vimeo"></i></a>
              </div>
            </div>
            <div class="header-bottom w-100">
              <div class="main-menu">
                <ul>
                  <li>
                    <a class="active" href="index-3.html#0">Home</a>
                    {/* <ul>
                                <li><a href="index.html">Home Page One</a></li>
                                <li><a href="index-2.html">Home Page Two</a></li>
                                <li><a class="active" href="index-3.html">Home Page Three</a></li>
                                <li><a href="index-4.html">Home Page Four</a></li>
                                <li><a href="index-5.html">Home Page Five</a></li>
                            </ul> */}
                  </li>
                  <li><a href="about.html">About</a></li>
                  <li>
                    <a href="index-3.html#0">Pages</a>
                    <ul>
                      <li>
                        <a href="index-3.html#0">Category</a>
                        <ul>
                          <li><a href="food-menu.html">Food Category</a></li>
                          <li><a href="menu-card.html">Category style 1</a></li>
                          <li><a href="menu-card-2.html">Category style 2</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="index-3.html#0">Chef</a>
                        <ul>
                          <li><a href="homechef.html">Home Chef</a></li>
                          <li><a href="homechef-single.html">Home Chef Single</a></li>
                        </ul>
                      </li>
                      <li><a href="recepi-single.html">Single Recipe</a></li>
                      <li><a href="404.html">404 Page</a></li>
                      <li><a href="coming-soon.html">Coming Soon Page</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="index-3.html#0">Blog</a>
                    <ul>
                      <li><a href="blog.html">Blog</a></li>
                      <li><a href="blog-single.html">Blog Single</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="index-3.html#0">Shop</a>
                    <ul>
                      <li><a href="shop-page.html">Shop Page</a></li>
                      <li><a href="shop-single.html">Shop Single style-1</a></li>
                      <li><a href="shop-single-2.html">Shop Single style-2</a></li>
                      <li><a href="cart-page.html">Cart Page</a></li>
                    </ul>
                  </li>
                  <li><a href="contact-us.html">Contact</a></li>
                </ul>
              </div>
              <div class="author-option">
                <div class="author-area">
                  <div class="city-lang">
                    <img src="assets/images/header/01.png" alt="city-lang" />
                    <select name="lang" id="lang">
                      <option value="1">ENG</option>
                      <option value="2">BAN</option>
                      <option value="3">ESP</option>
                    </select>
                  </div>
                  <div class="cart-option">
                    <img src="assets/images/header/cart.png" alt="shop-cart" />
                    <div class="count-item">04</div>
                    <div class="cart-content">
                      <div class="cart-title">
                        <div class="add-item">4 Items Added</div>
                        <div class="list-close"><a href="index-3.html#">Close</a></div>
                      </div>
                      <div class="cart-scr scrollbar">
                        <div class="cart-con-item">
                          <div class="cart-item">
                            <div class="cart-inner">
                              <div class="cart-top">
                                <div class="thumb">
                                  <a href="index-3.html#"><img src="assets/images/popular-food/01.jpg" alt="" /></a>
                                </div>
                                <div class="content">
                                  <a href="index-3.html#">Split Remedy Split End Shampoo</a>
                                </div>
                                <div class="remove-btn">
                                  <a href="index-3.html#"><i class="icofont-close"></i></a>
                                </div>
                              </div>
                              <div class="cart-bottom">
                                <div class="sing-price">Tk. 140</div>
                                <div class="cart-plus-minus"><div class="dec qtybutton">-</div>
                                  <div class="dec qtybutton">-</div>
                                  <input class="cart-plus-minus-box" type="text" name="qtybutton" value="1" />
                                  <div class="inc qtybutton">+</div>
                                  <div class="inc qtybutton">+</div></div>
                                <div class="total-price">Tk. 280.00</div>
                              </div>
                            </div>
                          </div>
                          <div class="cart-item">
                            <div class="cart-inner">
                              <div class="cart-top">
                                <div class="thumb">
                                  <a href="index-3.html#"><img src="assets/images/popular-food/02.jpg" alt="" /></a>
                                </div>
                                <div class="content">
                                  <a href="index-3.html#">Split Remedy Split End Shampoo</a>
                                </div>
                                <div class="remove-btn">
                                  <a href="index-3.html#"><i class="icofont-close"></i></a>
                                </div>
                              </div>
                              <div class="cart-bottom">
                                <div class="sing-price">Tk. 140</div>
                                <div class="cart-plus-minus"><div class="dec qtybutton">-</div>
                                  <div class="dec qtybutton">-</div>
                                  <input class="cart-plus-minus-box" type="text" name="qtybutton" value="1" />
                                  <div class="inc qtybutton">+</div>
                                  <div class="inc qtybutton">+</div></div>
                                <div class="total-price">Tk. 280.00</div>
                              </div>
                            </div>
                          </div>
                          <div class="cart-item">
                            <div class="cart-inner">
                              <div class="cart-top">
                                <div class="thumb">
                                  <a href="index-3.html#"><img src="assets/images/popular-food/03.jpg" alt="" /></a>
                                </div>
                                <div class="content">
                                  <a href="index-3.html#">Split Remedy Split End Shampoo</a>
                                </div>
                                <div class="remove-btn">
                                  <a href="index-3.html#"><i class="icofont-close"></i></a>
                                </div>
                              </div>
                              <div class="cart-bottom">
                                <div class="sing-price">Tk. 140</div>
                                <div class="cart-plus-minus"><div class="dec qtybutton">-</div>
                                  <div class="dec qtybutton">-</div>
                                  <input class="cart-plus-minus-box" type="text" name="qtybutton" value="1" />
                                  <div class="inc qtybutton">+</div>
                                  <div class="inc qtybutton">+</div></div>
                                <div class="total-price">Tk. 280.00</div>
                              </div>
                            </div>
                          </div>
                          <div class="cart-item">
                            <div class="cart-inner">
                              <div class="cart-top">
                                <div class="thumb">
                                  <a href="index-3.html#"><img src="assets/images/popular-food/04.jpg" alt="" /></a>
                                </div>
                                <div class="content">
                                  <a href="index-3.html#">Split Remedy Split End Shampoo</a>
                                </div>
                                <div class="remove-btn">
                                  <a href="index-3.html#"><i class="icofont-close"></i></a>
                                </div>
                              </div>
                              <div class="cart-bottom">
                                <div class="sing-price">Tk. 140</div>
                                <div class="cart-plus-minus"><div class="dec qtybutton">-</div>
                                  <div class="dec qtybutton">-</div>
                                  <input class="cart-plus-minus-box" type="text" name="qtybutton" value="1" />
                                  <div class="inc qtybutton">+</div>
                                  <div class="inc qtybutton">+</div></div>
                                <div class="total-price">Tk. 280.00</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="cart-scr-bottom">
                        <ul>
                          <li>
                            <div class="title">Subtotal</div>
                            <div class="price">Tk. 1045.00</div>
                          </li>
                          <li>
                            <div class="title">Shipping</div>
                            <div class="price">Tk. 40.00</div>
                          </li>
                          <li>
                            <div class="title">Cart Total</div>
                            <div class="price">Tk. 1085.00</div>
                          </li>
                        </ul>
                        <a href="index-3.html#" class="food-btn"><span>Place Order</span></a>
                      </div>
                    </div>
                  </div>
                  <div class="author-account">
                    <div class="author-icon">
                      <img src="assets/images/chef/author/08.jpg" alt="author" />
                    </div>
                    <div class="author-select">
                      <select name="author-select" id="author-select">
                        <option value="1">My Account </option>
                        <option value="2">Log Out </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "50px",
          gap: "20px",
          paddingLeft: "50px",
          paddingRight: "50px"
        }}
      >
        {/* Phần vòng quay */}
        <div className="container" style={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}>
          <h1 style={{ margin: 0 }}>ランダムホイール</h1>
          <SpinWheel {...spinWheelProps} />
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
            <h2>🎉 Congratulations! 🎉</h2>
            <p>The food you got: <strong>{selectedResult}</strong></p>
            <button
              style={{
                marginTop: "20px",
                padding: "10px 15px",
                backgroundColor: "#33FF57",
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
              }} />
          </form>
          {/* Danh sách mục */}
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
                    onClick={() => removeSegment(index)} // Xóa mục
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
