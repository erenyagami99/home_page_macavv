import React, { useState, useEffect } from "react";
import "./App.css";
import Lottie from "react-lottie";
import pulseData from "./lotties/108798-pulse.json";
import savingsData from "./lotties/138467-savings.json";

function App() {
  const [details, setDetails] = useState(1);
  const [arrowsVisible, setArrowsVisible] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleMouseEnter = (index) => {
    setArrowsVisible((prevArrows) => {
      const updatedArrows = [...prevArrows];
      updatedArrows[index] = true;
      return updatedArrows;
    });
  };

  const handleMouseLeave = (index) => {
    setArrowsVisible((prevArrows) => {
      const updatedArrows = [...prevArrows];
      updatedArrows[index] = false;
      return updatedArrows;
    });
  };

  const [buttonSelect, setButtonSelect] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [isColorChanged, setIsColorChanged] = useState(false);

  const handleClick = (index) => {
    const updatedButtonSelect = [...buttonSelect];
    updatedButtonSelect[index] = !updatedButtonSelect[index];
    setButtonSelect(updatedButtonSelect);
    setIsColorChanged(!isColorChanged);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pulseData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const savingsDataOptions = {
    loop: true,
    autoplay: true,
    animationData: savingsData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const getColor = (index, isSelected) => {
    if (isSelected) {
      return "#0e0e0e";
    } else if (arrowsVisible[index]) {
      return "#ffffff";
    } else if (!arrowsVisible[index] && !isSelected) {
      return "#96969696";
    }
  };

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const maxNumber1 = 14;
  const maxNumber2 = 30;
  const maxNumber3 = 27;

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (count1 < maxNumber1) {
        setCount1((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval1);
      }
    }, 1000);

    const interval2 = setInterval(() => {
      if (count2 < maxNumber2) {
        setCount2((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval2);
      }
    }, 1000);

    const interval3 = setInterval(() => {
      if (count3 < maxNumber3) {
        setCount3((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval3);
      }
    }, 1000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [count1, count2, count3]);

  return (
    <div>
      <div className="nav-div">
        <div className="nav-sub-div">
          <img src="/images/Logo.png" alt="logo" />
          <div className="item-div">
            {buttonSelect.map((isSelected, index) => (
              <button
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => handleClick(index)}
                style={{
                  color: getColor(index, isSelected),
                }}
                className={`${isSelected ? "menu-item-green" : "menu-item"}`}
              >
                <p>Menu Item {index + 1}</p>
                {!arrowsVisible[index] && !isSelected && (
                  <img src="/images/down-arrow.svg" alt="/" />
                )}
                {isSelected && (
                  <img src="/images/down-arrow-black.svg" alt="/" />
                )}
              </button>
            ))}

            <button className="nav-button">Call To Action</button>
          </div>
        </div>
      </div>
      <div className="first-section">
        <div className="vector-div">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            className="vector-img"
            height="2"
          >
            <path
              d="M0 0h22a1 1 0 0 1 1 1v1H1a1 1 0 0 1-1-1V0z"
              fill-rule="evenodd"
              data-name="Rectangle 11"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            className="vector-img2"
            height="2"
          >
            <path
              d="M0 0h22a1 1 0 0 1 1 1v1H1a1 1 0 0 1-1-1V0z"
              fill-rule="evenodd"
              data-name="Rectangle 11"
            />
          </svg>
        </div>
        <div className="heading-div">
          <h1>This is a</h1>
          <h1>Test Heading</h1>
          <hr className="horizontal-line" />
          <div className="option-div">
            <p className="option-name">Brand</p>
            <p className="option-name">Social</p>
            <p className="option-name">Performance</p>
            <p className="option-name">UI/UX</p>
          </div>
        </div>
      </div>
      <div className="second-section">
        <div className="lottie-container">
          <Lottie options={defaultOptions} />
        </div>
        <div className="second-inner-section">
          <div className="writing-div">
            <div>
              <h1>This is a </h1>
              <h1>Test Heading</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <button className="read-button">Read More</button>
          </div>
          <div className="section-container">
            <div className="section-one">
              <div className="img-container-one img-container">
                <div className="details-div">
                  <h1>{count1}</h1>
                  <p>Branding Projects</p>
                </div>
              </div>
              <div className="img-container-two img-container">
                <div className="details-div">
                  <h1>{count3}</h1>
                  <p>Social Media Projects</p>
                </div>
              </div>
              <div className="img-container-two img-container">
                <div className="details-div">
                  <h1>{count3}</h1>
                  <p>Social Media Projects</p>
                </div>
              </div>
            </div>
            <div className="section-two">
              <div className="img-container-three img-container">
                <div className="details-div">
                  <h1>{count2}</h1>
                  <p>Website Projects</p>
                </div>
              </div>
              <div className="img-container-four img-container">
                <div className="details-div">
                  <h1>{count2}</h1>
                  <p>Performance Projects</p>
                </div>
              </div>
              <div className="img-container-four img-container">
                <div className="details-div">
                  <h1>{count2}</h1>
                  <p>Performance Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="third-section">
        <div className="third-inner-section">
          <div className="service-heading-div">
            <h1>Services</h1>
            <hr />
          </div>
          <div className="service-container">
            <div className="service-image-container">
              <div className="service-image-div">
                <img
                  className="service-image"
                  src="/images/heavy-automation-rob.png"
                  alt="/"
                />
                <div className="image-heading">
                  <div className="heading-inner">
                    <h1>Brand Identity</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className="read-more">
                      <p>Read More</p>
                      <img src="/images/side-icon.png" alt="/" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-image-div">
                <img
                  className="service-image"
                  src="/images/large-white-room-wit.png"
                  alt="/"
                />
                <div className="image-heading">
                  <div className="heading-inner">
                    <h1>Brand Identity</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className="read-more">
                      <p>Read More</p>
                      <img src="/images/side-icon.png" alt="/" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-description-div">
              <div className="service-description">
                <div className="service-details-heading">
                  <h1
                    style={{
                      color: details === 1 ? "#0EEBCA" : "#ffffff",
                    }}
                  >
                    Performance Marketing
                  </h1>
                  {details === 1 && (
                    <img className="cursor" src="/images/up-icon.png" alt="/" />
                  )}
                  {details !== 1 && (
                    <img
                      className="cursor"
                      onClick={() => setDetails(1)}
                      src="/images/down-icon.png"
                      alt="/"
                    />
                  )}
                </div>
                {details === 1 && (
                  <div className="description-details">
                    <div className="savings-lottie">
                      <Lottie options={savingsDataOptions} />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                )}
              </div>
              <div className="service-description">
                <div className="service-details-heading">
                  <h1
                    style={{
                      color: details === 2 ? "#0EEBCA" : "#ffffff",
                    }}
                  >
                    Brand Strategy
                  </h1>
                  {details === 2 && (
                    <img className="cursor" src="/images/up-icon.png" alt="/" />
                  )}
                  {details !== 2 && (
                    <img
                      className="cursor"
                      onClick={() => setDetails(2)}
                      src="/images/down-icon.png"
                      alt="/"
                    />
                  )}
                </div>
                {details === 2 && (
                  <div className="description-details">
                    <div className="savings-lottie">
                      <Lottie options={savingsDataOptions} />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                )}
              </div>
              <div className="service-description">
                <div className="service-details-heading">
                  <h1
                    style={{
                      color: details === 3 ? "#0EEBCA" : "#ffffff",
                    }}
                  >
                    UX Strategy
                  </h1>
                  {details === 3 && (
                    <img className="cursor" src="/images/up-icon.png" alt="/" />
                  )}
                  {details !== 3 && (
                    <img
                      className="cursor"
                      onClick={() => setDetails(3)}
                      src="/images/down-icon.png"
                      alt="/"
                    />
                  )}
                </div>
                {details === 3 && (
                  <div className="description-details">
                    <div className="savings-lottie">
                      <Lottie options={savingsDataOptions} />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                )}
              </div>
              <div className="service-description">
                <div className="service-details-heading">
                  <h1
                    style={{
                      color: details === 4 ? "#0EEBCA" : "#ffffff",
                    }}
                  >
                    ERP Development
                  </h1>
                  {details === 4 && (
                    <img className="cursor" src="/images/up-icon.png" alt="/" />
                  )}
                  {details !== 4 && (
                    <img
                      className="cursor"
                      onClick={() => setDetails(4)}
                      src="/images/down-icon.png"
                      alt="/"
                    />
                  )}
                </div>
                {details === 4 && (
                  <div className="description-details">
                    <div className="savings-lottie">
                      <Lottie options={savingsDataOptions} />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
