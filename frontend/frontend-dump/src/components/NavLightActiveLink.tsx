import { FunctionComponent } from "react";
import TypeWhiteColorWhiteSize from "./TypeWhiteColorWhiteSize";
import styles from "./NavLightActiveLink.module.css";

export type NavLightActiveLinkType = {
  className?: string;
  placeholder1?: string;
  avatar?: string;
  home?: string;
  chevronRight?: string;
  borderBottom?: boolean;
  badge?: boolean;
  placeholder?: boolean;
  trailingIcon?: boolean;
  leadingIcon?: boolean;
};

const NavLightActiveLink: FunctionComponent<NavLightActiveLinkType> = ({
  className = "",
  placeholder1,
  avatar,
  home,
  chevronRight,
  borderBottom = true,
  badge = true,
  placeholder = true,
  trailingIcon = true,
  leadingIcon = true,
}) => {
  return (
    <div className={[styles.navLightActiveLink, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.inline}>
          {leadingIcon && (
            <div className={styles.icon}>
              <img className={styles.homeIcon} alt="" src="/home1.svg" />
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
            <img
              className={styles.chevronDownIcon}
              alt=""
              src="/chevrondown1.svg"
            />
          </div>
        )}
      </div>
      {borderBottom && <div className={styles.borderBottom} />}
    </div>
  );
};

export default NavLightActiveLink;
