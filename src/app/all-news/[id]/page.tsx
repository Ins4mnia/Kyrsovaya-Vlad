import { NextPage } from "next";
import s from "./page.module.scss";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

const Page: NextPage<Props> = async ({ params }) => {
  const { id } = await params;
  const response = await fetch(`http://localhost:8081/api/news/${id}`);
  const data = await response.json();
  return (
    <div className={s.Page}>
      <h1 className={s.Page__title}>{data.data.title}</h1>
      <div className={s.Page__content}>
        <div className={s.Page__content__text}>
          {data.data.body.split("\r\n").map((elem, index) =>
            elem ? (
              <p className={s.Page__content__text__block} key={index}>
                <span style={{ marginLeft: "20px" }}></span>
                {elem}
              </p>
            ) : null
          )}
        </div>
        <Image
          className={s.Page__content__image}
          src={`/MainContentCardImage${data.data.id}.jpg`}
          alt="Фотография новости"
          width={1000}
          height={1000}
        />
      </div>
      <Image src={"/newsPhoto.jpg"} alt="Фотография общая новости" width={1000} height={1000} className={s.Page__image} />
    </div>
  );
};

export default Page;
