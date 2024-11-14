import { NextPage } from "next";
import s from "./page.module.scss";

interface Props {
  params: {
    id: string;
  };
}

const Page: NextPage<Props> = ({ params: { id } }) => {
  return (
    <div className={s.Page}>
      <h1 className={s.Page__title}>Title {id}</h1>
      <div className={s.Page__content}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque quibusdam alias eligendi, autem vitae totam corrupti magnam eius
          repellendus, velit magni voluptatibus id odit ab, minima omnis nam excepturi beatae!
        </p>
      </div>
    </div>
  );
};

export default Page;
