import { FunctionComponent } from "react";
import SizebigStateoff from "./SizebigStateoff";
import Cardsnews from "./Cardsnews";
import TypeBaseShapeNone from "./TypeBaseShapeNone";
import styles from "./Body2.module.css";

export type Body2Type = {
  className?: string;
};

const Body2: FunctionComponent<Body2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.body, className].join(" ")}>
      <SizebigStateoff
        image="/image@2x.png"
        avatar13="/avatar13@2x.png"
        avatar="/avatar5@2x.png"
        avatar1="/avatar5@2x.png"
        avatar2="/avatar5@2x.png"
      />
      <div className={styles.listNews}>
        <Cardsnews
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
        <Cardsnews
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
      </div>
      <div className={styles.listNews}>
        <Cardsnews
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
        <Cardsnews
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
      </div>
      <TypeBaseShapeNone
        chevronLeft="/chevronleft1.svg"
        chevronRight="/chevronright8.svg"
        chevronLeftIcon
        showDiv={false}
        showPrevious={false}
        showNext={false}
        divVisible={false}
        chevronRightIcon
        divWidth="10px"
        previousWidth="67px"
        nextWidth="37px"
        divWidth1="10px"
      />
    </div>
  );
};

export default Body2;
