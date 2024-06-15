import { FunctionComponent } from "react";
import StyleWhiteColorDarkState from "./StyleWhiteColorDarkState";
import BadgeAndTag from "./BadgeAndTag";
import StyleSolidColorBlueState1 from "./StyleSolidColorBlueState1";
import styles from "./Placearticle.module.css";

export type PlacearticleType = {
  className?: string;
};

const Placearticle: FunctionComponent<PlacearticleType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.placearticle, className].join(" ")}>
      <div className={styles.body}>
        <div className={styles.head}>
          <div className={styles.title}>
            <b className={styles.b}>Ведение дизайн систем</b>
            <div className={styles.div}>Статья</div>
          </div>
          <StyleWhiteColorDarkState
            avatar="/avatar1.svg"
            home="/bookmarkplus.svg"
            placeholder="🔥"
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
        <div className={styles.infAutor}>
          <img className={styles.avatar13Icon} alt="" src="/avatar13@2x.png" />
          <b className={styles.b1}>Ольга Жолудова </b>
        </div>
        <div className={styles.listTags}>
          <BadgeAndTag
            avatar1="/avatar@2x.png"
            home="/home9.svg"
            placeholder1="Reksoft"
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
            placeholder1="UI"
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
          placeholder="Читать"
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

export default Placearticle;
