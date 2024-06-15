import { FunctionComponent, useMemo, type CSSProperties } from "react";
import ButtonIconSmall from "./ButtonIconSmall";
import TypeWhiteColorWhiteSize from "./TypeWhiteColorWhiteSize";
import styles from "./TypeGhostColorGrayState.module.css";

export type TypeGhostColorGrayStateType = {
  className?: string;
  avatar?: string;
  home?: string;
  avatar1?: string;
  home1?: string;
  chevronRight?: string;
  badge?: boolean;

  /** Style props */
  buttonIconSmallBoxShadow?: CSSProperties["boxShadow"];
  buttonIconSmallBackgroundColor?: CSSProperties["backgroundColor"];
  buttonIconSmallBorder?: CSSProperties["border"];
  placeholderColor?: CSSProperties["color"];
};

const TypeGhostColorGrayState: FunctionComponent<
  TypeGhostColorGrayStateType
> = ({
  className = "",
  avatar,
  home,
  avatar1,
  home1,
  chevronRight,
  badge = false,
  buttonIconSmallBoxShadow,
  buttonIconSmallBackgroundColor,
  buttonIconSmallBorder,
  placeholderColor,
}) => {
  const buttonIconSmallStyle: CSSProperties = useMemo(() => {
    return {
      boxShadow: buttonIconSmallBoxShadow,
      backgroundColor: buttonIconSmallBackgroundColor,
      border: buttonIconSmallBorder,
    };
  }, [
    buttonIconSmallBoxShadow,
    buttonIconSmallBackgroundColor,
    buttonIconSmallBorder,
  ]);

  const placeholder3Style: CSSProperties = useMemo(() => {
    return {
      color: placeholderColor,
    };
  }, [placeholderColor]);

  return (
    <div className={[styles.typeghostColorgrayState, className].join(" ")}>
      <ButtonIconSmall
        avatar1="/avatar14.svg"
        home="/home17.svg"
        avatar={false}
        placeholder={false}
        icon
        buttonIconSmallBoxShadow="unset"
        buttonIconSmallBackgroundColor="unset"
        buttonIconSmallBorder="unset"
        placeholderColor="#6b7280"
        placeholderWidth="19px"
      />
      {badge && (
        <div className={styles.badgeWrapper}>
          <TypeWhiteColorWhiteSize
            avatar="/avatar8@2x.png"
            home="/home12.svg"
            placeholder="2"
            chevronRight="/home12.svg"
            x="/x1.svg"
            chevronRightIcon={false}
            typeWhiteColorWhiteSizeBoxShadow="unset"
            badgeAndTagBackgroundColor="#fff"
            badgeAndTagBorder="1px solid #e5e7eb"
            badgeAndTagPadding="1px 3px"
            badgeAndTagBoxShadow="0px 1px 2px rgba(0, 0, 0, 0.05)"
            statusBackgroundColor="#1f2937"
            placeholderColor="#1f2937"
            closeIconBackgroundColor="#e5e7eb"
          />
        </div>
      )}
    </div>
  );
};

export default TypeGhostColorGrayState;
