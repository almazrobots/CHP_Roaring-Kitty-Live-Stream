import { FunctionComponent, useMemo, type CSSProperties } from "react";
import TypeWhiteColorWhiteSize from "./TypeWhiteColorWhiteSize";
import styles from "./Button.module.css";

export type ButtonType = {
  className?: string;
  avatar?: string;
  home?: string;
  placeholder1?: string;
  avatar1?: string;
  home1?: string;
  chevronRight?: string;
  chevronRight1?: string;
  avatar2?: string;
  placeholder?: boolean;
  trailingDivider?: boolean;
  leadingAvatar?: boolean;
  trailingIcon?: boolean;
  leadingDivider?: boolean;
  leadingIcon?: boolean;
  trailingAvatar?: boolean;
  badge?: boolean;

  /** Style props */
  buttonBackgroundColor?: CSSProperties["backgroundColor"];
  buttonFlex?: CSSProperties["flex"];
  dividerBackgroundColor?: CSSProperties["backgroundColor"];
  placeholderColor?: CSSProperties["color"];
  dividerBackgroundColor1?: CSSProperties["backgroundColor"];
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  avatar,
  home,
  placeholder1,
  avatar1,
  home1,
  chevronRight,
  chevronRight1,
  avatar2,
  placeholder = true,
  trailingDivider = true,
  leadingAvatar = true,
  trailingIcon = true,
  leadingDivider = true,
  leadingIcon = true,
  trailingAvatar = true,
  badge = true,
  buttonBackgroundColor,
  buttonFlex,
  dividerBackgroundColor,
  placeholderColor,
  dividerBackgroundColor1,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: buttonBackgroundColor,
      flex: buttonFlex,
    };
  }, [buttonBackgroundColor, buttonFlex]);

  const divider2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: dividerBackgroundColor,
    };
  }, [dividerBackgroundColor]);

  const placeholder6Style: CSSProperties = useMemo(() => {
    return {
      color: placeholderColor,
    };
  }, [placeholderColor]);

  const divider3Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: dividerBackgroundColor1,
    };
  }, [dividerBackgroundColor1]);

  return (
    <div className={[styles.button, className].join(" ")} style={buttonStyle}>
      {leadingAvatar && (
        <img className={styles.avatarIcon} alt="" src={avatar} />
      )}
      {leadingDivider && (
        <div className={styles.divider} style={divider2Style} />
      )}
      {leadingIcon && <img className={styles.homeIcon} alt="" src={home} />}
      {placeholder && (
        <div className={styles.placeholder} style={placeholder6Style}>
          {placeholder1}
        </div>
      )}
      <TypeWhiteColorWhiteSize
        avatar="/avatar8@2x.png"
        home="/home12.svg"
        placeholder="5"
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
      {trailingDivider && (
        <div className={styles.divider} style={divider3Style} />
      )}
      {trailingIcon && (
        <img className={styles.homeIcon} alt="" src={chevronRight1} />
      )}
      {trailingAvatar && (
        <img className={styles.avatarIcon} alt="" src={avatar2} />
      )}
    </div>
  );
};

export default Button;
