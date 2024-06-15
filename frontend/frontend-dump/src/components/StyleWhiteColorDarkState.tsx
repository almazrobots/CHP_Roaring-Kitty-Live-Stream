import { FunctionComponent, useMemo, type CSSProperties } from "react";
import ButtonSmall from "./ButtonSmall";
import styles from "./StyleWhiteColorDarkState.module.css";

export type StyleWhiteColorDarkStateType = {
  className?: string;
  avatar?: string;
  home?: string;
  placeholder?: string;
  avatar1?: string;
  home1?: string;
  chevronRight?: string;
  chevronRight1?: string;
  avatar2?: string;
  avatarIcon?: boolean;
  homeIcon?: boolean;
  showPlaceholder?: boolean;

  /** Style props */
  buttonSmallBoxShadow?: CSSProperties["boxShadow"];
  buttonSmallBackgroundColor?: CSSProperties["backgroundColor"];
  buttonSmallBorder?: CSSProperties["border"];
  dividerBackgroundColor?: CSSProperties["backgroundColor"];
  placeholderColor?: CSSProperties["color"];
  placeholderWidth?: CSSProperties["width"];
  dividerBackgroundColor1?: CSSProperties["backgroundColor"];
};

const StyleWhiteColorDarkState: FunctionComponent<StyleWhiteColorDarkStateType> = ({
                                                                                     className = "",
                                                                                     avatar,
                                                                                     home,
                                                                                     placeholder,
                                                                                     avatar1,
                                                                                     home1,
                                                                                     chevronRight,
                                                                                     chevronRight1,
                                                                                     avatar2,
                                                                                     avatarIcon,
                                                                                     homeIcon,
                                                                                     showPlaceholder,
                                                                                     buttonSmallBoxShadow,
                                                                                     buttonSmallBackgroundColor,
                                                                                     buttonSmallBorder,
                                                                                     dividerBackgroundColor,
                                                                                     placeholderColor,
                                                                                     placeholderWidth,
                                                                                     dividerBackgroundColor1,
                                                                                   }) => {
  const buttonSmallStyle: CSSProperties = useMemo(() => {
    return {
      boxShadow: buttonSmallBoxShadow,
      backgroundColor: buttonSmallBackgroundColor,
      border: buttonSmallBorder,
    };
  }, [buttonSmallBoxShadow, buttonSmallBackgroundColor, buttonSmallBorder]);

  const dividerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: dividerBackgroundColor,
    };
  }, [dividerBackgroundColor]);

  const placeholder5Style: CSSProperties = useMemo(() => {
    return {
      color: placeholderColor,
      width: placeholderWidth,
    };
  }, [placeholderColor, placeholderWidth]);

  const divider1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: dividerBackgroundColor1,
    };
  }, [dividerBackgroundColor1]);

  return (
    <div className={[styles.stylewhiteColordarkState, className].join(" ")}>
      <ButtonSmall
        avatar="/avatar16.svg"
        home="/avatar12@2x.png"
        placeholder1="Button"
        avatar1="/avatar12@2x.png"
        home1="/home15.svg"
        chevronRight="/home15.svg"
        chevronRight1="/avatar8@2x.png"
        avatar2="/avatar10.svg"
        badge={false}
        trailingDivider={false}
        leadingAvatar={false}
        leadingDivider={false}
        leadingIcon={false}
        trailingAvatar={false}
        trailingIcon={false}
        buttonSmallBackgroundColor="#fff"
        buttonSmallBoxShadow="0px 1px 2px rgba(0, 0, 0, 0.05)"
        buttonSmallBorder="1px solid #e5e7eb"
        dividerBackgroundColor="#9ca3af"
        placeholderColor="#1f2937"
        placeholderWidth="unset"
        dividerBackgroundColor1="#9ca3af"
        placeholder={placeholder} // Pass the placeholder prop here
      />
    </div>
  );
};

export default StyleWhiteColorDarkState;
