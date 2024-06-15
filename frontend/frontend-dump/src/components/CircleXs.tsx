import { FunctionComponent } from "react";
import styles from "./CircleXs.module.css";

export type CircleXsType = {
  className?: string;
  title?: boolean;
};

const CircleXs: FunctionComponent<CircleXsType> = ({
  className = "",
  title = true,
}) => {
  return (
    <div className={[styles.circleXs, className].join(" ")}>
      <div className={styles.progress} />
      <div className={styles.content}>
        {title && <div className={styles.title}>65%</div>}
      </div>
    </div>
  );
};

export default CircleXs;
