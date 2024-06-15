import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Button from "./Button";
import styles from "./StyleSolidColorBlueState1.module.css";

export type StyleSolidColorBlueState1Type = {
  className?: string;
  avatar?: string;
  home?: string;
  placeholder?: string;
  avatar1?: string;
  home1?: string;
  chevronRight?: string;
  chevronRight1?: string;
  avatar2?: string;

  /** Style props */
  styleSolidColorBlueStateAlignSelf?: CSSProperties["alignSelf"];
  styleSolidColorBlueStateFlex?: CSSProperties["flex"];
  buttonBackgroundColor?: CSSProperties["backgroundColor"];
  buttonFlex?: CSSProperties["flex"];
  dividerBackgroundColor?: CSSProperties["backgroundColor"];
  placeholderColor?: CSSProperties["color"];
  dividerBackgroundColor1?: CSSProperties["backgroundColor"];
};

const StyleSolidColorBlueState1: FunctionComponent<
  StyleSolidColorBlueState1Type
> = ({
  className = "",
  avatar,
  home,
  placeholder,
  avatar1,
  home1,
  chevronRight,
  chevronRight1,
  avatar2,
  styleSolidColorBlueStateAlignSelf,
  styleSolidColorBlueStateFlex,
  buttonBackgroundColor,
  buttonFlex,
  dividerBackgroundColor,
  placeholderColor,
  dividerBackgroundColor1,
}) => {
  const styleSolidColorBlueStateStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: styleSolidColorBlueStateAlignSelf,
      flex: styleSolidColorBlueStateFlex,
    };
  }, [styleSolidColorBlueStateAlignSelf, styleSolidColorBlueStateFlex]);

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
    <div
      className={[styles.stylesolidColorblueState, className].join(" ")}
      style={styleSolidColorBlueStateStyle}
    >
      <Button
        avatar="/avatar17.svg"
        home="/home20.svg"
        placeholder1="Открыть"
        avatar1="/home20.svg"
        home1="/home21.svg"
        chevronRight="/home21.svg"
        chevronRight1="/avatar8@2x.png"
        avatar2="/avatar10.svg"
        placeholder
        trailingDivider={false}
        leadingAvatar={false}
        trailingIcon={false}
        leadingDivider={false}
        leadingIcon={false}
        trailingAvatar={false}
        badge={false}
        buttonBackgroundColor="#2563eb"
        buttonFlex="unset"
        dividerBackgroundColor="#fff"
        placeholderColor="#fff"
        dividerBackgroundColor1="#fff"
      />
    </div>
  );
};

export default StyleSolidColorBlueState1;
