import { FunctionComponent } from "react";
import Placearticle from "./Placearticle";
import Cardsinf from "./Cardsinf";
import StyleSolidColorBlueState1 from "./StyleSolidColorBlueState1";
import styles from "./Body.module.css";

export type BodyType = {
  className?: string;
};

const Body: FunctionComponent<BodyType> = ({ className = "" }) => {
  return (
    <div className={[styles.body, className].join(" ")}>
      <Placearticle />
      <Cardsinf
        middleUXUI="Функциональное программирование на Python"
        projectSerafim="Срок обучения 9  месяцев"
        prop="Бесплатно"
        placeholder="Базовый курс"
        placeholder1="Skillbox"
        placeholder2="Подробнее"
        leadingAvatar={false}
        leadingDivider={false}
        leadingIcon={false}
        placeholder
        badge={false}
        trailingDivider={false}
        trailingIcon={false}
        trailingAvatar={false}
        avatar={false}
        status1={false}
        closeIcon={false}
        avatarIcon={false}
        homeIcon
        showPlaceholder={false}
      />
      <StyleSolidColorBlueState1
        avatar="/avatar6.svg"
        home="/home10.svg"
        placeholder="Показать все"
        avatar1="/avatar@2x.png"
        home1="/home2.svg"
        chevronRight="/chevronright.svg"
        chevronRight1="/chevronright10.svg"
        avatar2="/avatar6.svg"
        styleSolidColorBlueStateAlignSelf="stretch"
        styleSolidColorBlueStateFlex="unset"
        buttonBackgroundColor="unset"
        buttonFlex="1"
        dividerBackgroundColor="#93c5fd"
        placeholderColor="#2563eb"
        dividerBackgroundColor1="#93c5fd"
      />
    </div>
  );
};

export default Body;
