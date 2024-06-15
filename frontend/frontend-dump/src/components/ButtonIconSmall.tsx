import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ButtonIconSmall.module.css";

export type ButtonIconSmallType = {
  className?: string;
  avatar1?: string;
  home?: string;
  avatar?: boolean;
  placeholder?: boolean;
  icon?: boolean;

  /** Style props */
  buttonIconSmallBoxShadow?: CSSProperties["boxShadow"];
  buttonIconSmallBackgroundColor?: CSSProperties["backgroundColor"];
  buttonIconSmallBorder?: CSSProperties["border"];
  placeholderColor?: CSSProperties["color"];
  placeholderWidth?: CSSProperties["width"];
};

const ButtonIconSmall: FunctionComponent<ButtonIconSmallType> = ({
  className = "",
  avatar1,
  home,
  avatar = true,
  placeholder = true,
  icon = true,
  buttonIconSmallBoxShadow,
  buttonIconSmallBackgroundColor,
  buttonIconSmallBorder,
  placeholderColor,
  placeholderWidth,
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
      width: placeholderWidth,
    };
  }, [placeholderColor, placeholderWidth]);

  return (
    <div
      className={[styles.buttonIconSmall, className].join(" ")}
      style={buttonIconSmallStyle}
    >
      {placeholder && (
        <div className={styles.placeholder} style={placeholder3Style}>
          9+
        </div>
      )}
      {avatar && <img className={styles.avatarIcon} alt="" src={avatar1} />}
      {icon && <img className={styles.homeIcon} alt="" src={home} />}
    </div>
  );
};

export default ButtonIconSmall;
