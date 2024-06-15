import { FunctionComponent, useMemo, type CSSProperties } from "react";
import NavActiveLink from "./NavActiveLink";
import NavLink from "./NavLink";
import TypeWhiteColorWhiteSize from "./TypeWhiteColorWhiteSize";
import BadgeAndTagSmall from "./BadgeAndTagSmall";
import styles from "./TypeBorderedDirectionHoriz.module.css";

export type TypeBorderedDirectionHorizType = {
  className?: string;
  placeholder?: string;
  avatar?: string;
  home?: string;
  chevronRight?: string;
  placeholder1?: string;
  avatar1?: string;
  home1?: string;
  chevronRight1?: string;
  home2?: string;
  placeholder2?: string;
  avatar2?: string;
  home3?: string;
  chevronRight2?: string;
  chevronDown?: string;
  home4?: string;
  placeholder3?: string;
  avatar3?: string;
  home5?: string;
  chevronRight3?: string;
  chevronDown1?: string;
  showNavActiveLink?: boolean;
  showNavLink?: boolean;
  showNavDisabledLink?: boolean;

  /** Style props */
  typeBorderedDirectionHoriGap?: CSSProperties["gap"];
  navActiveLinkFlex?: CSSProperties["flex"];
  navActiveLinkBorderRadius?: CSSProperties["borderRadius"];
  navActiveLinkWidth?: CSSProperties["width"];
  contentPadding?: CSSProperties["padding"];
  placeholderColor?: CSSProperties["color"];
  navLinkFlex?: CSSProperties["flex"];
  navLinkBorderRadius?: CSSProperties["borderRadius"];
  navLinkWidth?: CSSProperties["width"];
  navLinkBorderLeft?: CSSProperties["borderLeft"];
  contentPadding1?: CSSProperties["padding"];
  navLinkHoverBorderRadius?: CSSProperties["borderRadius"];
  navLinkHoverBorderLeft?: CSSProperties["borderLeft"];
  contentPadding2?: CSSProperties["padding"];
  placeholderColor1?: CSSProperties["color"];
  navDisabledLinkFlex?: CSSProperties["flex"];
  navDisabledLinkBorderRadius?: CSSProperties["borderRadius"];
  navDisabledLinkWidth?: CSSProperties["width"];
  navDisabledLinkBorderLeft?: CSSProperties["borderLeft"];
  contentPadding3?: CSSProperties["padding"];
  placeholderColor2?: CSSProperties["color"];
};

const TypeBorderedDirectionHoriz: FunctionComponent<
  TypeBorderedDirectionHorizType
