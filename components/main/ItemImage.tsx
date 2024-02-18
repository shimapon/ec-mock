"use client";

/* eslint-disable @next/next/no-img-element */
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

import style from "./ItemImage.module.scss";
import { imageUrlList } from "../../utils/mocks";

export const ItemImage: React.FC = () => {
  const [emblaRef, embla] = useEmblaCarousel();
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const [selectedIndex, setSelectedIndex] = useState(1);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => {
      setSelectedIndex(embla.selectedScrollSnap() + 1);
    };
    embla.on("select", onSelect);
  }, [embla]);

  return (
    <>
      <div className={style.embla} ref={emblaRef}>
        <div className={style.embla__container}>
          {imageUrlList.map((url, index) => {
            return (
              <div key={index} className={style.embla__slide}>
                <img
                  src={url}
                  alt="商品画像"
                  style={{ width: "100%", maxWidth: "528px" }}
                />
              </div>
            );
          })}
        </div>
        <div className={style.list}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
            />
          </svg>
        </div>
      </div>
      {selectedIndex !== imageUrlList.length && (
        <button className={style.right} onClick={scrollNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      )}
      {selectedIndex !== 1 && (
        <button className={style.left} onClick={scrollPrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      )}
      <p
        className={style.imageIndex}
      >{`${selectedIndex} / ${imageUrlList.length}`}</p>
    </>
  );
};
