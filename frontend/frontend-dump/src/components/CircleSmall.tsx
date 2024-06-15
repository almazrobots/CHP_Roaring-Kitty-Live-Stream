import { FunctionComponent } from "react";
import styles from "./CircleSmall.module.css";

export type CircleSmallType = {
  className?: string;
  secondaryLabel1?: string;
  secondaryLabel?: boolean;
  title?: boolean;
};

const CircleSmall: FunctionComponent<CircleSmallType> = ({
  className = "",
  secondaryLabel1,
  secondaryLabel = true,
  title = true,
}) => {
  return (
    <div className={[styles.circleSmall, className].join(" ")}>
      <div className={styles.progress} />
      <div className={styles.content}>
        {title && <div className={styles.title}>65%</div>}
        {secondaryLabel && (
          <div className={styles.secondaryLabel}>{secondaryLabel1}</div>
        )}
      </div>
    </div>
  );
};

export default CircleSmall;
