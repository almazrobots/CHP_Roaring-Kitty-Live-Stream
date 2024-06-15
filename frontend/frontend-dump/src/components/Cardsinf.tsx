import { FunctionComponent } from "react";
import StyleWhiteColorDarkState from "./StyleWhiteColorDarkState";
import BadgeAndTag from "./BadgeAndTag";
import StyleSolidColorBlueState1 from "./StyleSolidColorBlueState1";
import styles from "./Cardsinf.module.css";

export type CardsinfType = {
  className?: string;
  middleUXUI?: string;
  projectSerafim?: string;
  prop?: string;
  placeholder1?: string;
  placeholder2?: string;
  leadingAvatar?: boolean;
  leadingDivider?: boolean;
  leadingIcon?: boolean;
  placeholder?: string;
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

const Cardsinf: FunctionComponent<CardsinfType> = ({
  className = "",
  middleUXUI,
  projectSerafim,
  prop,
  placeholder1,
  placeholder2,
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
    <div className={[styles.cardsinf, className].join(" ")}>
      <div className={styles.body}>
        <div className={styles.head}>
          <div className={styles.title}>
            <b className={styles.middleUxui}>{middleUXUI}</b>
            <div className={styles.projectSerafim}>{projectSerafim}</div>
          </div>
          <StyleWhiteColorDarkState
            avatar="/avatar1.svg"
            home="/bookmarkplus.svg"
            placeholder="⭐️"
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
          avatar="/avatar1.svg"
          home="/home1.svg"
          placeholder="Откликнуться"
          avatar1="/avatar5@2x.png"
          home1="/home2.svg"
          chevronRight="/chevronright.svg"
          chevronRight1="/chevronright3.svg"
          avatar2="/avatar1.svg"
          styleSolidColorBlueStateAlignSelf="stretch"
          styleSolidColorBlueStateFlex="unset"
          buttonBackgroundColor="#2563eb"
          buttonFlex="1"
          dividerBackgroundColor="#fff"
          placeholderColor="#fff"
          dividerBackgroundColor1="#fff"
        />
      </div>
    </div>
  );
};

export default Cardsinf;
