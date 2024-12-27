import { NextPage } from "next";
import s from "./page.module.scss";
import MainContentCard from "@/components/mainContentCard/MainContentCard";
import Link from "next/link";

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
      <h1 className={s.Page__title}>Все новости</h1>
      <div className={s.Page__news}>
        {data.data.map((elem) => (
          <Link key={elem.id} href={`/all-news/${elem.id}`}>
            <MainContentCard text={elem.title} src={elem.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
