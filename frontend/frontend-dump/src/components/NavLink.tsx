import { FunctionComponent, useMemo, type CSSProperties } from "react";
import TypeWhiteColorWhiteSize from "./TypeWhiteColorWhiteSize";
import styles from "./NavLink.module.css";

export type NavLinkType = {
  className?: string;
  placeholder1?: string;
  avatar?: string;
  home?: string;
  placeholder2?: string;
  chevronRight?: string;
  trailingIcon?: boolean;
  leadingIcon?: boolean;
  badge?: boolean;
  placeholder?: boolean;
  borderBottom?: boolean;

  /** Style props */
  navLinkBorderRadius?: CSSProperties["borderRadius"];
  navLinkFlex?: CSSProperties["flex"];
  navLinkBorderLeft?: CSSProperties["borderLeft"];
  contentPadding?: CSSProperties["padding"];
  borderBottomAlignSelf?: CSSProperties["alignSelf"];
  borderBottomWidth?: CSSProperties["width"];
};

const NavLink: FunctionComponent<NavLinkType> = ({
  className = "",
  placeholder1,
  avatar,
  home,
  placeholder2,
  chevronRight,
  trailingIcon = true,
  leadingIcon = true,
  badge = true,
  placeholder = true,
  borderBottom = true,
  navLinkBorderRadius,
  navLinkFlex,
  navLinkBorderLeft,
  contentPadding,
  borderBottomAlignSelf,
  borderBottomWidth,
}) => {
  const navLinkStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: navLinkBorderRadius,
      flex: navLinkFlex,
      borderLeft: navLinkBorderLeft,
    };
  }, [navLinkBorderRadius, navLinkFlex, navLinkBorderLeft]);

  const content1Style: CSSProperties = useMemo(() => {
    return {
      padding: contentPadding,
    };
  }, [contentPadding]);

  const borderBottom1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: borderBottomAlignSelf,
      width: borderBottomWidth,
    };
  }, [borderBottomAlignSelf, borderBottomWidth]);

  return (
    <div className={[styles.navLink, className].join(" ")} style={navLinkStyle}>
      <div className={styles.content} style={content1Style}>
        <div className={styles.inline}>
          {leadingIcon && (
            <div className={styles.icon}>
              <img className={styles.homeIcon} alt="" src="/home7.svg" />
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
            <img className={styles.homeIcon} alt="" src="/chevrondown3.svg" />
          </div>
        )}
      </div>
      {borderBottom && (
        <div className={styles.borderBottom} style={borderBottom1Style} />
      )}
    </div>
  );
};

export default NavLink;
