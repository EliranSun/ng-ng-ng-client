import React, { useState, useRef } from "react";
import withQueryClient from "../../../HOC/withQueryClient";
import { Button } from "../../Atoms/Button";
import { useSliderData } from "../../../hooks";
import { Loader } from "../../Atoms/Skeleton";

import styles from "./Slider.module.scss";

const Directions = {
  REVERSE: "reverse",
  NORMAL: "normal",
};

const Duration = {
  SLOW: 500,
  FAST: 350,
};

// TODO: simplify/move logic to utils
const getPositions = (imageUrls = [], isInfinite) => {
  return {
    [Directions.NORMAL]: imageUrls.map((_url, index) => {
      const nextIndex = index + 1 >= imageUrls.length ? 0 : index + 1;
      console.log([Directions.NORMAL], {
        init: -(index * 100),
        final: -(nextIndex * 100),
        nextIndex,
      });
      return {
        init: -(index * 100),
        final: -(nextIndex * 100),
        nextIndex,
      };
    }),
    [Directions.REVERSE]: imageUrls.map((_url, index) => {
      const nextIndex = index - 1 < 0 ? imageUrls.length - 1 : index - 1;
      console.log([Directions.REVERSE], {
        init: -(index * 100),
        final: -(nextIndex * 100),
        nextIndex,
      });
      return {
        init: -(index * 100),
        final: -(nextIndex * 100),
        nextIndex,
      };
    }),
  };
};

const Slider = ({ duration, isControllable, isInfinite }) => {
  const imageElement = useRef(null);
  // TODO: add api to get images
  const { imageUrls = [], isLoading } = useSliderData();
  const [slideIndex, setSlideIndex] = useState(0);
  const positions = getPositions(imageUrls);

  const slide = (direction) => {
    const currentDirection = positions[direction][slideIndex];
    const aliceTumbling = [
      { transform: `translateX(${currentDirection.init}%)` },
      { transform: `translateX(${currentDirection.final}%)` },
    ];

    const aliceTiming = {
      duration: Duration.FAST,
      direction: Directions.NORMAL,
      fill: "forwards",
      iterations: 1,
    };

    imageElement.current.animate(aliceTumbling, aliceTiming);
    setSlideIndex(currentDirection.nextIndex);
  };

  const getContainerWidth = () => {
    if (imageElement.current) {
      const { width } = imageElement.current.getBoundingClientRect();
      return width;
    }

    return document.clientWidth;
  };

  const isLast = !isInfinite && slideIndex === imageUrls.length - 1;
  const isFirst = !isInfinite && slideIndex === 0;

  console.log({ isLoading, imageUrls });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles["slider-wrapper"]}>
      {isControllable && (
        <>
          {isFirst ? null : (
            <Button
              onClick={() => {
                slide(Directions.REVERSE);
              }}
            >
              {"<"}
            </Button>
          )}
          {isLast ? null : (
            <Button
              onClick={() => {
                slide(Directions.NORMAL);
              }}
            >
              {">"}
            </Button>
          )}
        </>
      )}
      <div className={styles.slider} ref={imageElement}>
        {imageUrls.map((imageUrl, index) => (
          <div
            key={`${imageUrl}.${index}`}
            style={{
              width: `${getContainerWidth()}px`,
              backgroundImage: `url(${imageUrl})`,
            }}
            alt="slider"
            className={styles.image}
          />
        ))}
      </div>
    </div>
  );
};

export default withQueryClient(Slider);
