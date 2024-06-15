import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BadgeAndTag.module.css";

export type BadgeAndTagType = {
  className?: string;
  avatar1?: string;
  home?: string;
  placeholder1?: string;
  chevronRight?: string;
  x?: string;
  leadingIcon?: boolean;
  closeIcon?: boolean;
  placeholder?: boolean;
  status1?: boolean;
  trailingIcon?: boolean;
  avatar?: boolean;

  /** Style props */
  badgeAndTagBorderRadius?: CSSProperties["borderRadius"];
  badgeAndTagBorder?: CSSProperties["border"];
  badgeAndTagBackgroundColor?: CSSProperties["backgroundColor"];
  statusBackgroundColor?: CSSProperties["backgroundColor"];
  placeholderColor?: CSSProperties["color"];
  closeIconBackgroundColor?: CSSProperties["backgroundColor"];
};

const BadgeAndTag: FunctionComponent<BadgeAndTagType> = ({
  className = "",
  avatar1,
  home,
  placeholder1,
  chevronRight,
  x,
  leadingIcon = true,
  closeIcon = true,
  placeholder = true,
  status1 = true,
  trailingIcon = true,
  avatar = true,
  badgeAndTagBorderRadius,
  badgeAndTagBorder,
  badgeAndTagBackgroundColor,
  statusBackgroundColor,
  placeholderColor,
  closeIconBackgroundColor,
}) => {
  const badgeAndTagStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: badgeAndTagBorderRadius,
      border: badgeAndTagBorder,
      backgroundColor: badgeAndTagBackgroundColor,
    };
  }, [badgeAndTagBorderRadius, badgeAndTagBorder, badgeAndTagBackgroundColor]);

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
    <></>
    // <div
    //   className={[styles.badgeAndTag, className].join(" ")}
    //   style={badgeAndTagStyle}
    // >
    //   {avatar && <img className={styles.avatarIcon} alt="" src={avatar1} />}
    //   {leadingIcon && <img className={styles.homeIcon} alt="" src={home} />}
    //   <div className={styles.placeholder}>
    //     {status1 && <div className={styles.status} style={status1Style} />}
    //     {placeholder && (
    //       <div className={styles.placeholder1} style={placeholder4Style}>
    //         {placeholder1}
    //       </div>
    //     )}
    //   </div>
    //   {trailingIcon && (
    //     <img className={styles.homeIcon} alt="" src={chevronRight} />
    //   )}
    //   {closeIcon && (
    //     <div className={styles.closeIcon} style={closeIcon1Style}>
    //       <img className={styles.xIcon} alt="" src={x} />
    //     </div>
    //   )}
    // </div>
  );
};

export default BadgeAndTag;
