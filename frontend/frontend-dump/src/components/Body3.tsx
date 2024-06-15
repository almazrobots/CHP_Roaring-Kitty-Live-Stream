import { FunctionComponent } from "react";
import StyleWhiteColorDarkState from "./StyleWhiteColorDarkState";
import StyleSolidColorBlueState1 from "./StyleSolidColorBlueState1";
import styles from "./Body3.module.css";

export type Body3Type = {
  className?: string;
};

const Body3: FunctionComponent<Body3Type> = ({ className = "" }) => {
  return (
    <div className={[styles.body, className].join(" ")}>
      <div className={styles.title}>
        <b className={styles.cpru}>
          CPRU — новая методика performance-маркетинга
        </b>
        <div className={styles.uxGrowth}>
          UX-исследования, Growth-эксперименты, Data Science
        </div>
      </div>
      <div className={styles.saas}>
        Обычно SaaS маркетеры используют показатель retention, чтобы отслеживать
        эффективность онбординга, активаций и капельных email-кампаний, а также
        популярность отдельных функций. Кроме того, начальный показатель
        retention позволяет прикинуть, сколько пользователей вы на самом деле
        привлекаете и какова их реальная стоимость.
      </div>
      <div className={styles.inf}>
        <div className={styles.infAutor}>
          <img className={styles.avatar13Icon} alt="" src="/avatar13@2x.png" />
          <div className={styles.div}>
            <p className={styles.p}>Ольга Жолудова </p>
            <p className={styles.p1}>Апр 6· 7 мин читать</p>
          </div>
        </div>
        <div className={styles.infActions}>
          <div className={styles.views}>
            <img className={styles.eyeIcon} alt="" src="/eye.svg" />
            <div className={styles.div1}>1027</div>
          </div>
          <div className={styles.views}>
            <img className={styles.eyeIcon} alt="" src="/messagecircle.svg" />
            <div className={styles.div1}>234</div>
          </div>
        </div>
        <div className={styles.infActions1}>
          <StyleWhiteColorDarkState
            avatar="/avatar1.svg"
            home="/bookmarkplus.svg"
            placeholder="Button-sm222"
            avatar1="/avatar5@2x.png"
            home1="/home2.svg"
            chevronRight="/chevronright.svg"
            chevronRight1="/chevronright5.svg"
            avatar2="/avatar1.svg"
            avatarIcon={false}
            homeIcon
            showPlaceholder={false}
            buttonSmallBoxShadow="unset"
            buttonSmallBackgroundColor="#dbeafe"
            buttonSmallBorder="unset"
            dividerBackgroundColor="#93c5fd"
            placeholderColor="#1e40af"
            placeholderWidth="78px"
            dividerBackgroundColor1="#93c5fd"
          />
          <StyleWhiteColorDarkState
            avatar="/avatar1.svg"
            home="/share2.svg"
            placeholder="Button-sm"
            avatar1="/avatar5@2x.png"
            home1="/home2.svg"
            chevronRight="/chevronright.svg"
            chevronRight1="/chevronright5.svg"
            avatar2="/avatar1.svg"
            avatarIcon={false}
            homeIcon
            showPlaceholder={false}
            buttonSmallBoxShadow="unset"
            buttonSmallBackgroundColor="#dbeafe"
            buttonSmallBorder="unset"
            dividerBackgroundColor="#93c5fd"
            placeholderColor="#1e40af"
            placeholderWidth="78px"
            dividerBackgroundColor1="#93c5fd"
          />
          <StyleSolidColorBlueState1
            avatar="/avatar1.svg"
            home="/home1.svg"
            placeholder="Читать далее"
            avatar1="/avatar5@2x.png"
            home1="/home2.svg"
            chevronRight="/chevronright.svg"
            chevronRight1="/chevronright3.svg"
            avatar2="/avatar1.svg"
            styleSolidColorBlueStateAlignSelf="unset"
            styleSolidColorBlueStateFlex="unset"
            buttonBackgroundColor="#2563eb"
            buttonFlex="unset"
            dividerBackgroundColor="#fff"
            placeholderColor="#fff"
            dividerBackgroundColor1="#fff"
          />
        </div>
      </div>
    </div>
  );
};

export default Body3;
