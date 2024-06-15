import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BadgeAndTagSmall.module.css";

export type BadgeAndTagSmallType = {
  className?: string;
  avatar1?: string;
  home?: string;
  placeholder1?: string;
  chevronRight?: string;
  x?: string;
  closeIcon?: boolean;
  placeholder?: boolean;
  leadingIcon?: boolean;
  status1?: boolean;
  trailingIcon?: boolean;
  avatar?: boolean;

  /** Style props */
  badgeAndTagSmallBorderRadius?: CSSProperties["borderRadius"];
  badgeAndTagSmallBoxShadow?: CSSProperties["boxShadow"];
  badgeAndTagSmallBackgroundColor?: CSSProperties["backgroundColor"];
  badgeAndTagSmallBorder?: CSSProperties["border"];
  statusBackgroundColor?: CSSProperties["backgroundColor"];
  placeholderColor?: CSSProperties["color"];
  closeIconBackgroundColor?: CSSProperties["backgroundColor"];
};

const BadgeAndTagSmall: FunctionComponent<BadgeAndTagSmallType> = ({
  className = "",
  avatar1,
  home,
  placeholder1,
  chevronRight,
  x,
  closeIcon = true,
  placeholder = true,
  leadingIcon = true,
  status1 = true,
  trailingIcon = true,
  avatar = true,
  badgeAndTagSmallBorderRadius,
  badgeAndTagSmallBoxShadow,
  badgeAndTagSmallBackgroundColor,
  badgeAndTagSmallBorder,
  statusBackgroundColor,
  placeholderColor,
  closeIconBackgroundColor,
}) => {
  const badgeAndTagSmallStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: badgeAndTagSmallBorderRadius,
      boxShadow: badgeAndTagSmallBoxShadow,
      backgroundColor: badgeAndTagSmallBackgroundColor,
      border: badgeAndTagSmallBorder,
    };
  }, [
    badgeAndTagSmallBorderRadius,
    badgeAndTagSmallBoxShadow,
    badgeAndTagSmallBackgroundColor,
    badgeAndTagSmallBorder,
  ]);

  const statusStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: statusBackgroundColor,
    };
  }, [statusBackgroundColor]);

  const placeholder1Style: CSSProperties = useMemo(() => {
    return {
      color: placeholderColor,
    };
  }, [placeholderColor]);

  const closeIconStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: closeIconBackgroundColor,
    };
  }, [closeIconBackgroundColor]);

  return (
    <div
      className={[styles.badgeAndTagSmall, className].join(" ")}
      style={badgeAndTagSmallStyle}
    >
      {avatar && <img className={styles.avatarIcon} alt="" src={avatar1} />}
      {leadingIcon && <img className={styles.homeIcon} alt="" src={home} />}
      <div className={styles.placeholder}>
        {status1 && <div className={styles.status} style={statusStyle} />}
        {placeholder && (
          <div className={styles.placeholder1} style={placeholder1Style}>
            {placeholder1}
          </div>
        )}
      </div>
      {trailingIcon && (
        <img className={styles.homeIcon} alt="" src={chevronRight} />
      )}
      {closeIcon && (
        <div className={styles.closeIcon} style={closeIconStyle}>
          <img className={styles.xIcon} alt="" src={x} />
        </div>
      )}
    </div>
  );
};

export default BadgeAndTagSmall;
