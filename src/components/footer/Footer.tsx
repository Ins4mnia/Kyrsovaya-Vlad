import { NextPage } from "next";
import s from "./Footer.module.scss";
import Link from "next/link";

const Footer: NextPage = ({}) => {
  return (
    <footer className={s.Footer}>
      <div className={s.Footer__links}>
        <Link href={"/all-news"}>Все новости</Link>
        <Link href={"/about"}>О компании</Link>
        <Link href={"/contacts"}>Контакты</Link>
      </div>
      <a className={s.Footer__copyright}>© 2024 MedNews</a>
    </footer>
  );
};

export default Footer;