> = ({
  className = "",
  placeholder,
  avatar,
  home,
  chevronRight,
  placeholder1,
  avatar1,
  home1,
  chevronRight1,
  home2,
  placeholder2,
  avatar2,
  home3,
  chevronRight2,
  chevronDown,
  home4,
  placeholder3,
  avatar3,
  home5,
  chevronRight3,
  chevronDown1,
  showNavActiveLink,
  showNavLink,
  showNavDisabledLink,
  typeBorderedDirectionHoriGap,
  navActiveLinkFlex,
  navActiveLinkBorderRadius,
  navActiveLinkWidth,
  contentPadding,
  placeholderColor,
  navLinkFlex,
  navLinkBorderRadius,
  navLinkWidth,
  navLinkBorderLeft,
  contentPadding1,
  navLinkHoverBorderRadius,
  navLinkHoverBorderLeft,
  contentPadding2,
  placeholderColor1,
  navDisabledLinkFlex,
  navDisabledLinkBorderRadius,
  navDisabledLinkWidth,
  navDisabledLinkBorderLeft,
  contentPadding3,
  placeholderColor2,
}) => {
  const typeBorderedDirectionHorizStyle: CSSProperties = useMemo(() => {
    return {
      gap: typeBorderedDirectionHoriGap,
    };
  }, [typeBorderedDirectionHoriGap]);

  const navActiveLinkStyle: CSSProperties = useMemo(() => {
    return {
      flex: navActiveLinkFlex,
      borderRadius: navActiveLinkBorderRadius,
      width: navActiveLinkWidth,
    };
  }, [navActiveLinkFlex, navActiveLinkBorderRadius, navActiveLinkWidth]);

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

  const navLinkStyle: CSSProperties = useMemo(() => {
    return {
      flex: navLinkFlex,
      borderRadius: navLinkBorderRadius,
      width: navLinkWidth,
      borderLeft: navLinkBorderLeft,
    };
  }, [navLinkFlex, navLinkBorderRadius, navLinkWidth, navLinkBorderLeft]);

  const content1Style: CSSProperties = useMemo(() => {
    return {
      padding: contentPadding1,
    };
  }, [contentPadding1]);

  const navLinkHoverStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: navLinkHoverBorderRadius,
      borderLeft: navLinkHoverBorderLeft,
    };
  }, [navLinkHoverBorderRadius, navLinkHoverBorderLeft]);

  const content2Style: CSSProperties = useMemo(() => {
    return {
      padding: contentPadding2,
    };
  }, [contentPadding2]);

  const placeholder7Style: CSSProperties = useMemo(() => {
    return {
      color: placeholderColor1,
    };
  }, [placeholderColor1]);

  const navDisabledLinkStyle: CSSProperties = useMemo(() => {
    return {
      flex: navDisabledLinkFlex,
      borderRadius: navDisabledLinkBorderRadius,
      width: navDisabledLinkWidth,
      borderLeft: navDisabledLinkBorderLeft,
    };
  }, [
    navDisabledLinkFlex,
    navDisabledLinkBorderRadius,
    navDisabledLinkWidth,
    navDisabledLinkBorderLeft,
  ]);

  const content3Style: CSSProperties = useMemo(() => {
    return {
      padding: contentPadding3,
    };
  }, [contentPadding3]);

  const placeholder8Style: CSSProperties = useMemo(() => {
    return {
      color: placeholderColor2,
    };
  }, [placeholderColor2]);

  return (
    <div
      className={[styles.typeborderedDirectionhoriz, className].join(" ")}
      style={typeBorderedDirectionHorizStyle}
    >
      <NavActiveLink
        placeholder1="Профили"
        avatar="/avatar8@2x.png"
        home="/home12.svg"
        chevronRight="/home12.svg"
        trailingIcon={false}
        borderBottom
        badge={false}
        placeholder
        leadingIcon={false}
        navActiveLinkBorderRadius="8px"
        navActiveLinkFlex="1"
        navActiveLinkBackgroundColor="unset"
        contentPadding="8px 12px"
        placeholderColor="#2563eb"
        borderBottomAlignSelf="stretch"
        borderBottomWidth="unset"
      />
      <NavLink
        placeholder1="Команды"
        avatar="/avatar8@2x.png"
        home="/home12.svg"
        placeholder2="9+"
        chevronRight="/home12.svg"
        trailingIcon={false}
        leadingIcon={false}
        badge={false}
        placeholder
        borderBottom
        navLinkBorderRadius="8px"
        navLinkFlex="1"
        navLinkBorderLeft="unset"
        contentPadding="8px 12px"
        borderBottomAlignSelf="stretch"
        borderBottomWidth="unset"
      />
      <div className={styles.navLinkHover} style={navLinkHoverStyle}>
        <div className={styles.content} style={content2Style}>
          <div className={styles.inline}>
            <div className={styles.icon}>
              <img className={styles.homeIcon} alt="" src={home2} />
            </div>
            <div className={styles.placeholder} style={placeholder7Style}>
              {placeholder2}
            </div>
            <TypeWhiteColorWhiteSize
              avatar="/avatar8@2x.png"
              home="/home12.svg"
              placeholder="3"
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
          <div className={styles.icon1}>
            <img className={styles.homeIcon} alt="" src={chevronDown} />
          </div>
        </div>
        <div className={styles.borderBottom} />
      </div>
      {showNavDisabledLink && (
        <div className={styles.navDisabledLink} style={navDisabledLinkStyle}>
          <div className={styles.content} style={content3Style}>
            <div className={styles.inline}>
              <div className={styles.icon}>
                <img className={styles.homeIcon} alt="" src={home4} />
              </div>
              <div className={styles.placeholder} style={placeholder8Style}>
                {placeholder3}
              </div>
              <div className={styles.badge}>
                <BadgeAndTagSmall
                  avatar1="/avatar8@2x.png"
                  home="/home12.svg"
                  placeholder1="9+"
                  chevronRight="/home12.svg"
                  x="/x3.svg"
                  closeIcon={false}
                  placeholder
                  leadingIcon={false}
                  status1={false}
                  trailingIcon={false}
                  avatar={false}
                  badgeAndTagSmallBorderRadius="999px"
                  badgeAndTagSmallBoxShadow="unset"
                  badgeAndTagSmallBackgroundColor="#dbeafe"
                  badgeAndTagSmallBorder="unset"
                  statusBackgroundColor="#1e40af"
                  placeholderColor="#1e40af"
                  closeIconBackgroundColor="#bfdbfe"
                />
              </div>
            </div>
            <div className={styles.icon1}>
              <img className={styles.homeIcon} alt="" src={chevronDown1} />
            </div>
          </div>
          <div className={styles.borderBottom} />
        </div>
      )}
    </div>
  );
};

export default TypeBorderedDirectionHoriz;
