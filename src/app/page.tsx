import { NextPage } from "next";
import s from "./page.module.scss";
import MainContentCard from "@/components/mainContentCard/MainContentCard";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import Slider from "@/components/slider/Slider";

interface NewsItem {
  id: number;
  title: string;
}

interface NewsResponse {
  data: NewsItem[];
}

const Page: NextPage = async ({}) => {
  const response = await fetch("http://localhost:8081/api/news/all");
  const data: NewsResponse = await response.json();

  return (
    <div className={s.Page}>
      <h1 className={s.Page__title}>
        <span className={s.Page__title__highlight}>MedNews:</span> Свежие новости в мире медицины
      </h1>
      <h2>Новости недели</h2>

      <Slider slides={data.data} />

      <h2>Свежие новости</h2>
      <div className={s.Page__content}>
        {data.data.map((elem, index) => (
          <div key={index} className={s[`div${index + 1}`]}>
            <Link href={`/all-news/${elem.id}`}>
              <MainContentCard src={elem.id} text="Высокотехнологичная лаборатория в борьбе с раком" />
            </Link>
          </div>
        ))}
        <Link href={"/all-news"} className={s.div5}>
          <p className={s.Page__content__link}>
            Подробнее <MoveRight color="#F8F8F8" />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Page;
