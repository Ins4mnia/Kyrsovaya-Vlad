import { NextPage } from "next";
import s from "./MainContentCard.module.scss";

interface Props {
  src: number;
  text: string;
}

const MainContentCard: NextPage<Props> = ({ src, text }) => {
  return (
    <div style={{ backgroundImage: `url(/MainContentCardImage${src}.jpg)` }} className={s.MainContentCard}>
      <span className={s.MainContentCard__gradient}></span>
      <p className={s.MainContentCard__text}>{text}</p>
    </div>
  );
};

export default MainContentCard;
