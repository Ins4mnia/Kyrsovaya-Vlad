import { NextPage } from "next";
import s from "./Header.module.scss";
import Link from "next/link";
import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const Header: NextPage = ({}) => {
  return (
    <header className={s.Header}>
      <Link href={"/"} className={`${s.Header__logo} ${alexandria.className}`}>
        MedNews
      </Link>
      <div className={s.Header__links}>
        <Link href={"/all-news"}>Все новости</Link>
        <Link href={"/about"}>О компании</Link>
        <Link href={"/contacts"}>Контакты</Link>
      </div>
    </header>
  );
};

export default Header;
