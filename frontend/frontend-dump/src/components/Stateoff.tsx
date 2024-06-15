import { FunctionComponent } from "react";
import TypeWhiteColorWhiteSize from "./TypeWhiteColorWhiteSize";
import BadgeAndTagSmall from "./BadgeAndTagSmall";
import styles from "./Stateoff.module.css";

export type StateoffType = {
  className?: string;
};

const Stateoff: FunctionComponent<StateoffType> = ({ className = "" }) => {
  return (
    <div className={[styles.stateoff, className].join(" ")}>
      <div className={styles.navLink}>
        <div className={styles.content}>
          <div className={styles.inline}>
            <div className={styles.icon}>
              <img className={styles.homeIcon} alt="" src="/home7.svg" />
            </div>
            <div className={styles.placeholder}>Моя лента</div>
            <TypeWhiteColorWhiteSize
              avatar="/avatar@2x.png"
              home="/home6.svg"
              placeholder="3"
              chevronRight="/chevronright6.svg"
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
            <img className={styles.homeIcon} alt="" src="/settings2.svg" />
          </div>
        </div>
        <div className={styles.borderBottom} />
      </div>
      <div className={styles.listTypes}>
        <div className={styles.types}>
          <div className={styles.checkedList}>
            <div className={styles.lists}>
              <div className={styles.list}>
                <div className={styles.verticalDivider} />
                <div className={styles.inline1}>
                  <div className={styles.staticIcon}>
                    <div className={styles.iconXs}>
                      <img
                        className={styles.homeIcon}
                        alt=""
                        src="/check.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.content1}>
                    <div className={styles.separator} />
                    <div className={styles.div}>/</div>
                    <img className={styles.bellIcon} alt="" src="/bell.svg" />
                    <div className={styles.placeholder1}>Backend</div>
                    <div className={styles.badge}>
                      <BadgeAndTagSmall
                        avatar1="/avatar@2x.png"
                        home="/home4.svg"
                        placeholder1="2"
                        chevronRight="/chevronright1.svg"
                        x="/x2.svg"
                        closeIcon={false}
                        placeholder
                        leadingIcon={false}
                        status1={false}
                        trailingIcon={false}
                        avatar={false}
                        badgeAndTagSmallBorderRadius="999px"
                        badgeAndTagSmallBoxShadow="unset"
                        badgeAndTagSmallBackgroundColor="#2563eb"
                        badgeAndTagSmallBorder="unset"
                        statusBackgroundColor="#fff"
                        placeholderColor="#fff"
                        closeIconBackgroundColor="rgba(255, 255, 255, 0.2)"
                      />
                    </div>
                  </div>
                  <div className={styles.horizontalDivider} />
                </div>
              </div>
            </div>
            <div className={styles.lists}>
              <div className={styles.list}>
                <div className={styles.verticalDivider} />
                <div className={styles.inline1}>
                  <div className={styles.staticIcon}>
                    <div className={styles.iconXs}>
                      <img
                        className={styles.homeIcon}
                        alt=""
                        src="/check.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.content1}>
                    <div className={styles.separator} />
                    <div className={styles.div}>/</div>
                    <img className={styles.bellIcon} alt="" src="/bell.svg" />
                    <div className={styles.placeholder1}>Frontend</div>
                    <div className={styles.badge}>
                      <BadgeAndTagSmall
                        avatar1="/avatar@2x.png"
                        home="/home4.svg"
                        placeholder1="2"
                        chevronRight="/chevronright1.svg"
                        x="/x2.svg"
                        closeIcon={false}
                        placeholder
                        leadingIcon={false}
                        status1={false}
                        trailingIcon={false}
                        avatar={false}
                        badgeAndTagSmallBorderRadius="999px"
                        badgeAndTagSmallBoxShadow="unset"
                        badgeAndTagSmallBackgroundColor="#2563eb"
                        badgeAndTagSmallBorder="unset"
                        statusBackgroundColor="#fff"
                        placeholderColor="#fff"
                        closeIconBackgroundColor="rgba(255, 255, 255, 0.2)"
                      />
                    </div>
                  </div>
                  <div className={styles.horizontalDivider} />
                </div>
              </div>
            </div>
            <div className={styles.lists}>
              <div className={styles.list}>
                <div className={styles.verticalDivider} />
                <div className={styles.inline1}>
                  <div className={styles.staticIcon}>
                    <div className={styles.iconXs}>
                      <img
                        className={styles.homeIcon}
                        alt=""
                        src="/check.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.content1}>
                    <div className={styles.separator} />
                    <div className={styles.div}>/</div>
                    <img className={styles.bellIcon} alt="" src="/bell.svg" />
                    <div className={styles.placeholder1}>Team Lead</div>
                    <div className={styles.badge}>
                      <BadgeAndTagSmall
                        avatar1="/avatar@2x.png"
                        home="/home4.svg"
                        placeholder1="2"
                        chevronRight="/chevronright1.svg"
                        x="/x2.svg"
                        closeIcon={false}
                        placeholder
                        leadingIcon={false}
                        status1={false}
                        trailingIcon={false}
                        avatar={false}
                        badgeAndTagSmallBorderRadius="999px"
                        badgeAndTagSmallBoxShadow="unset"
                        badgeAndTagSmallBackgroundColor="#2563eb"
                        badgeAndTagSmallBorder="unset"
                        statusBackgroundColor="#fff"
                        placeholderColor="#fff"
                        closeIconBackgroundColor="rgba(255, 255, 255, 0.2)"
                      />
                    </div>
                  </div>
                  <div className={styles.horizontalDivider} />
                </div>
              </div>
            </div>
            <div className={styles.lists}>
              <div className={styles.list}>
                <div className={styles.verticalDivider} />
                <div className={styles.inline1}>
                  <div className={styles.staticIcon}>
                    <div className={styles.iconXs}>
                      <img
                        className={styles.homeIcon}
                        alt=""
                        src="/check.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.content1}>
                    <div className={styles.separator} />
                    <div className={styles.div}>/</div>
                    <img className={styles.bellIcon} alt="" src="/bell.svg" />
                    <div className={styles.placeholder1}>UX/UI</div>
                    <div className={styles.badge}>
                      <BadgeAndTagSmall
                        avatar1="/avatar@2x.png"
                        home="/home4.svg"
                        placeholder1="2"
                        chevronRight="/chevronright1.svg"
                        x="/x2.svg"
                        closeIcon={false}
                        placeholder
                        leadingIcon={false}
                        status1={false}
                        trailingIcon={false}
                        avatar={false}
                        badgeAndTagSmallBorderRadius="999px"
                        badgeAndTagSmallBoxShadow="unset"
                        badgeAndTagSmallBackgroundColor="#2563eb"
                        badgeAndTagSmallBorder="unset"
                        statusBackgroundColor="#fff"
                        placeholderColor="#fff"
                        closeIconBackgroundColor="rgba(255, 255, 255, 0.2)"
                      />
                    </div>
                  </div>
                  <div className={styles.horizontalDivider} />
                </div>
              </div>
            </div>
            <div className={styles.lists}>
              <div className={styles.list}>
                <div className={styles.verticalDivider} />
                <div className={styles.inline1}>
                  <div className={styles.staticIcon}>
                    <div className={styles.iconXs}>
                      <img
                        className={styles.homeIcon}
                        alt=""
                        src="/check.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.content1}>
                    <div className={styles.separator} />
                    <div className={styles.div}>/</div>
                    <img className={styles.bellIcon} alt="" src="/bell.svg" />
                    <div className={styles.placeholder1}>QA</div>
                    <div className={styles.badge}>
                      <BadgeAndTagSmall
                        avatar1="/avatar@2x.png"
                        home="/home4.svg"
                        placeholder1="2"
                        chevronRight="/chevronright1.svg"
                        x="/x2.svg"
                        closeIcon={false}
                        placeholder
                        leadingIcon={false}
                        status1={false}
                        trailingIcon={false}
                        avatar={false}
                        badgeAndTagSmallBorderRadius="999px"
                        badgeAndTagSmallBoxShadow="unset"
                        badgeAndTagSmallBackgroundColor="#2563eb"
                        badgeAndTagSmallBorder="unset"
                        statusBackgroundColor="#fff"
                        placeholderColor="#fff"
                        closeIconBackgroundColor="rgba(255, 255, 255, 0.2)"
                      />
                    </div>
                  </div>
                  <div className={styles.horizontalDivider} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.types}>
          <div className={styles.checkedList}>
            <div className={styles.lists}>
              <div className={styles.list}>
                <div className={styles.verticalDivider} />
                <div className={styles.inline1}>
                  <div className={styles.staticIcon}>
                    <div className={styles.iconXs}>
                      <img
                        className={styles.homeIcon}
                        alt=""
                        src="/check.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.content1}>
                    <div className={styles.separator} />
                    <div className={styles.div}>/</div>
                    <img className={styles.bellIcon} alt="" src="/bell.svg" />
                    <div className={styles.placeholder1}>Backend</div>
                    <div className={styles.badge}>
                      <BadgeAndTagSmall
                        avatar1="/avatar@2x.png"
                        home="/home4.svg"
                        placeholder1="2"
                        chevronRight="/chevronright1.svg"
                        x="/x2.svg"
                        closeIcon={false}
                        placeholder
                        leadingIcon={false}
                        status1={false}
                        trailingIcon={false}
                        avatar={false}
                        badgeAndTagSmallBorderRadius="999px"
                        badgeAndTagSmallBoxShadow="unset"
                        badgeAndTagSmallBackgroundColor="#2563eb"
                        badgeAndTagSmallBorder="unset"
                        statusBackgroundColor="#fff"
                        placeholderColor="#fff"
                        closeIconBackgroundColor="rgba(255, 255, 255, 0.2)"
                      />
                    </div>
                  </div>
                  <div className={styles.horizontalDivider} />
                </div>
              </div>
            </div>
            <div className={styles.lists}>
              <div className={styles.list}>
                <div className={styles.verticalDivider} />
                <div className={styles.inline1}>
                  <div className={styles.staticIcon}>
                    <div className={styles.iconXs}>
                      <img
                        className={styles.homeIcon}
                        alt=""
                        src="/check.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.content1}>
                    <div className={styles.separator} />
                    <div className={styles.div}>/</div>
                    <img className={styles.bellIcon} alt="" src="/bell.svg" />
                    <div className={styles.placeholder1}>Frontend</div>
                    <div className={styles.badge}>
                      <BadgeAndTagSmall
                        avatar1="/avatar@2x.png"
                        home="/home4.svg"
                        placeholder1="2"
                        chevronRight="/chevronright1.svg"
                        x="/x2.svg"
                        closeIcon={false}
                        placeholder
                        leadingIcon={false}
                        status1={false}
                        trailingIcon={false}
                        avatar={false}
                        badgeAndTagSmallBorderRadius="999px"
                        badgeAndTagSmallBoxShadow="unset"
                        badgeAndTagSmallBackgroundColor="#2563eb"
                        badgeAndTagSmallBorder="unset"
                        statusBackgroundColor="#fff"
                        placeholderColor="#fff"
                        closeIconBackgroundColor="rgba(255, 255, 255, 0.2)"
                      />
                    </div>
                  </div>
                  <div className={styles.horizontalDivider} />
                </div>
              </div>
            </div>
            <div className={styles.lists}>
              <div className={styles.list}>
                <div className={styles.verticalDivider} />
                <div className={styles.inline1}>
                  <div className={styles.staticIcon}>
                    <div className={styles.iconXs}>
                      <img
                        className={styles.homeIcon}
                        alt=""
                        src="/check.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.content1}>
                    <div className={styles.separator} />
                    <div className={styles.div}>/</div>
                    <img className={styles.bellIcon} alt="" src="/bell.svg" />
                    <div className={styles.placeholder1}>Team Lead</div>
                    <div className={styles.badge}>
                      <BadgeAndTagSmall
                        avatar1="/avatar@2x.png"
                        home="/home4.svg"
                        placeholder1="2"
                        chevronRight="/chevronright1.svg"
                        x="/x2.svg"
                        closeIcon={false}
                        placeholder
                        leadingIcon={false}
                        status1={false}
                        trailingIcon={false}
                        avatar={false}
                        badgeAndTagSmallBorderRadius="999px"
                        badgeAndTagSmallBoxShadow="unset"
                        badgeAndTagSmallBackgroundColor="#2563eb"
                        badgeAndTagSmallBorder="unset"
                        statusBackgroundColor="#fff"
                        placeholderColor="#fff"
                        closeIconBackgroundColor="rgba(255, 255, 255, 0.2)"
                      />
                    </div>
                  </div>
                  <div className={styles.horizontalDivider} />
                </div>
              </div>
            </div>
            <div className={styles.lists}>
              <div className={styles.list}>
                <div className={styles.verticalDivider} />
                <div className={styles.inline1}>
                  <div className={styles.staticIcon}>
                    <div className={styles.iconXs}>
                      <img
                        className={styles.homeIcon}
                        alt=""
                        src="/check.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.content1}>
                    <div className={styles.separator} />
                    <div className={styles.div}>/</div>
                    <img className={styles.bellIcon} alt="" src="/bell.svg" />
                    <div className={styles.placeholder1}>UX/UI</div>
                    <div className={styles.badge}>
                      <BadgeAndTagSmall
                        avatar1="/avatar@2x.png"
                        home="/home4.svg"
                        placeholder1="2"
                        chevronRight="/chevronright1.svg"
                        x="/x2.svg"
                        closeIcon={false}
                        placeholder
                        leadingIcon={false}
                        status1={false}
                        trailingIcon={false}
                        avatar={false}
                        badgeAndTagSmallBorderRadius="999px"
                        badgeAndTagSmallBoxShadow="unset"
                        badgeAndTagSmallBackgroundColor="#2563eb"
                        badgeAndTagSmallBorder="unset"
                        statusBackgroundColor="#fff"
                        placeholderColor="#fff"
                        closeIconBackgroundColor="rgba(255, 255, 255, 0.2)"
                      />
                    </div>
                  </div>
                  <div className={styles.horizontalDivider} />
                </div>
              </div>
            </div>
            <div className={styles.lists}>
              <div className={styles.list}>
                <div className={styles.verticalDivider} />
                <div className={styles.inline1}>
                  <div className={styles.staticIcon}>
                    <div className={styles.iconXs}>
                      <img
                        className={styles.homeIcon}
                        alt=""
                        src="/check.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.content1}>
                    <div className={styles.separator} />
                    <div className={styles.div}>/</div>
                    <img className={styles.bellIcon} alt="" src="/bell.svg" />
                    <div className={styles.placeholder1}>QA</div>
                    <div className={styles.badge}>
                      <BadgeAndTagSmall
                        avatar1="/avatar@2x.png"
                        home="/home4.svg"
                        placeholder1="2"
                        chevronRight="/chevronright1.svg"
                        x="/x2.svg"
                        closeIcon={false}
                        placeholder
                        leadingIcon={false}
                        status1={false}
                        trailingIcon={false}
                        avatar={false}
                        badgeAndTagSmallBorderRadius="999px"
                        badgeAndTagSmallBoxShadow="unset"
                        badgeAndTagSmallBackgroundColor="#2563eb"
                        badgeAndTagSmallBorder="unset"
                        statusBackgroundColor="#fff"
                        placeholderColor="#fff"
                        closeIconBackgroundColor="rgba(255, 255, 255, 0.2)"
                      />
                    </div>
                  </div>
                  <div className={styles.horizontalDivider} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.types}>
          <div className={styles.checkedList}>
            <div className={styles.lists}>
              <div className={styles.list}>
                <div className={styles.verticalDivider} />
                <div className={styles.inline1}>
                  <div className={styles.staticIcon}>
                    <div className={styles.iconXs}>
                      <img
                        className={styles.homeIcon}
                        alt=""
                        src="/check.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.content1}>
                    <div className={styles.separator} />
                    <div className={styles.div}>/</div>
                    <img className={styles.bellIcon} alt="" src="/bell.svg" />
                    <div className={styles.placeholder1}>Backend</div>
                    <div className={styles.badge}>
                      <BadgeAndTagSmall
                        avatar1="/avatar@2x.png"
                        home="/home4.svg"
                        placeholder1="2"
                        chevronRight="/chevronright1.svg"
                        x="/x2.svg"
                        closeIcon={false}
                        placeholder
                        leadingIcon={false}
                        status1={false}
                        trailingIcon={false}
                        avatar={false}
                        badgeAndTagSmallBorderRadius="999px"
                        badgeAndTagSmallBoxShadow="unset"
                        badgeAndTagSmallBackgroundColor="#2563eb"
                        badgeAndTagSmallBorder="unset"
                        statusBackgroundColor="#fff"
                        placeholderColor="#fff"
                        closeIconBackgroundColor="rgba(255, 255, 255, 0.2)"
                      />
                    </div>
                  </div>
                  <div className={styles.horizontalDivider} />
                </div>
              </div>
            </div>
            <div className={styles.lists}>
              <div className={styles.list}>
                <div className={styles.verticalDivider} />
                <div className={styles.inline1}>
                  <div className={styles.staticIcon}>
                    <div className={styles.iconXs}>
                      <img
                        className={styles.homeIcon}
                        alt=""
                        src="/check.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.content1}>
                    <div className={styles.separator} />
                    <div className={styles.div}>/</div>
                    <img className={styles.bellIcon} alt="" src="/bell.svg" />
                    <div className={styles.placeholder1}>Frontend</div>
                    <div className={styles.badge}>
                      <BadgeAndTagSmall
                        avatar1="/avatar@2x.png"
                        home="/home4.svg"
                        placeholder1="2"
                        chevronRight="/chevronright1.svg"
                        x="/x2.svg"
                        closeIcon={false}
                        placeholder
                        leadingIcon={false}
                        status1={false}
                        trailingIcon={false}
                        avatar={false}
                        badgeAndTagSmallBorderRadius="999px"
                        badgeAndTagSmallBoxShadow="unset"
                        badgeAndTagSmallBackgroundColor="#2563eb"
                        badgeAndTagSmallBorder="unset"
                        statusBackgroundColor="#fff"
                        placeholderColor="#fff"
                        closeIconBackgroundColor="rgba(255, 255, 255, 0.2)"
                      />
                    </div>
                  </div>
                  <div className={styles.horizontalDivider} />
                </div>
              </div>
            </div>
            <div className={styles.lists}>
              <div className={styles.list}>
                <div className={styles.verticalDivider} />
                <div className={styles.inline1}>
                  <div className={styles.staticIcon}>
                    <div className={styles.iconXs}>
                      <img
                        className={styles.homeIcon}
                        alt=""
                        src="/check.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.content1}>
                    <div className={styles.separator} />
                    <div className={styles.div}>/</div>
                    <img className={styles.bellIcon} alt="" src="/bell.svg" />
                    <div className={styles.placeholder1}>Team Lead</div>
                    <div className={styles.badge}>
                      <BadgeAndTagSmall
                        avatar1="/avatar@2x.png"
                        home="/home4.svg"
                        placeholder1="2"
                        chevronRight="/chevronright1.svg"
                        x="/x2.svg"
                        closeIcon={false}
                        placeholder
                        leadingIcon={false}
                        status1={false}
                        trailingIcon={false}
                        avatar={false}
                        badgeAndTagSmallBorderRadius="999px"
                        badgeAndTagSmallBoxShadow="unset"
                        badgeAndTagSmallBackgroundColor="#2563eb"
                        badgeAndTagSmallBorder="unset"
                        statusBackgroundColor="#fff"
                        placeholderColor="#fff"
                        closeIconBackgroundColor="rgba(255, 255, 255, 0.2)"
                      />
                    </div>
                  </div>
                  <div className={styles.horizontalDivider} />
                </div>
              </div>
            </div>
            <div className={styles.lists}>
              <div className={styles.list}>
                <div className={styles.verticalDivider} />
                <div className={styles.inline1}>
                  <div className={styles.staticIcon}>
                    <div className={styles.iconXs}>
                      <img
                        className={styles.homeIcon}
                        alt=""
                        src="/check.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.content1}>
                    <div className={styles.separator} />
                    <div className={styles.div}>/</div>
                    <img className={styles.bellIcon} alt="" src="/bell.svg" />
                    <div className={styles.placeholder1}>UX/UI</div>
                    <div className={styles.badge}>
                      <BadgeAndTagSmall
                        avatar1="/avatar@2x.png"
                        home="/home4.svg"
                        placeholder1="2"
                        chevronRight="/chevronright1.svg"
                        x="/x2.svg"
                        closeIcon={false}
                        placeholder
                        leadingIcon={false}
                        status1={false}
                        trailingIcon={false}
                        avatar={false}
                        badgeAndTagSmallBorderRadius="999px"
                        badgeAndTagSmallBoxShadow="unset"
                        badgeAndTagSmallBackgroundColor="#2563eb"
                        badgeAndTagSmallBorder="unset"
                        statusBackgroundColor="#fff"
                        placeholderColor="#fff"
                        closeIconBackgroundColor="rgba(255, 255, 255, 0.2)"
                      />
                    </div>
                  </div>
                  <div className={styles.horizontalDivider} />
                </div>
              </div>
            </div>
            <div className={styles.lists}>
              <div className={styles.list}>
                <div className={styles.verticalDivider} />
                <div className={styles.inline1}>
                  <div className={styles.staticIcon}>
                    <div className={styles.iconXs}>
                      <img
                        className={styles.homeIcon}
                        alt=""
                        src="/check.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.content1}>
                    <div className={styles.separator} />
                    <div className={styles.div}>/</div>
                    <img className={styles.bellIcon} alt="" src="/bell.svg" />
                    <div className={styles.placeholder1}>QA</div>
                    <div className={styles.badge}>
                      <BadgeAndTagSmall
                        avatar1="/avatar@2x.png"
                        home="/home4.svg"
                        placeholder1="2"
                        chevronRight="/chevronright1.svg"
                        x="/x2.svg"
                        closeIcon={false}
                        placeholder
                        leadingIcon={false}
                        status1={false}
                        trailingIcon={false}
                        avatar={false}
                        badgeAndTagSmallBorderRadius="999px"
                        badgeAndTagSmallBoxShadow="unset"
                        badgeAndTagSmallBackgroundColor="#2563eb"
                        badgeAndTagSmallBorder="unset"
                        statusBackgroundColor="#fff"
                        placeholderColor="#fff"
                        closeIconBackgroundColor="rgba(255, 255, 255, 0.2)"
                      />
                    </div>
                  </div>
                  <div className={styles.horizontalDivider} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stateoff;
