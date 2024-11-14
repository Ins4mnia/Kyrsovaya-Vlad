import { NextPage } from "next";
import s from "./page.module.scss";
import MainContentCard from "@/components/mainContentCard/MainContentCard";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const Page: NextPage = ({}) => {
  return (
    <div className={s.Page}>
      <h1 className={s.Page__title}>
        <span className={s.Page__title__highlight}>MedNews:</span> Свежие новости в мире медицины
      </h1>
      <div className={s.Page__content}>
        <div className={s.div1}>
          <Link href={"/all-news/12"}>
            <MainContentCard number={1} text="Высокотехнологичная лаборатория в борьбе с раком" />
          </Link>
        </div>
        <div className={s.div2}>
          <Link href={"/all-news/14"}>
            <MainContentCard number={2} text="Новый прорыв в лечении детского рака" />
          </Link>
        </div>
        <div className={s.div3}>
          <Link href={"/all-news/13"}>
            <MainContentCard number={3} text="Виртуозный хирург спасает жизни" />
          </Link>
        </div>
        <Link href={"/all-news"} className={s.div4}>
          <p className={s.Page__content__link}>
            Подробнее <MoveRight color="#F8F8F8" />
          </p>
        </Link>
        <div className={s.div5}>
          <Link href={"/all-news/17"}>
            <MainContentCard number={4} text="Революционная таблетка против рака" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
