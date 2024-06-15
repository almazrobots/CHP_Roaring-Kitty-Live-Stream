import { FunctionComponent } from "react";
import Cardsinf from "./Cardsinf";
import StyleSolidColorBlueState1 from "./StyleSolidColorBlueState1";
import styles from "./Body1.module.css";

export type Body1Type = {
  className?: string;
};

const Body1: FunctionComponent<Body1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.body, className].join(" ")}>
      <Cardsinf
        middleUXUI="Middle UX/UI дизайер"
        projectSerafim="Project Serafim"
        prop="60 000 -  80 000 ₽"
        placeholder="Опыт 1-3  года"
        placeholder1="Можно удаленно"
        placeholder2="Откликнуться"
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
      <Cardsinf
        middleUXUI="Middle UX/UI дизайер"
        projectSerafim="Serum & Co."
        prop="100 000 -  200 000 ₽"
        placeholder="Опыт 1-3  года"
        placeholder1="Можно удаленно"
        placeholder2="Откликнуться"
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
      <Cardsinf
        middleUXUI="Middle UX/UI дизайер"
        projectSerafim="Project Neo"
        prop="160 000 -  300 000 ₽"
        placeholder="Опыт 3-6 лет"
        placeholder1="Можно удаленно"
        placeholder2="Откликнуться"
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

export default Body1;
