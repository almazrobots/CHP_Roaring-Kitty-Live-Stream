import { FunctionComponent, useMemo, type CSSProperties } from "react";
import TypeWhiteColorWhiteSize from "./TypeWhiteColorWhiteSize";
import NavActiveLink from "./NavActiveLink";
import NavLink from "./NavLink";
import TypeGhostColorGrayState from "./TypeGhostColorGrayState";
import StyleWhiteColorDarkState from "./StyleWhiteColorDarkState";
import styles from "./Headernavbar.module.css";

export type HeadernavbarType = {
  className?: string;
  preline?: string;
  logoShort?: string;
  avatar?: string;
  home?: string;
  home1?: string;
  placeholder?: string;
  avatar1?: string;
  home2?: string;
  chevronRight?: string;
  x?: string;
  chevronDown?: string;
  home3?: string;
  placeholder1?: string;
  avatar2?: string;
  home4?: string;
  chevronRight1?: string;
  x1?: string;
  chevronDown1?: string;
  home5?: string;
  placeholder2?: string;
  avatar3?: string;
  home6?: string;
  chevronRight2?: string;
  x2?: string;
  chevronDown2?: string;
  home7?: string;
  avatar4?: string;
  home8?: string;
  chevronRight3?: string;
  x3?: string;
  chevronDown3?: string;
  home9?: string;
  placeholder3?: string;
  avatar5?: string;
  home10?: string;
  placeholder4?: string;
  chevronRight4?: string;
  x4?: string;
  chevronDown4?: string;
  avatar6?: string;
  search?: string;
  avatar7?: string;
  home11?: string;
  chevronRight5?: string;
  avatar8?: string;
  avatar9?: string;
  home12?: string;
  chevronRight6?: string;
  avatar10?: string;
  avatar11?: string;
  home13?: string;
  chevronRight7?: string;
  avatar12?: string;
  placeholder5?: string;
  avatar13?: string;
  home14?: string;
  chevronRight8?: string;
  chevronRight9?: string;
  avatar14?: string;
  avatar15?: string;
  home15?: string;
  avatar16?: string;
  home16?: string;
  chevronRight10?: string;
  chevronRight11?: string;
  avatar17?: string;
  avatar18?: string;
  avatar19?: string;
  home17?: string;
  chevronRight12?: string;
  navButtonIcon?: boolean;
  collapseButton?: boolean;
  buttonIcon?: boolean;
  borderBottom?: boolean;
  buttonGroup?: boolean;
  navDivider?: boolean;
  navLinks?: boolean;
  button?: boolean;
  logoBadge?: boolean;
  logo?: boolean;
  borderBottom1?: boolean;
  showIcon?: boolean;
  iconVisible?: boolean;
  showNavLink?: boolean;

  /** Style props */
  headernavbarWidth?: CSSProperties["width"];
  headernavbarPosition?: CSSProperties["position"];
  headernavbarTop?: CSSProperties["top"];
  headernavbarLeft?: CSSProperties["left"];
  headernavbarBackgroundColor?: CSSProperties["backgroundColor"];
  prelineColor?: CSSProperties["color"];
  placeholderColor?: CSSProperties["color"];
  badgeAndTagSmallBackgroundColor?: CSSProperties["backgroundColor"];
  badgeAndTagSmallBoxShadow?: CSSProperties["boxShadow"];
  badgeAndTagSmallBorder?: CSSProperties["border"];
  statusBackgroundColor?: CSSProperties["backgroundColor"];
  placeholderColor1?: CSSProperties["color"];
  closeIconBackgroundColor?: CSSProperties["backgroundColor"];
  borderBottomWidth?: CSSProperties["width"];
  borderBottomBackgroundColor?: CSSProperties["backgroundColor"];
  borderBottomAlignSelf?: CSSProperties["alignSelf"];
  placeholderColor2?: CSSProperties["color"];
  badgeAndTagSmallBackgroundColor1?: CSSProperties["backgroundColor"];
  badgeAndTagSmallBoxShadow1?: CSSProperties["boxShadow"];
  badgeAndTagSmallBorder1?: CSSProperties["border"];
  statusBackgroundColor1?: CSSProperties["backgroundColor"];
  placeholderColor3?: CSSProperties["color"];
  closeIconBackgroundColor1?: CSSProperties["backgroundColor"];
  borderBottomBackgroundColor1?: CSSProperties["backgroundColor"];
  placeholderColor4?: CSSProperties["color"];
  badgeAndTagSmallBackgroundColor2?: CSSProperties["backgroundColor"];
  badgeAndTagSmallBoxShadow2?: CSSProperties["boxShadow"];
  badgeAndTagSmallBorder2?: CSSProperties["border"];
  statusBackgroundColor2?: CSSProperties["backgroundColor"];
  placeholderColor5?: CSSProperties["color"];
  closeIconBackgroundColor2?: CSSProperties["backgroundColor"];
  borderBottomBackgroundColor2?: CSSProperties["backgroundColor"];
  placeholderColor6?: CSSProperties["color"];
  badgeAndTagSmallBackgroundColor3?: CSSProperties["backgroundColor"];
  badgeAndTagSmallBoxShadow3?: CSSProperties["boxShadow"];
  badgeAndTagSmallBorder3?: CSSProperties["border"];
  statusBackgroundColor3?: CSSProperties["backgroundColor"];
  placeholderColor7?: CSSProperties["color"];
  closeIconBackgroundColor3?: CSSProperties["backgroundColor"];
  borderBottomBackgroundColor3?: CSSProperties["backgroundColor"];
  placeholderColor8?: CSSProperties["color"];
  badgeAndTagSmallBackgroundColor4?: CSSProperties["backgroundColor"];
  statusBackgroundColor4?: CSSProperties["backgroundColor"];
  placeholderColor9?: CSSProperties["color"];
  closeIconBackgroundColor4?: CSSProperties["backgroundColor"];
  borderBottomBackgroundColor4?: CSSProperties["backgroundColor"];
  placeholderColor10?: CSSProperties["color"];
  horizontalDividerBackgroundColor?: CSSProperties["backgroundColor"];
};

