import { FunctionComponent } from "react";
import StyleWhiteColorDarkState from "./StyleWhiteColorDarkState";
import BadgeAndTag from "./BadgeAndTag";
import StyleSolidColorBlueState1 from "./StyleSolidColorBlueState1";
import styles from "./Placevacancy.module.css";

export type PlacevacancyType = {
  className?: string;
  middleUXUI?: string;
  projectSerafim?: string;
  prop?: string;
  placeholder1?: string;
  placeholder?: string;
};

const Placevacancy: FunctionComponent<PlacevacancyType> = ({
  className = "",
  middleUXUI,
  projectSerafim,
  prop,
  placeholder1,
  placeholder,
}) => {
  return (
    <div className={[styles.placevacancy, className].join(" ")}>
      <div className={styles.body}>
        <div className={styles.head}>
          <div className={styles.title}>
            <b className={styles.middleUxui}>{middleUXUI}</b>
            <div className={styles.projectSerafim}>{projectSerafim}</div>
          </div>
          <StyleWhiteColorDarkState
            avatar="/avatar11.svg"
            home="/bookmarkplus.svg"
            placeholder="Button-sm"
            avatar1="/avatar1@2x.png"
            home1="/home2.svg"
            chevronRight="/chevronright.svg"
            chevronRight1="/chevronright5.svg"
            avatar2="/avatar11.svg"
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
            leadingAvatar={false}
            leadingIcon
            leadingDivider={false}
            placeholder1={false}
            badge={false}
            trailingDivider={false}
            trailingIcon={false}
            trailingAvatar={false}
            avatar3={false}
            leadingIcon1={false}
            status1={false}
            placeholder2
            trailingIcon1={false}
            closeIcon={false}
          />
        </div>
        <b className={styles.b}>{prop}</b>
        <div className={styles.listTags}>
          <BadgeAndTag
            avatar1="/avatar@2x.png"
            home="/home9.svg"
            placeholder1="Опыт 1-3  года"
            chevronRight="/chevronright9.svg"
            x="/x4.svg"
            leadingIcon={false}
            closeIcon={false}
            placeholder
            status1={false}
            trailingIcon={false}
            avatar={false}
            badgeAndTagBorderRadius="999px"
            badgeAndTagBorder="1px solid #60a5fa"
            badgeAndTagBackgroundColor="unset"
            statusBackgroundColor="#2563eb"
            placeholderColor="#2563eb"
            closeIconBackgroundColor="#dbeafe"
          />
          <BadgeAndTag
            avatar1="/avatar@2x.png"
            home="/home9.svg"
            placeholder1="Можно удаленно"
            chevronRight="/chevronright9.svg"
            x="/x4.svg"
            leadingIcon={false}
            closeIcon={false}
            placeholder
            status1={false}
            trailingIcon={false}
            avatar={false}
            badgeAndTagBorderRadius="999px"
            badgeAndTagBorder="1px solid #60a5fa"
            badgeAndTagBackgroundColor="unset"
            statusBackgroundColor="#2563eb"
            placeholderColor="#2563eb"
            closeIconBackgroundColor="#dbeafe"
          />
        </div>
        <StyleSolidColorBlueState1
          avatar="/avatar11.svg"
          home="/home1.svg"
          placeholder="Откликнуться"
          avatar1="/avatar5@2x.png"
          home1="/home2.svg"
          chevronRight="/chevronright.svg"
          chevronRight1="/chevronright3.svg"
          avatar2="/avatar11.svg"
          styleSolidColorBlueStateAlignSelf="stretch"
          styleSolidColorBlueStateFlex="unset"
          buttonBackgroundColor="#2563eb"
          buttonFlex="1"
          dividerBackgroundColor="#fff"
          placeholderColor="#fff"
          dividerBackgroundColor1="#fff"
          leadingAvatar={false}
          leadingDivider={false}
          leadingIcon={false}
          placeholder
          badge={false}
          trailingDivider={false}
          trailingIcon={false}
          trailingAvatar={false}
        />
      </div>
    </div>
  );
};

export default Placevacancy;
