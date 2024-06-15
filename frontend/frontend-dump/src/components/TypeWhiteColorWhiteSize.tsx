import { FunctionComponent, useMemo, type CSSProperties } from "react";
import BadgeAndTag from "./BadgeAndTag";
import styles from "./TypeWhiteColorWhiteSize.module.css";

export type TypeWhiteColorWhiteSizeType = {
  className?: string;
  avatar?: string;
  home?: string;
  placeholder?: string;
  chevronRight?: string;
  x?: string;
  chevronRightIcon?: boolean;

  /** Style props */
  typeWhiteColorWhiteSizeBoxShadow?: CSSProperties["boxShadow"];
  badgeAndTagBackgroundColor?: CSSProperties["backgroundColor"];
  badgeAndTagBorder?: CSSProperties["border"];
  badgeAndTagPadding?: CSSProperties["padding"];
  badgeAndTagBoxShadow?: CSSProperties["boxShadow"];
  statusBackgroundColor?: CSSProperties["backgroundColor"];
  placeholderColor?: CSSProperties["color"];
  closeIconBackgroundColor?: CSSProperties["backgroundColor"];
};

const TypeWhiteColorWhiteSize: FunctionComponent<
  TypeWhiteColorWhiteSizeType
> = ({
  className = "",
  avatar,
  home,
  placeholder,
  chevronRight,
  x,
  chevronRightIcon,
  typeWhiteColorWhiteSizeBoxShadow,
  badgeAndTagBackgroundColor,
  badgeAndTagBorder,
  badgeAndTagPadding,
  badgeAndTagBoxShadow,
  statusBackgroundColor,
  placeholderColor,
  closeIconBackgroundColor,
}) => {
  const typeWhiteColorWhiteSizeStyle: CSSProperties = useMemo(() => {
    return {
      boxShadow: typeWhiteColorWhiteSizeBoxShadow,
    };
  }, [typeWhiteColorWhiteSizeBoxShadow]);

  const badgeAndTagStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: badgeAndTagBackgroundColor,
      border: badgeAndTagBorder,
      padding: badgeAndTagPadding,
      boxShadow: badgeAndTagBoxShadow,
    };
  }, [
    badgeAndTagBackgroundColor,
    badgeAndTagBorder,
    badgeAndTagPadding,
    badgeAndTagBoxShadow,
  ]);

  const status1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: statusBackgroundColor,
    };
  }, [statusBackgroundColor]);

  const placeholder4Style: CSSProperties = useMemo(() => {
    return {
      color: placeholderColor,
    };
  }, [placeholderColor]);

  const closeIcon1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: closeIconBackgroundColor,
    };
  }, [closeIconBackgroundColor]);

  return (
    <div
      className={[styles.typewhiteColorwhiteSize, className].join(" ")}
      style={typeWhiteColorWhiteSizeStyle}
    >
      <BadgeAndTag
        avatar1="/avatar11@2x.png"
        home="/home13.svg"
        placeholder1="Badge"
        chevronRight="/home13.svg"
        x="/x.svg"
        leadingIcon={false}
        closeIcon={false}
        placeholder
        status1={false}
        trailingIcon={false}
        avatar={false}
        badgeAndTagBorderRadius="999px"
        badgeAndTagBorder="1px solid #e5e7eb"
        badgeAndTagBackgroundColor="#fff"
        statusBackgroundColor="#1f2937"
        placeholderColor="#1f2937"
        closeIconBackgroundColor="#e5e7eb"
      />
    </div>
  );
};

export default TypeWhiteColorWhiteSize;
