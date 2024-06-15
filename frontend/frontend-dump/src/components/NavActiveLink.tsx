import { FunctionComponent, useMemo, type CSSProperties } from "react";
import TypeWhiteColorWhiteSize from "./TypeWhiteColorWhiteSize";
import styles from "./NavActiveLink.module.css";

export type NavActiveLinkType = {
  className?: string;
  placeholder1?: string;
  avatar?: string;
  home?: string;
  chevronRight?: string;
  trailingIcon?: boolean;
  borderBottom?: boolean;
  badge?: boolean;
  placeholder?: boolean;
  leadingIcon?: boolean;

  /** Style props */
  navActiveLinkBorderRadius?: CSSProperties["borderRadius"];
  navActiveLinkFlex?: CSSProperties["flex"];
  navActiveLinkBackgroundColor?: CSSProperties["backgroundColor"];
  contentPadding?: CSSProperties["padding"];
  placeholderColor?: CSSProperties["color"];
  borderBottomAlignSelf?: CSSProperties["alignSelf"];
  borderBottomWidth?: CSSProperties["width"];
};

const NavActiveLink: FunctionComponent<NavActiveLinkType> = ({
  className = "",
  placeholder1,
  avatar,
  home,
  chevronRight,
  trailingIcon = true,
  borderBottom = true,
  badge = true,
  placeholder = true,
  leadingIcon = true,
  navActiveLinkBorderRadius,
  navActiveLinkFlex,
  navActiveLinkBackgroundColor,
  contentPadding,
  placeholderColor,
  borderBottomAlignSelf,
  borderBottomWidth,
}) => {
  const navActiveLinkStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: navActiveLinkBorderRadius,
      flex: navActiveLinkFlex,
      backgroundColor: navActiveLinkBackgroundColor,
    };
  }, [
    navActiveLinkBorderRadius,
    navActiveLinkFlex,
    navActiveLinkBackgroundColor,
  ]);

  const contentStyle: CSSProperties = useMemo(() => {
    return {
      padding: contentPadding,
    };
  }, [contentPadding]);

  const placeholderStyle: CSSProperties = useMemo(() => {
    return {
      color: placeholderColor,
    };
  }, [placeholderColor]);

  const borderBottomStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: borderBottomAlignSelf,
      width: borderBottomWidth,
    };
  }, [borderBottomAlignSelf, borderBottomWidth]);

  return (
    <div
      className={[styles.navActiveLink, className].join(" ")}
      style={navActiveLinkStyle}
    >
      <div className={styles.content} style={contentStyle}>
        <div className={styles.inline}>
          {leadingIcon && (
            <div className={styles.icon}>
              <img className={styles.homeIcon} alt="" src="/home5.svg" />
            </div>
          )}
          {placeholder && (
            <div className={styles.placeholder} style={placeholderStyle}>
              {placeholder1}
            </div>
          )}
          <TypeWhiteColorWhiteSize
            avatar="/avatar8@2x.png"
            home="/home12.svg"
            placeholder="9+"
            chevronRight="/home12.svg"
            x="/x3.svg"
            chevronRightIcon={false}
            typeWhiteColorWhiteSizeBoxShadow="unset"
            badgeAndTagBackgroundColor="#dbeafe"
            badgeAndTagBorder="unset"
            badgeAndTagPadding="1px 3px"
            badgeAndTagBoxShadow="unset"
            statusBackgroundColor="#1e40af"
            placeholderColor="#1e40af"
            closeIconBackgroundColor="#bfdbfe"
          />
        </div>
        {trailingIcon && (
          <div className={styles.icon1}>
            <img className={styles.homeIcon} alt="" src="/chevrondown2.svg" />
          </div>
        )}
      </div>
      {borderBottom && (
        <div className={styles.borderBottom} style={borderBottomStyle} />
      )}
    </div>
  );
};

export default NavActiveLink;
