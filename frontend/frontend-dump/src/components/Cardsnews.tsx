import { FunctionComponent } from "react";
import StyleWhiteColorDarkState from "./StyleWhiteColorDarkState";
import StyleSolidColorBlueState1 from "./StyleSolidColorBlueState1";
import styles from "./Cardsnews.module.css";

export type CardsnewsType = {
  className?: string;
  leadingAvatar?: boolean;
  leadingDivider?: boolean;
  leadingIcon?: boolean;
  placeholder?: boolean;
  badge?: boolean;
  trailingDivider?: boolean;
  trailingIcon?: boolean;
  trailingAvatar?: boolean;
  avatar?: boolean;
  status1?: boolean;
  closeIcon?: boolean;
  avatarIcon?: boolean;
  homeIcon?: boolean;
  showPlaceholder?: boolean;
};

const Cardsnews: FunctionComponent<CardsnewsType> = ({
  className = "",
  leadingAvatar,
  leadingDivider,
  leadingIcon,
  placeholder,
  badge,
  trailingDivider,
  trailingIcon,
  trailingAvatar,
  avatar,
  status1,
  closeIcon,
  avatarIcon,
  homeIcon,
  showPlaceholder,
}) => {
  return (
    <div className={[styles.cardsnews, className].join(" ")}>
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      <div className={styles.body}>
        <div className={styles.title}>
          <b className={styles.cpru}>
            CPRU — новая методика performance-маркетинга
          </b>
          <div className={styles.uxGrowth}>
            UX-исследования, Growth-эксперименты, Data Science
          </div>
        </div>
        <div className={styles.saas}>
          Обычно SaaS маркетеры используют показатель retention, чтобы
          отслеживать эффективность онбординга, активаций и капельных
          email-кампаний, а также популярность отдельных функций. Кроме того,
          начальный показатель retention позволяет прикинуть, сколько
          пользователей вы на самом деле привлекаете и какова их реальная
          стоимость.
        </div>
        <div className={styles.inf}>
          <div className={styles.top}>
            <div className={styles.infAutor}>
              <img
                className={styles.avatar13Icon}
                alt=""
                src="/avatar13@2x.png"
              />
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
                <img
                  className={styles.eyeIcon}
                  alt=""
                  src="/messagecircle.svg"
                />
                <div className={styles.div1}>234</div>
              </div>
            </div>
          </div>
          <div className={styles.infActions1}>
            <StyleWhiteColorDarkState
              avatar="/avatar1.svg"
              home="/bookmarkplus.svg"
              placeholder="Интересно"
              avatar1="/avatar@2x.png"
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
              placeholder="Поделиться"
              avatar1="/avatar@2x.png"
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
              avatar="/avatar6.svg"
              home="/home8.svg"
              placeholder="Читать далее"
              avatar1="/avatar@2x.png"
              home1="/home2.svg"
              chevronRight="/chevronright.svg"
              chevronRight1="/chevronright7.svg"
              avatar2="/avatar6.svg"
              styleSolidColorBlueStateAlignSelf="unset"
              styleSolidColorBlueStateFlex="1"
              buttonBackgroundColor="#2563eb"
              buttonFlex="1"
              dividerBackgroundColor="#fff"
              placeholderColor="#fff"
              dividerBackgroundColor1="#fff"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardsnews;
