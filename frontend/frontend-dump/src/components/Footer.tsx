import { FunctionComponent } from "react";
import TypeBaseColorBlueStateD from "./TypeBaseColorBlueStateD";
import StyleWhiteColorDarkState from "./StyleWhiteColorDarkState";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <div className={[styles.footer, className].join(" ")}>
      <div className={styles.listLinks}>
        <TypeBaseColorBlueStateD
          chevronLeft="/chevronleft.svg"
          linkSm="Этика и комплаенс"
          chevronRight="/chevronright4.svg"
          linkSmColor="#6b7280"
        />
        <TypeBaseColorBlueStateD
          chevronLeft="/chevronleft.svg"
          linkSm="Оказание услуг"
          chevronRight="/chevronright4.svg"
          linkSmColor="#6b7280"
        />
        <TypeBaseColorBlueStateD
          chevronLeft="/chevronleft.svg"
          linkSm="Использование сайтов"
          chevronRight="/chevronright4.svg"
          linkSmColor="#6b7280"
        />
        <TypeBaseColorBlueStateD
          chevronLeft="/chevronleft.svg"
          linkSm="Защита персональных данных"
          chevronRight="/chevronright4.svg"
          linkSmColor="#6b7280"
        />
        <TypeBaseColorBlueStateD
          chevronLeft="/chevronleft.svg"
          linkSm="Пользовательское  соглашение"
          chevronRight="/chevronright4.svg"
          linkSmColor="#6b7280"
        />
      </div>
      <div className={styles.hhru}>
        На информационном ресурсе «Robotix» применяются рекомендательные
        технологии (информационные технологии предоставления информации
        на основе сбора, систематизации и анализа сведений, относящихся
        к предпочтениям пользователей сети «Интернет», находящихся на территории
        Российской Федерации)
      </div>
      <div className={styles.social}>
        <div className={styles.robotix}>© 2024 Robotix</div>
        {/*<StyleWhiteColorDarkState*/}
        {/*  avatar="/avatar2@2x.png"*/}
        {/*  home="/bookmarkplus.svg"*/}
        {/*  placeholder="Button-sm"*/}
        {/*  avatar1="/avatar@2x.png"*/}
        {/*  home1="/home2.svg"*/}
        {/*  chevronRight="/chevronright.svg"*/}
        {/*  chevronRight1="/chevronright5.svg"*/}
        {/*  avatar2="/avatar1.svg"*/}
        {/*  avatarIcon*/}
        {/*  homeIcon={false}*/}
        {/*  showPlaceholder={false}*/}
        {/*  buttonSmallBoxShadow="unset"*/}
        {/*  buttonSmallBackgroundColor="#dbeafe"*/}
        {/*  buttonSmallBorder="unset"*/}
        {/*  dividerBackgroundColor="#93c5fd"*/}
        {/*  placeholderColor="#1e40af"*/}
        {/*  placeholderWidth="78px"*/}
        {/*  dividerBackgroundColor1="#93c5fd"*/}
        {/*/>*/}
        {/*<StyleWhiteColorDarkState*/}
        {/*  avatar="/avatar3@2x.png"*/}
        {/*  home="/bookmarkplus.svg"*/}
        {/*  placeholder="Button-sm"*/}
        {/*  avatar1="/avatar@2x.png"*/}
        {/*  home1="/home2.svg"*/}
        {/*  chevronRight="/chevronright.svg"*/}
        {/*  chevronRight1="/chevronright5.svg"*/}
        {/*  avatar2="/avatar1.svg"*/}
        {/*  avatarIcon*/}
        {/*  homeIcon={false}*/}
        {/*  showPlaceholder={false}*/}
        {/*  buttonSmallBoxShadow="unset"*/}
        {/*  buttonSmallBackgroundColor="#dbeafe"*/}
        {/*  buttonSmallBorder="unset"*/}
        {/*  dividerBackgroundColor="#93c5fd"*/}
        {/*  placeholderColor="#1e40af"*/}
        {/*  placeholderWidth="78px"*/}
        {/*  dividerBackgroundColor1="#93c5fd"*/}
        {/*/>*/}
      </div>
    </div>
  );
};

export default Footer;
