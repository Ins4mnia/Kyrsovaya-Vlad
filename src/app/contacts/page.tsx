import { NextPage } from "next";
import s from "./page.module.scss";
import telegram from "./TelegramIcon.svg";
import vk from "./VkIcon.svg";
import Image from "next/image";

const Page: NextPage = ({}) => {
  return (
    <div className={s.Page}>
      <h1 className={s.Page__title}>Как нас найти?</h1>
      <div className={s.Page__content}>
        <div className={s.Page__content__line}>
          <p className={s.Page__content__line__title}>Адрес</p>
          <p className={s.Page__content__line__info}>123456, Город N, улица Медицинская, дом 1, офис 101 </p>
        </div>
        <div className={s.Page__content__line}>
          <p className={s.Page__content__line__title}>Телефон</p>
          <a className={s.Page__content__line__info} href="tel:+71234567890">
            +7 (123) 456-78-90
          </a>
        </div>
        <div className={s.Page__content__line}>
          <p className={s.Page__content__line__title}>Электронная почта</p>
          <a className={s.Page__content__line__info} href="mailto:info@medicalnews.com">
            info@medicalnews.com
          </a>
        </div>
        <div className={s.Page__content__line}>
          <p className={s.Page__content__line__title}>Социальные сети</p>
          <div className={s.Page__content__line__icons}>
            <a>
              <Image width={24} height={24} alt="Телеграм" src={telegram} />
            </a>
            <a>
              <Image width={24} height={24} alt="Вконтакте" src={vk} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
