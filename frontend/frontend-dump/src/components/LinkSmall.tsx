import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./LinkSmall.module.css";

export type LinkSmallType = {
  className?: string;
  chevronLeft?: string;
  linkSm?: string;
  chevronRight?: string;
  borderBottom?: boolean;
  trailingIcon?: boolean;
  linkPlaceholder?: boolean;
  leadingIcon?: boolean;

  /** Style props */
  linkSmColor?: CSSProperties["color"];
  borderBottomAlignSelf?: CSSProperties["alignSelf"];
  borderBottomBackgroundColor?: CSSProperties["backgroundColor"];
  borderBottomWidth?: CSSProperties["width"];
};

const LinkSmall: FunctionComponent<LinkSmallType> = ({
  className = "",
  chevronLeft,
  linkSm,
  chevronRight,
  borderBottom = true,
  trailingIcon = true,
  linkPlaceholder = true,
  leadingIcon = true,
  linkSmColor,
  borderBottomAlignSelf,
  borderBottomBackgroundColor,
  borderBottomWidth,
}) => {
  const linkSmStyle: CSSProperties = useMemo(() => {
    return {
      color: linkSmColor,
    };
  }, [linkSmColor]);

  const borderBottom3Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: borderBottomAlignSelf,
      backgroundColor: borderBottomBackgroundColor,
      width: borderBottomWidth,
    };
  }, [borderBottomAlignSelf, borderBottomBackgroundColor, borderBottomWidth]);

  return (
    <div className={[styles.linkSmall, className].join(" ")}>
      {leadingIcon && (
        <img className={styles.chevronLeftIcon} alt="" src={chevronLeft} />
      )}
      <div className={styles.placeholder}>
        {linkPlaceholder && (
          <div className={styles.linkSm} style={linkSmStyle}>
            {linkSm}
          </div>
        )}
        {borderBottom && (
          <div className={styles.borderBottom} style={borderBottom3Style} />
        )}
      </div>
      {trailingIcon && (
        <img className={styles.chevronLeftIcon} alt="" src={chevronRight} />
      )}
    </div>
  );
};

export default LinkSmall;
