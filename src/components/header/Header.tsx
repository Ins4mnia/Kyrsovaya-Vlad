"use client";
import { NextPage } from "next";
import s from "./Header.module.scss";
import Link from "next/link";
import { Alexandria } from "next/font/google";
import { AlignJustify } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const alexandria = Alexandria({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const Header: NextPage = () => {
  const [BurgerIsActive, setBurgerIsActive] = useState(false);
  const burgerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (burgerRef.current && !burgerRef.current.contains(event.target as Node)) {
      setBurgerIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setBurgerIsActive(false);
  };

  return (
    <header className={s.Header}>
      <Link href={"/"} className={`${s.Header__logo} ${alexandria.className}`}>
        MedNews
      </Link>
      <div className={s.Header__links}>
        <Link href={"/all-news"}>Все новости</Link>
        <Link href={"/about"}>О компании</Link>
        <Link href={"/contacts"}>Контакты</Link>
        <AlignJustify className={s.Header__burger__button} onClick={() => setBurgerIsActive(!BurgerIsActive)} />
      </div>
      <div ref={burgerRef} className={`${s.Header__burger} ${BurgerIsActive ? s.Active : null}`}>
        <div className={s.Header__burger__content}>
          <Link href={"/all-news"} onClick={handleLinkClick}>
            Все новости
          </Link>
          <Link href={"/about"} onClick={handleLinkClick}>
            О компании
          </Link>
          <Link href={"/contacts"} onClick={handleLinkClick}>
            Контакты
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