const Headernavbar: FunctionComponent<HeadernavbarType> = ({
  className = "",
  preline,
  logoShort,
  avatar,
  home,
  home1,
  placeholder,
  avatar1,
  home2,
  chevronRight,
  x,
  chevronDown,
  home3,
  placeholder1,
  avatar2,
  home4,
  chevronRight1,
  x1,
  chevronDown1,
  home5,
  placeholder2,
  avatar3,
  home6,
  chevronRight2,
  x2,
  chevronDown2,
  home7,
  avatar4,
  home8,
  chevronRight3,
  x3,
  chevronDown3,
  home9,
  placeholder3,
  avatar5,
  home10,
  placeholder4,
  chevronRight4,
  x4,
  chevronDown4,
  avatar6,
  search,
  avatar7,
  home11,
  chevronRight5,
  avatar8,
  avatar9,
  home12,
  chevronRight6,
  avatar10,
  avatar11,
  home13,
  chevronRight7,
  avatar12,
  placeholder5,
  avatar13,
  home14,
  chevronRight8,
  chevronRight9,
  avatar14,
  avatar15,
  home15,
  avatar16,
  home16,
  chevronRight10,
  chevronRight11,
  avatar17,
  avatar18,
  avatar19,
  home17,
  chevronRight12,
  navButtonIcon = true,
  collapseButton = true,
  buttonIcon = true,
  borderBottom = true,
  buttonGroup = true,
  navDivider = true,
  navLinks = true,
  button = true,
  logoBadge = true,
  logo = true,
  borderBottom1,
  showIcon,
  iconVisible,
  showNavLink,
  headernavbarWidth,
  headernavbarPosition,
  headernavbarTop,
  headernavbarLeft,
  headernavbarBackgroundColor,
  prelineColor,
  placeholderColor,
  badgeAndTagSmallBackgroundColor,
  badgeAndTagSmallBoxShadow,
  badgeAndTagSmallBorder,
  statusBackgroundColor,
  placeholderColor1,
  closeIconBackgroundColor,
  borderBottomWidth,
  borderBottomBackgroundColor,
  borderBottomAlignSelf,
  placeholderColor2,
  badgeAndTagSmallBackgroundColor1,
  badgeAndTagSmallBoxShadow1,
  badgeAndTagSmallBorder1,
  statusBackgroundColor1,
  placeholderColor3,
  closeIconBackgroundColor1,
  borderBottomBackgroundColor1,
  placeholderColor4,
  badgeAndTagSmallBackgroundColor2,
  badgeAndTagSmallBoxShadow2,
  badgeAndTagSmallBorder2,
  statusBackgroundColor2,
  placeholderColor5,
  closeIconBackgroundColor2,
  borderBottomBackgroundColor2,
  placeholderColor6,
  badgeAndTagSmallBackgroundColor3,
  badgeAndTagSmallBoxShadow3,
  badgeAndTagSmallBorder3,
  statusBackgroundColor3,
  placeholderColor7,
  closeIconBackgroundColor3,
  borderBottomBackgroundColor3,
  placeholderColor8,
  badgeAndTagSmallBackgroundColor4,
  statusBackgroundColor4,
  placeholderColor9,
  closeIconBackgroundColor4,
  borderBottomBackgroundColor4,
  placeholderColor10,
  horizontalDividerBackgroundColor,
}) => {
  const headernavbarStyle: CSSProperties = useMemo(() => {
    return {
      width: headernavbarWidth,
      position: headernavbarPosition,
      top: headernavbarTop,
      left: headernavbarLeft,
      backgroundColor: headernavbarBackgroundColor,
    };
  }, [
    headernavbarWidth,
    headernavbarPosition,
    headernavbarTop,
    headernavbarLeft,
    headernavbarBackgroundColor,
  ]);

  const prelineStyle: CSSProperties = useMemo(() => {
    return {
      color: prelineColor,
    };
  }, [prelineColor]);

  const placeholderStyle: CSSProperties = useMemo(() => {
    return {
      color: placeholderColor,
    };
  }, [placeholderColor]);

  const badgeAndTagSmallStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: badgeAndTagSmallBackgroundColor,
      boxShadow: badgeAndTagSmallBoxShadow,
      border: badgeAndTagSmallBorder,
    };
  }, [
    badgeAndTagSmallBackgroundColor,
    badgeAndTagSmallBoxShadow,
    badgeAndTagSmallBorder,
  ]);

  const statusStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: statusBackgroundColor,
    };
  }, [statusBackgroundColor]);

  const placeholder1Style: CSSProperties = useMemo(() => {
    return {
      color: placeholderColor1,
    };
  }, [placeholderColor1]);

  const closeIconStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: closeIconBackgroundColor,
    };
  }, [closeIconBackgroundColor]);

  const borderBottomStyle: CSSProperties = useMemo(() => {
    return {
      width: borderBottomWidth,
      backgroundColor: borderBottomBackgroundColor,
      alignSelf: borderBottomAlignSelf,
    };
  }, [borderBottomWidth, borderBottomBackgroundColor, borderBottomAlignSelf]);

  const placeholder2Style: CSSProperties = useMemo(() => {
    return {
      color: placeholderColor2,
    };
  }, [placeholderColor2]);

  const badgeAndTagSmallStyle1: CSSProperties = useMemo(() => {
    return {
      backgroundColor: badgeAndTagSmallBackgroundColor1,
      boxShadow: badgeAndTagSmallBoxShadow1,
      border: badgeAndTagSmallBorder1,
    };
  }, [
    badgeAndTagSmallBackgroundColor1,
    badgeAndTagSmallBoxShadow1,
    badgeAndTagSmallBorder1,
  ]);

  const statusStyle1: CSSProperties = useMemo(() => {
    return {
      backgroundColor: statusBackgroundColor1,
    };
  }, [statusBackgroundColor1]);

  const placeholder1Style1: CSSProperties = useMemo(() => {
    return {
      color: placeholderColor3,
    };
  }, [placeholderColor3]);

  const closeIconStyle1: CSSProperties = useMemo(() => {
    return {
      backgroundColor: closeIconBackgroundColor1,
    };
  }, [closeIconBackgroundColor1]);

  const borderBottom1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: borderBottomBackgroundColor1,
    };
  }, [borderBottomBackgroundColor1]);

  const placeholder2Style1: CSSProperties = useMemo(() => {
    return {
      color: placeholderColor4,
    };
  }, [placeholderColor4]);

  const badgeAndTagSmallStyle2: CSSProperties = useMemo(() => {
    return {
      backgroundColor: badgeAndTagSmallBackgroundColor2,
      boxShadow: badgeAndTagSmallBoxShadow2,
      border: badgeAndTagSmallBorder2,
    };
  }, [
    badgeAndTagSmallBackgroundColor2,
    badgeAndTagSmallBoxShadow2,
    badgeAndTagSmallBorder2,
  ]);

  const statusStyle2: CSSProperties = useMemo(() => {
    return {
      backgroundColor: statusBackgroundColor2,
    };
  }, [statusBackgroundColor2]);

  const placeholder1Style2: CSSProperties = useMemo(() => {
    return {
      color: placeholderColor5,
    };
  }, [placeholderColor5]);

  const closeIconStyle2: CSSProperties = useMemo(() => {
    return {
      backgroundColor: closeIconBackgroundColor2,
    };
  }, [closeIconBackgroundColor2]);

  const borderBottom1Style1: CSSProperties = useMemo(() => {
    return {
      backgroundColor: borderBottomBackgroundColor2,
    };
  }, [borderBottomBackgroundColor2]);

  const placeholder2Style2: CSSProperties = useMemo(() => {
    return {
      color: placeholderColor6,
    };
  }, [placeholderColor6]);

  const badgeAndTagSmallStyle3: CSSProperties = useMemo(() => {
    return {
      backgroundColor: badgeAndTagSmallBackgroundColor3,
      boxShadow: badgeAndTagSmallBoxShadow3,
      border: badgeAndTagSmallBorder3,
    };
  }, [
    badgeAndTagSmallBackgroundColor3,
    badgeAndTagSmallBoxShadow3,
    badgeAndTagSmallBorder3,
  ]);

  const statusStyle3: CSSProperties = useMemo(() => {
    return {
      backgroundColor: statusBackgroundColor3,
    };
  }, [statusBackgroundColor3]);

  const placeholder1Style3: CSSProperties = useMemo(() => {
    return {
      color: placeholderColor7,
    };
  }, [placeholderColor7]);

  const closeIconStyle3: CSSProperties = useMemo(() => {
    return {
      backgroundColor: closeIconBackgroundColor3,
    };
  }, [closeIconBackgroundColor3]);

  const borderBottom1Style2: CSSProperties = useMemo(() => {
    return {
      backgroundColor: borderBottomBackgroundColor3,
    };
  }, [borderBottomBackgroundColor3]);

  const placeholder2Style3: CSSProperties = useMemo(() => {
    return {
      color: placeholderColor8,
    };
  }, [placeholderColor8]);

  const badgeAndTagSmallStyle4: CSSProperties = useMemo(() => {
    return {
      backgroundColor: badgeAndTagSmallBackgroundColor4,
    };
  }, [badgeAndTagSmallBackgroundColor4]);

  const statusStyle4: CSSProperties = useMemo(() => {
    return {
      backgroundColor: statusBackgroundColor4,
    };
  }, [statusBackgroundColor4]);

  const placeholder1Style4: CSSProperties = useMemo(() => {
    return {
      color: placeholderColor9,
    };
  }, [placeholderColor9]);

  const closeIconStyle4: CSSProperties = useMemo(() => {
    return {
      backgroundColor: closeIconBackgroundColor4,
    };
  }, [closeIconBackgroundColor4]);

  const borderBottom1Style3: CSSProperties = useMemo(() => {
    return {
      backgroundColor: borderBottomBackgroundColor4,
    };
  }, [borderBottomBackgroundColor4]);

  const placeholder3Style: CSSProperties = useMemo(() => {
    return {
      color: placeholderColor10,
    };
  }, [placeholderColor10]);

  const horizontalDividerStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: horizontalDividerBackgroundColor,
    };
  }, [horizontalDividerBackgroundColor]);

  return (
    <div
      className={[styles.headernavbar, className].join(" ")}
      style={headernavbarStyle}
    >
      <div className={styles.container}>
        {logo && (
          <div className={styles.logo}>
            <div className={styles.logo1}>
              <b className={styles.preline} style={prelineStyle}>
                {preline}
              </b>
              <img className={styles.logoShortIcon} alt="" src={logoShort} />
            </div>
            <TypeWhiteColorWhiteSize
              avatar="/avatar7@2x.png"
              home="/home11.svg"
              placeholder="v1.0"
              chevronRight="/chevrondown.svg"
              x="/x.svg"
              chevronRightIcon
              typeWhiteColorWhiteSizeBoxShadow="0px 1px 2px rgba(0, 0, 0, 0.05)"
              badgeAndTagBackgroundColor="#fff"
              badgeAndTagBorder="1px solid #e5e7eb"
              badgeAndTagPadding="6px"
              badgeAndTagBoxShadow="unset"
              statusBackgroundColor="#1f2937"
              placeholderColor="#1f2937"
              closeIconBackgroundColor="#e5e7eb"
            />
          </div>
        )}
        <div className={styles.nav}>
          {navLinks && (
            <div className={styles.nav}>
              {/*<NavActiveLink*/}
              {/*  placeholder1="Landing"*/}
              {/*  avatar="/avatar8@2x.png"*/}
              {/*  home="/home12.svg"*/}
              {/*  chevronRight="/home12.svg"*/}
              {/*  trailingIcon={false}*/}
              {/*  borderBottom={false}*/}
              {/*  badge={false}*/}
              {/*  placeholder*/}
              {/*  leadingIcon={false}*/}
              {/*  navActiveLinkBorderRadius="8px"*/}
              {/*  navActiveLinkFlex="unset"*/}
              {/*  navActiveLinkBackgroundColor="unset"*/}
              {/*  contentPadding="8px 0px"*/}
              {/*  placeholderColor="#2563eb"*/}
              {/*  borderBottomAlignSelf="unset"*/}
              {/*  borderBottomWidth="141px"*/}
              {/*/>*/}
              <NavLink
                placeholder1="Аккаунт"
                avatar="/avatar8@2x.png"
                home="/home12.svg"
                placeholder2="9+"
                chevronRight="/home12.svg"
                trailingIcon
                leadingIcon={false}
                badge={false}
                placeholder
                borderBottom={false}
                navLinkBorderRadius="8px"
                navLinkFlex="unset"
                navLinkBorderLeft="unset"
                contentPadding="8px 0px"
                borderBottomAlignSelf="unset"
                borderBottomWidth="141px"
              />
              <NavLink
                placeholder1="Работа"
                avatar="/avatar8@2x.png"
                home="/home12.svg"
                placeholder2="9+"
                chevronRight="/home12.svg"
                trailingIcon
                leadingIcon={false}
                badge={false}
                placeholder
                borderBottom={false}
                navLinkBorderRadius="8px"
                navLinkFlex="unset"
                navLinkBorderLeft="unset"
                contentPadding="8px 0px"
                borderBottomAlignSelf="unset"
                borderBottomWidth="141px"
              />
              <NavLink
                placeholder1="Блог"
                avatar="/avatar8@2x.png"
                home="/home12.svg"
                placeholder2="9+"
                chevronRight="/home12.svg"
                trailingIcon
                leadingIcon={false}
                badge={false}
                placeholder
                borderBottom={false}
                navLinkBorderRadius="8px"
                navLinkFlex="unset"
                navLinkBorderLeft="unset"
                contentPadding="8px 0px"
                borderBottomAlignSelf="unset"
                borderBottomWidth="141px"
              />
              <NavLink
                placeholder1="Документы"
                avatar="/avatar8@2x.png"
                home="/home12.svg"
                placeholder2="New"
                chevronRight="/home12.svg"
                trailingIcon={false}
                leadingIcon={false}
                badge
                placeholder
                borderBottom={false}
                navLinkBorderRadius="8px"
                navLinkFlex="unset"
                navLinkBorderLeft="unset"
                contentPadding="8px 0px"
                borderBottomAlignSelf="unset"
                borderBottomWidth="141px"
              />
              <TypeGhostColorGrayState
                avatar="/avatar9.svg"
                home="/search1.svg"
                avatar1="/avatar8@2x.png"
                home1="/home12.svg"
                chevronRight="/home12.svg"
                badge={false}
                buttonIconSmallBoxShadow="unset"
                buttonIconSmallBackgroundColor="unset"
                buttonIconSmallBorder="unset"
                placeholderColor="#6b7280"
              />
            </div>
          )}
          {navDivider && (
            <div
              className={styles.horizontalDivider}
              style={horizontalDividerStyle}
            />
          )}
          {
            buttonGroup
            &&

            (
            <div className={styles.buttonGroup}>
              <a href={"http://176.123.166.154:8000/docs"}>
              <StyleWhiteColorDarkState
                avatar="/avatar10.svg"
                home="/user.svg"
                placeholder="Log in"
                avatar1="/avatar8@2x.png"
                home1="/home12.svg"
                chevronRight="/home12.svg"
                chevronRight1="/avatar8@2x.png"
                avatar2="/avatar10.svg"
                avatarIcon={false}
                homeIcon
                showPlaceholder
                buttonSmallBoxShadow="0px 1px 2px rgba(0, 0, 0, 0.05)"
                buttonSmallBackgroundColor="#fff"
                buttonSmallBorder="1px solid #e5e7eb"
                dividerBackgroundColor="#9ca3af"
                placeholderColor="#1f2937"
                placeholderWidth="unset"
                dividerBackgroundColor1="#9ca3af"
              /></a>
              <a href={"http://176.123.166.154:8000/docs"}>
              <StyleWhiteColorDarkState
                avatar="/avatar10.svg"
                home="/avatar8@2x.png"
                placeholder="Sign up"
                avatar1="/avatar8@2x.png"
                home1="/home12.svg"
                chevronRight="/home12.svg"
                chevronRight1="/avatar8@2x.png"
                avatar2="/avatar10.svg"
                avatarIcon={false}
                homeIcon={false}
                showPlaceholder
                buttonSmallBoxShadow="unset"
                buttonSmallBackgroundColor="#2563eb"
                buttonSmallBorder="unset"
                dividerBackgroundColor="#fff"
                placeholderColor="#fff"
                placeholderWidth="unset"
                dividerBackgroundColor1="#fff"
              /></a>

            </div>
          )}
        </div>
      </div>
      {borderBottom && <div className={styles.borderBottom} />}
    </div>
  );
};

export default Headernavbar;
