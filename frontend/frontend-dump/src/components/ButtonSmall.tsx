import { FunctionComponent, CSSProperties } from "react";
import styles from "./ButtonSmall.module.css"; // Assuming you have CSS module for ButtonSmall

type ButtonSmallProps = {
  avatar: string;
  home: string;
  placeholder1: string;
  avatar1: string;
  home1: string;
  chevronRight: string;
  chevronRight1: string;
  avatar2: string;
  badge: boolean;
  trailingDivider: boolean;
  leadingAvatar: boolean;
  leadingDivider: boolean;
  leadingIcon: boolean;
  trailingAvatar: boolean;
  trailingIcon: boolean;
  buttonSmallBackgroundColor: CSSProperties["backgroundColor"];
  buttonSmallBoxShadow: CSSProperties["boxShadow"];
  buttonSmallBorder: CSSProperties["border"];
  dividerBackgroundColor: CSSProperties["backgroundColor"];
  placeholderColor: CSSProperties["color"];
  placeholderWidth: CSSProperties["width"];
  dividerBackgroundColor1: CSSProperties["backgroundColor"];
  placeholder?: string; // Добавляем эту строку
};

const ButtonSmall: FunctionComponent<ButtonSmallProps> = ({
                                                            avatar,
                                                            home,
                                                            placeholder1,
                                                            avatar1,
                                                            home1,
                                                            chevronRight,
                                                            chevronRight1,
                                                            avatar2,
                                                            badge,
                                                            trailingDivider,
                                                            leadingAvatar,
                                                            leadingDivider,
                                                            leadingIcon,
                                                            trailingAvatar,
                                                            trailingIcon,
                                                            buttonSmallBackgroundColor,
                                                            buttonSmallBoxShadow,
                                                            buttonSmallBorder,
                                                            dividerBackgroundColor,
                                                            placeholderColor,
                                                            placeholderWidth,
                                                            dividerBackgroundColor1,
                                                            placeholder, // Добавляем эту строку
                                                          }) => {
  return (
    <button
      className={styles.buttonSmall}
      style={{
        backgroundColor: buttonSmallBackgroundColor,
        boxShadow: buttonSmallBoxShadow,
        border: buttonSmallBorder,
      }}
    >
      {leadingAvatar && <img src={avatar} alt="avatar" />}
      {leadingDivider && <div className={styles.divider} style={{ backgroundColor: dividerBackgroundColor }} />}
      {leadingIcon && <img src={home} alt="home" />}
      <span style={{ color: placeholderColor, width: placeholderWidth }}>
        {placeholder || placeholder1}
      </span>
      {trailingIcon && <img src={chevronRight} alt="chevronRight" />}
      {trailingDivider && <div className={styles.divider} style={{ backgroundColor: dividerBackgroundColor1 }} />}
      {trailingAvatar && <img src={avatar1} alt="avatar1" />}
    </button>
  );
};

export default ButtonSmall;
