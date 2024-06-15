import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Pagination.module.css";

export type PaginationType = {
  className?: string;
  chevronLeft?: string;
  chevronRight?: string;
  divider?: boolean;
  trailingLabel?: boolean;
  trailingIcon?: boolean;
  leadingLabel?: boolean;
  leadingCharacter?: boolean;
  trailingCharacter?: boolean;
  leadingIcon?: boolean;
  showDivider?: boolean;
  dividerVisible?: boolean;
  dividerVisible1?: boolean;
  dividerVisible2?: boolean;
  dividerVisible3?: boolean;

  /** Style props */
  divWidth?: CSSProperties["width"];
  previousWidth?: CSSProperties["width"];
  linkBackgroundColor?: CSSProperties["backgroundColor"];
  nextWidth?: CSSProperties["width"];
  divWidth1?: CSSProperties["width"];
};

const Pagination: FunctionComponent<PaginationType> = ({
  className = "",
  chevronLeft,
  chevronRight,
  divider = true,
  trailingLabel = true,
  trailingIcon = true,
  leadingLabel = true,
  leadingCharacter = true,
  trailingCharacter = true,
  leadingIcon = true,
  showDivider,
  dividerVisible,
  dividerVisible1,
  dividerVisible2,
  dividerVisible3,
  divWidth,
  previousWidth,
  linkBackgroundColor,
  nextWidth,
  divWidth1,
}) => {
  const divStyle: CSSProperties = useMemo(() => {
    return {
      width: divWidth,
    };
  }, [divWidth]);

  const previousStyle: CSSProperties = useMemo(() => {
    return {
      width: previousWidth,
    };
  }, [previousWidth]);

  const linkStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: linkBackgroundColor,
    };
  }, [linkBackgroundColor]);

  const nextStyle: CSSProperties = useMemo(() => {
    return {
      width: nextWidth,
    };
  }, [nextWidth]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      width: divWidth1,
    };
  }, [divWidth1]);

  return (
    <div className={[styles.pagination, className].join(" ")}>
      <div className={styles.link}>
        {leadingIcon && (
          <img className={styles.chevronLeftIcon} alt="" src={chevronLeft} />
        )}
        {leadingCharacter && (
          <div className={styles.div} style={divStyle}>
            «
          </div>
        )}
        {leadingLabel && (
          <div className={styles.previous} style={previousStyle}>
            Назад
          </div>
        )}
      </div>
      {divider && <div className={styles.divider} />}
      <div className={styles.inline}>
        <div className={styles.link1} style={linkStyle}>
          <div className={styles.div}>1</div>
        </div>
        {showDivider && <div className={styles.divider} />}
        <div className={styles.link1}>
          <div className={styles.div}>2</div>
        </div>
        {dividerVisible && <div className={styles.divider} />}
        <div className={styles.link1}>
          <div className={styles.div}>3</div>
        </div>
        {dividerVisible1 && <div className={styles.divider} />}
        <div className={styles.link4}>
          <div className={styles.div4}>•••</div>
        </div>
        {dividerVisible2 && <div className={styles.divider} />}
        <div className={styles.link1}>
          <div className={styles.div}>10</div>
        </div>
        {dividerVisible3 && <div className={styles.divider} />}
      </div>
      <div className={styles.link6}>
        {trailingLabel && (
          <div className={styles.div} style={nextStyle}>
            Далее
          </div>
        )}
        {trailingCharacter && (
          <div className={styles.div6} style={div1Style}>
            »
          </div>
        )}
        {trailingIcon && (
          <img className={styles.chevronLeftIcon} alt="" src={chevronRight} />
        )}
      </div>
    </div>
  );
};

export default Pagination;
