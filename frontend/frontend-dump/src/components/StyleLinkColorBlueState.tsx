import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Button from "./Button";
import styles from "./StyleLinkColorBlueState.module.css";

export type StyleLinkColorBlueStateType = {
  className?: string;
  home?: string;
  avatar1?: string;
  home1?: string;
  chevronRight?: string;
  chevronRight1?: string;
  avatar2?: string;
  leadingAvatar?: boolean;
  leadingDivider?: boolean;
  leadingIcon?: boolean;
  placeholder?: string;
  badge?: boolean;
  trailingDivider?: boolean;
  trailingIcon?: boolean;
  trailingAvatar?: boolean;
  avatar?: string;
  status1?: boolean;
  closeIcon?: boolean;

  /** Style props */
  styleLinkColorBlueStateAlignSelf?: CSSProperties["alignSelf"];
  styleLinkColorBlueStateFlex?: CSSProperties["flex"];
  buttonFlex?: CSSProperties["flex"];
  buttonBackgroundColor?: CSSProperties["backgroundColor"];
  dividerBackgroundColor?: CSSProperties["backgroundColor"];
  placeholderColor?: CSSProperties["color"];
  dividerBackgroundColor1?: CSSProperties["backgroundColor"];
};

const StyleLinkColorBlueState: FunctionComponent<
  StyleLinkColorBlueStateType
> = ({
  className = "",
  home,
  avatar1,
  home1,
  chevronRight,
  chevronRight1,
  avatar2,
  styleLinkColorBlueStateAlignSelf,
  styleLinkColorBlueStateFlex,
  buttonFlex,
  buttonBackgroundColor,
  dividerBackgroundColor,
  placeholderColor,
  dividerBackgroundColor1,
  leadingAvatar,
  leadingDivider,
  leadingIcon,
  placeholder,
  badge,
  trailingDivider,
  trailingIcon,
  trailingAvatar,
  avatar,
  status1,
  closeIcon,
}) => {
  const styleLinkColorBlueStateStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: styleLinkColorBlueStateAlignSelf,
      flex: styleLinkColorBlueStateFlex,
    };
  }, [styleLinkColorBlueStateAlignSelf, styleLinkColorBlueStateFlex]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      flex: buttonFlex,
      backgroundColor: buttonBackgroundColor,
    };
  }, [buttonFlex, buttonBackgroundColor]);

  const dividerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: dividerBackgroundColor,
    };
  }, [dividerBackgroundColor]);

  const placeholderStyle: CSSProperties = useMemo(() => {
    return {
      color: placeholderColor,
    };
  }, [placeholderColor]);

  const divider1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: dividerBackgroundColor1,
    };
  }, [dividerBackgroundColor1]);

  return (
    <div
      className={[styles.stylelinkColorblueState, className].join(" ")}
      style={styleLinkColorBlueStateStyle}
    >
      <Button
        avatar="/avatar16.svg"
        home="/avatar12@2x.svg"
        placeholder1="Button"
        avatar1="/avatar12@2x.svg"
        home1="/home15.svg"
        chevronRight="/home15.svg"
        chevronRight1="/avatar8@2x.svg"
        avatar2="/avatar10.svg"
        placeholder
        trailingDivider={false}
        leadingAvatar={false}
        trailingIcon={false}
        leadingDivider={false}
        leadingIcon={false}
        trailingAvatar={false}
        badge={false}
        buttonBackgroundColor="unset"
        buttonFlex="unset"
        dividerBackgroundColor="#93c5fd"
        placeholderColor="#2563eb"
        dividerBackgroundColor1="#93c5fd"
      />
    </div>
  );
};

export default StyleLinkColorBlueState;
