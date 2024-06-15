import { FunctionComponent } from "react";
import styles from "./Body4.module.css";

export type Body4Type = {
  className?: string;
};

const Body4: FunctionComponent<Body4Type> = ({ className = "" }) => {
  return (
    <div className={[styles.body, className].join(" ")}>
      <div className={styles.head}>
        <div className={styles.title}>
          <b className={styles.middleUxui}>Middle UX/UI дизайнер</b>
        </div>
      </div>
      <b className={styles.b}>60 000 - 80 000 ₽</b>
      <div className={styles.skills}>
        <div className={styles.listTags}>
          <div className={styles.badgeAndTag}>
            <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
            <img className={styles.homeIcon} alt="" src="/home9.svg" />
            <div className={styles.placeholder}>
              <div className={styles.status} />
              <div className={styles.placeholder1}>UX</div>
            </div>
            <img className={styles.homeIcon} alt="" src="/chevronright9.svg" />
            <div className={styles.closeIcon}>
              <img className={styles.xIcon} alt="" src="/x4.svg" />
            </div>
          </div>
          <div className={styles.badgeAndTag}>
            <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
            <img className={styles.homeIcon} alt="" src="/home9.svg" />
            <div className={styles.placeholder}>
              <div className={styles.status} />
              <div className={styles.placeholder1}>UI</div>
            </div>
            <img className={styles.homeIcon} alt="" src="/chevronright9.svg" />
            <div className={styles.closeIcon}>
              <img className={styles.xIcon} alt="" src="/x4.svg" />
            </div>
          </div>
          <div className={styles.badgeAndTag}>
            <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
            <img className={styles.homeIcon} alt="" src="/home9.svg" />
            <div className={styles.placeholder}>
              <div className={styles.status} />
              <div className={styles.placeholder1}>Figma</div>
            </div>
            <img className={styles.homeIcon} alt="" src="/chevronright9.svg" />
            <div className={styles.closeIcon}>
              <img className={styles.xIcon} alt="" src="/x4.svg" />
            </div>
          </div>
          <div className={styles.badgeAndTag}>
            <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
            <img className={styles.homeIcon} alt="" src="/home9.svg" />
            <div className={styles.placeholder}>
              <div className={styles.status} />
              <div className={styles.placeholder1}>Adobe Photoshop</div>
            </div>
            <img className={styles.homeIcon} alt="" src="/chevronright9.svg" />
            <div className={styles.closeIcon}>
              <img className={styles.xIcon} alt="" src="/x4.svg" />
            </div>
          </div>
          <div className={styles.badgeAndTag}>
            <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
            <img className={styles.homeIcon} alt="" src="/home9.svg" />
            <div className={styles.placeholder}>
              <div className={styles.status} />
              <div className={styles.placeholder1}>Adobe After Effect</div>
            </div>
            <img className={styles.homeIcon} alt="" src="/chevronright9.svg" />
            <div className={styles.closeIcon}>
              <img className={styles.xIcon} alt="" src="/x4.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body4;
