import { FunctionComponent, useMemo, type CSSProperties } from "react";
import TypeWhiteColorWhiteSize from "./TypeWhiteColorWhiteSize";
import styles from "./NavLightLink.module.css";

export type NavLightLinkType = {
  className?: string;
  placeholder1?: string;
  avatar?: string;
  home?: string;
  placeholder2?: string;
  chevronRight?: string;
  x?: string;
  borderBottom?: boolean;
  trailingIcon?: boolean;
  badge?: boolean;
  placeholder?: boolean;
  leadingIcon?: boolean;

  /** Style props */
  badgeAndTagSmallBoxShadow?: CSSProperties["boxShadow"];
  badgeAndTagSmallBackgroundColor?: CSSProperties["backgroundColor"];
  badgeAndTagSmallBorder?: CSSProperties["border"];
  statusBackgroundColor?: CSSProperties["backgroundColor"];
  placeholderColor?: CSSProperties["color"];
  closeIconBackgroundColor?: CSSProperties["backgroundColor"];
  borderBottomAlignSelf?: CSSProperties["alignSelf"];
  borderBottomWidth?: CSSProperties["width"];
};

const NavLightLink: FunctionComponent<NavLightLinkType> = ({
  className = "",
  placeholder1,
  avatar,
  home,
  placeholder2,
  chevronRight,
  x,
  borderBottom = true,
  trailingIcon = true,
  badge = true,
  placeholder = true,
  leadingIcon = true,
  badgeAndTagSmallBoxShadow,
  badgeAndTagSmallBackgroundColor,
  badgeAndTagSmallBorder,
  statusBackgroundColor,
  placeholderColor,
  closeIconBackgroundColor,
  borderBottomAlignSelf,
  borderBottomWidth,
}) => {
  const badgeAndTagSmallStyle: CSSProperties = useMemo(() => {
    return {
      boxShadow: badgeAndTagSmallBoxShadow,
      backgroundColor: badgeAndTagSmallBackgroundColor,
      border: badgeAndTagSmallBorder,
    };
  }, [
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

  const borderBottom2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: borderBottomAlignSelf,
      width: borderBottomWidth,
    };
  }, [borderBottomAlignSelf, borderBottomWidth]);

  return (
    <div className={[styles.navLightLink, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.inline}>
          {leadingIcon && (
            <div className={styles.icon}>
              <img className={styles.homeIcon} alt="" src="/home3.svg" />
            </div>
          )}
          {placeholder && (
            <div className={styles.placeholder}>{placeholder1}</div>
          )}
          <TypeWhiteColorWhiteSize
            avatar="/avatar8@2x.png"
            home="/home12.svg"
            placeholder="9+"
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
        </div>
        {trailingIcon && (
          <div className={styles.icon1}>
            <img className={styles.homeIcon} alt="" src="/chevrondown1.svg" />
          </div>
        )}
      </div>
      {borderBottom && (
        <div className={styles.borderBottom} style={borderBottom2Style} />
      )}
    </div>
  );
};

export default NavLightLink;
