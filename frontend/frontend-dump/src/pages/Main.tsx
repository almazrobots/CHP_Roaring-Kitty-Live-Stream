import { FunctionComponent } from "react";
import Headernavbar from "../components/Headernavbar";
import Footer from "../components/Footer";
import NavActiveLink from "../components/NavActiveLink";
import NavLink from "../components/NavLink";
import BadgeAndTagSmall from "../components/BadgeAndTagSmall";
import Stateoff from "../components/Stateoff";
import Body2 from "../components/Body2";
import TypeBorderedDirectionHoriz from "../components/TypeBorderedDirectionHoriz";
import Body1 from "../components/Body1";
import Body from "../components/Body";
import styles from "./Main.module.css";

const Main: FunctionComponent = () => {
  return (
    <div className={styles.main1440}>
      <Headernavbar
        preline="Robotix"
        logoShort="/logo-short.svg"
        avatar="/avatar@2x.png"
        home="/home.svg"
        home1="/home1.svg"
        placeholder="Главная"
        avatar1="/avatar@2x.png"
        home2="/home2.svg"
        chevronRight="/chevronright.svg"
        x="/x1.svg"
        chevronDown="/chevrondown1.svg"
        home3="/home3.svg"
        placeholder1="Вакансии"
        avatar2="/avatar@2x.png"
        home4="/home2.svg"
        chevronRight1="/chevronright.svg"
        x1="/x1.svg"
        chevronDown1="/chevrondown1.svg"
        home5="/home3.svg"
        placeholder2="Развитие"
        avatar3="/avatar@2x.png"
        home6="/home2.svg"
        chevronRight2="/chevronright.svg"
        x2="/x1.svg"
        chevronDown2="/chevrondown1.svg"
        home7="/home3.svg"
        avatar4="/avatar@2x.png"
        home8="/home2.svg"
        chevronRight3="/chevronright.svg"
        x3="/x1.svg"
        chevronDown3="/chevrondown1.svg"
        home9="/home3.svg"
        placeholder3="Мои  резюме"
        avatar5="/avatar@2x.png"
        home10="/home4.svg"
        placeholder4="12"
        chevronRight4="/chevronright1.svg"
        x4="/x2.svg"
        chevronDown4="/chevrondown1.svg"
        avatar6="/avatar.svg"
        search="/search.svg"
        avatar7="/avatar@2x.png"
        home11="/home2.svg"
        chevronRight5="/chevronright.svg"
        avatar8="/avatar.svg"
        avatar9="/avatar@2x.png"
        home12="/home2.svg"
        chevronRight6="/chevronright.svg"
        avatar10="/avatar.svg"
        avatar11="/avatar@2x.png"
        home13="/home2.svg"
        chevronRight7="/chevronright.svg"
        avatar12="/avatar1.svg"
        placeholder5="Войти"
        avatar13="/avatar@2x.png"
        home14="/home2.svg"
        chevronRight8="/chevronright.svg"
        chevronRight9="/chevronright2.svg"
        avatar14="/avatar1.svg"
        avatar15="/avatar1.svg"
        home15="/home1.svg"
        avatar16="/avatar@2x.png"
        home16="/home2.svg"
        chevronRight10="/chevronright.svg"
        chevronRight11="/chevronright3.svg"
        avatar17="/avatar1.svg"
        avatar18="/avatar.svg"
        avatar19="/avatar@2x.png"
        home17="/home2.svg"
        chevronRight12="/chevronright.svg"
        navButtonIcon
        collapseButton={false}
        button={false}
        buttonIcon={false}
        buttonIcon={false}
        borderBottom
        buttonGroup
        navDivider={false}
        navLinks
        button
        logoBadge={false}
        logo
        borderBottom1
        showIcon={false}
        iconVisible={false}
        showNavLink={false}
        headernavbarWidth="1440px"
        headernavbarPosition="absolute"
        headernavbarTop="0px"
        headernavbarLeft="0px"
        headernavbarBackgroundColor="#1d4ed8"
        prelineColor="#fff"
        placeholderColor="#fff"
        badgeAndTagSmallBackgroundColor="#fff"
        badgeAndTagSmallBoxShadow="0px 1px 2px rgba(0, 0, 0, 0.05)"
        badgeAndTagSmallBorder="1px solid #e5e7eb"
        statusBackgroundColor="#1f2937"
        placeholderColor1="#1f2937"
        closeIconBackgroundColor="#e5e7eb"
        borderBottomWidth="unset"
        borderBottomBackgroundColor="rgba(255, 255, 255, 0.3)"
        borderBottomAlignSelf="stretch"
        placeholderColor2="#fff"
        badgeAndTagSmallBackgroundColor1="#fff"
        badgeAndTagSmallBoxShadow1="0px 1px 2px rgba(0, 0, 0, 0.05)"
        badgeAndTagSmallBorder1="1px solid #e5e7eb"
        statusBackgroundColor1="#1f2937"
        placeholderColor3="#1f2937"
        closeIconBackgroundColor1="#e5e7eb"
        borderBottomBackgroundColor1="rgba(255, 255, 255, 0.3)"
        placeholderColor4="#fff"
        badgeAndTagSmallBackgroundColor2="#fff"
        badgeAndTagSmallBoxShadow2="0px 1px 2px rgba(0, 0, 0, 0.05)"
        badgeAndTagSmallBorder2="1px solid #e5e7eb"
        statusBackgroundColor2="#1f2937"
        placeholderColor5="#1f2937"
        closeIconBackgroundColor2="#e5e7eb"
        borderBottomBackgroundColor2="rgba(255, 255, 255, 0.3)"
        placeholderColor6="#fff"
        badgeAndTagSmallBackgroundColor3="#fff"
        badgeAndTagSmallBoxShadow3="0px 1px 2px rgba(0, 0, 0, 0.05)"
        badgeAndTagSmallBorder3="1px solid #e5e7eb"
        statusBackgroundColor3="#1f2937"
        placeholderColor7="#1f2937"
        closeIconBackgroundColor3="#e5e7eb"
        borderBottomBackgroundColor3="rgba(255, 255, 255, 0.3)"
        placeholderColor8="#fff"
        badgeAndTagSmallBackgroundColor4="rgba(255, 255, 255, 0.1)"
        statusBackgroundColor4="#fff"
        placeholderColor9="#fff"
        closeIconBackgroundColor4="rgba(255, 255, 255, 0.1)"
        borderBottomBackgroundColor4="rgba(255, 255, 255, 0.3)"
        placeholderColor10="#fff"
        horizontalDividerBackgroundColor="rgba(255, 255, 255, 0.2)"
      />
      <Footer />
      <div className={styles.news}>
        <b className={styles.b}>НОВОСТИ</b>
        <div className={styles.card}>
          <div className={styles.navstabs}>
            <NavActiveLink
              placeholder1="Популярное"
              avatar="/avatar4@2x.png"
              home="/home6.svg"
              chevronRight="/chevronright6.svg"
              trailingIcon={false}
              borderBottom
              badge={false}
              placeholder
              leadingIcon={false}
              navActiveLinkBorderRadius="unset"
              navActiveLinkFlex="1"
              navActiveLinkBackgroundColor="#fff"
              contentPadding="12px"
              placeholderColor="#1f2937"
              borderBottomAlignSelf="stretch"
              borderBottomWidth="unset"
            />
            <NavLink
              placeholder1="Свежее"
              avatar="/avatar5@2x.png"
              home="/home6.svg"
              placeholder2="9+"
              chevronRight="/chevronright6.svg"
              trailingIcon={false}
              leadingIcon={false}
              badge={false}
              placeholder
              borderBottom
              navLinkBorderRadius="unset"
              navLinkFlex="1"
              navLinkBorderLeft="1px solid #e5e7eb"
              contentPadding="12px"
              borderBottomAlignSelf="stretch"
              borderBottomWidth="unset"
            />
            <div className={styles.navLink}>
              <div className={styles.content}>
                <div className={styles.inline}>
                  <div className={styles.icon}>
                    <img className={styles.homeIcon} alt="" src="/home7.svg" />
                  </div>
                  <div className={styles.placeholder}>Billing</div>
                  <div className={styles.badge}>
                    <BadgeAndTagSmall
                      avatar1="/avatar5@2x.png"
                      home="/home6.svg"
                      placeholder1="9+"
                      chevronRight="/chevronright6.svg"
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
                  <img
                    className={styles.icon1}
                    alt=""
                    src="/chevrondown3.svg"
                  />
                </div>
              </div>
              <div className={styles.borderBottom} />
            </div>
            <Stateoff />
          </div>
          <Body2 />
        </div>
      </div>
      <div className={styles.vacancy}>
        <b className={styles.b}>ВАКАНСИИ</b>
        <div className={styles.card1}>
          <TypeBorderedDirectionHoriz
            placeholder="Популярное"
            avatar="/avatar5@2x.png"
            home="/home6.svg"
            chevronRight="/chevronright6.svg"
            placeholder1="Свежее"
            avatar1="/avatar5@2x.png"
            home1="/home6.svg"
            chevronRight1="/chevronright6.svg"
            home2="/home7.svg"
            placeholder2="Вакансии"
            avatar2="/avatar@2x.png"
            home3="/home6.svg"
            chevronRight2="/chevronright6.svg"
            chevronDown="/chevrondown3.svg"
            home4="/home7.svg"
            placeholder3="Billing"
            avatar3="/avatar5@2x.png"
            home5="/home6.svg"
            chevronRight3="/chevronright6.svg"
            chevronDown1="/chevrondown3.svg"
            showNavActiveLink={false}
            showNavLink={false}
            showNavDisabledLink={false}
            typeBorderedDirectionHoriGap="unset"
            navActiveLinkFlex="unset"
            navActiveLinkBorderRadius="unset"
            navActiveLinkWidth="206px"
            contentPadding="12px"
            placeholderColor="#1f2937"
            navLinkFlex="unset"
            navLinkBorderRadius="unset"
            navLinkWidth="206px"
            navLinkBorderLeft="1px solid #e5e7eb"
            contentPadding1="12px"
            navLinkHoverBorderRadius="unset"
            navLinkHoverBorderLeft="1px solid #e5e7eb"
            contentPadding2="12px"
            placeholderColor1="#1f2937"
            navDisabledLinkFlex="unset"
            navDisabledLinkBorderRadius="unset"
            navDisabledLinkWidth="206px"
            navDisabledLinkBorderLeft="1px solid #e5e7eb"
            contentPadding3="12px"
            placeholderColor2="#1f2937"
          />
          <Body1 />
        </div>
        <div className={styles.card1}>
          <TypeBorderedDirectionHoriz
            placeholder="Популярное"
            avatar="/avatar5@2x.png"
            home="/home6.svg"
            chevronRight="/chevronright6.svg"
            placeholder1="Свежее"
            avatar1="/avatar5@2x.png"
            home1="/home6.svg"
            chevronRight1="/chevronright6.svg"
            home2="/home7.svg"
            placeholder2="Развитие"
            avatar2="/avatar@2x.png"
            home3="/home6.svg"
            chevronRight2="/chevronright6.svg"
            chevronDown="/chevrondown3.svg"
            home4="/home7.svg"
            placeholder3="Billing"
            avatar3="/avatar5@2x.png"
            home5="/home6.svg"
            chevronRight3="/chevronright6.svg"
            chevronDown1="/chevrondown3.svg"
            showNavActiveLink={false}
            showNavLink={false}
            showNavDisabledLink={false}
            typeBorderedDirectionHoriGap="unset"
            navActiveLinkFlex="unset"
            navActiveLinkBorderRadius="unset"
            navActiveLinkWidth="206px"
            contentPadding="12px"
            placeholderColor="#1f2937"
            navLinkFlex="unset"
            navLinkBorderRadius="unset"
            navLinkWidth="206px"
            navLinkBorderLeft="1px solid #e5e7eb"
            contentPadding1="12px"
            navLinkHoverBorderRadius="unset"
            navLinkHoverBorderLeft="1px solid #e5e7eb"
            contentPadding2="12px"
            placeholderColor1="#1f2937"
            navDisabledLinkFlex="unset"
            navDisabledLinkBorderRadius="unset"
            navDisabledLinkWidth="206px"
            navDisabledLinkBorderLeft="1px solid #e5e7eb"
            contentPadding3="12px"
            placeholderColor2="#1f2937"
          />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default Main;
