"use client";
import { useState } from "react";
import { NextPage } from "next";
import s from "./Slider.module.scss";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import Image from "next/image";
import Modal from "../modal/Modal";
import Link from "next/link";

interface slide {
  title: string;
  id: number;
}

interface Props {
  slides: slide[];
}

const Slider: NextPage<Props> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={s.sliderContainer}>
      <span className={s.prevButton} onClick={handlePrev}>
        <ChevronsLeft color="#ffffff" />
      </span>

      <div
        className={s.slidesWrapper}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div onClick={openModal} key={index} className={`${s.slide} ${index === currentSlide ? s.active : s.hidden}`}>
            <span className={s.gradient}></span>
            <Image src={`/MainContentCardImage${slide.id}.jpg`} alt={slide.title} className={s.slide__image} width={1000} height={1000} />
            <div className={s.slide__info}>
              <h2 className={s.slide__info__text}>{slide.title}</h2>
            </div>
          </div>
        ))}
      </div>

      <span className={s.nextButton} onClick={handleNext}>
        <ChevronsRight color="#ffffff" />
      </span>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>{slides[currentSlide].title}</h2>
          <Image
            src={`/MainContentCardImage${slides[currentSlide].id}.jpg`}
            className={s.slide__image__modal}
            width={1000}
            height={1000}
            alt="Фотография новости"
          />
          <Link href={`/all-news/${slides[currentSlide].id}`} className={s.slide__info__button}>
            Читать полностью
          </Link>
        </Modal>
      )}
    </div>
  );
};

export default Slider;
