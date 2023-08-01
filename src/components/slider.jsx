import slide1 from "../assets/slide-1.jpg";
import slide2 from "../assets/slide-2.jpg";
import slide3 from "../assets/slide-3.jpg";
import slide4 from "../assets/slide-4.jpg";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useState } from "react";

const slides = [slide1, slide2, slide3, slide4];

export default function Slider() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [mouseOnSlider, setMouseOnSlider] = useState(false);

  const rightArrowClick = () => {
    if (currentSlideIndex < 3) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      setCurrentSlideIndex(0);
    }
  };
  const leftArrowClick = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    } else {
      setCurrentSlideIndex(3);
    }
  };
  const handleMouseEnter = () => {
    setMouseOnSlider(true);
  };

  const handleMouseLeave = () => {
    setMouseOnSlider(false);
  };

  return (
    <div
      id="slider"
      className="relative my-[51px] h-140 w-[76rem]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`absolute top-1/2 text-white transition-opacity ${
          mouseOnSlider ? "opacity-100" : "opacity-0"
        }`}
        onClick={leftArrowClick}
      >
        <RiArrowLeftSLine size={28} />
      </button>
      <button
        className={`absolute right-0 top-1/2 text-white transition-opacity ${
          mouseOnSlider ? "opacity-100" : "opacity-0"
        }`}
        onClick={rightArrowClick}
      >
        <RiArrowRightSLine size={28} />
      </button>
      <div
        id="slide-img-container"
        style={{
          backgroundImage: `url(${slides[currentSlideIndex]})`,
        }}
        className="h-full w-full rounded-3xl bg-cover bg-no-repeat duration-500"
      ></div>
    </div>
  );
}
