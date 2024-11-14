import { NextPage } from "next";
import s from "./page.module.scss";
import MainContentCard from "@/components/mainContentCard/MainContentCard";
import Link from "next/link";

interface Props {}
const data = [
  {
    id: 11,
    number: 1,
    text: "Какой-либо текст",
  },
  {
    id: 12,
    number: 1,
    text: "Какой-либо текст",
  },
  {
    id: 13,
    number: 4,
    text: "Какой-либо текст",
  },
  {
    id: 14,
    number: 1,
    text: "Какой-либо текст",
  },
  {
    id: 15,
    number: 4,
    text: "Какой-либо текст",
  },
  {
    id: 16,
    number: 3,
    text: "Какой-либо текст",
  },
];
const Page: NextPage<Props> = ({}) => {
  return (
    <div className={s.Page}>
      <h1 className={s.Page__title}>Все новости</h1>
      <div className={s.Page__news}>
        {data.map((elem) => (
          <Link key={elem.id} href={`/all-news/${elem.id}`}>
            <MainContentCard text={elem.text} number={elem.number} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
