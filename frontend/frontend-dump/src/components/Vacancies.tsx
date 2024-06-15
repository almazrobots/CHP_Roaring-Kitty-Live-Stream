import { FunctionComponent } from "react";
import CircleXs from "./CircleXs";
import StyleWhiteColorDarkState from "./StyleWhiteColorDarkState";
import StyleLinkColorBlueState from "./StyleLinkColorBlueState";
import styles from "./Vacancies.module.css";

export type VacanciesType = {
  className?: string;
};

const Vacancies: FunctionComponent<VacanciesType> = ({ className = "" }) => {
  return (
    <div className={[styles.vacancies, className].join(" ")}>
      <b className={styles.b}>Вакансии</b>
      <div className={styles.list}>
        <div className={styles.cardsinf}>
          <div className={styles.body}>
            <div className={styles.inf}>
              <div className={styles.head}>
                <div className={styles.title}>
                  <b className={styles.middleUxui}>Middle UX/UI дизайнер</b>
                  <div className={styles.projectSerafim}>Project Serafim</div>
                </div>
              </div>
              <b className={styles.b1}>60 000 - 80 000 ₽</b>
              <div className={styles.skills}>
                <div className={styles.listTags}>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>UX</div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>UI</div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>Figma</div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>Adobe Photoshop</div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>
                        Adobe After Effect
                      </div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CircleXs title />
            <StyleWhiteColorDarkState
              avatar="/avatar11.svg"
              home="/bookmarkplus.svg"
              placeholder="Button-sm"
              avatar1="/avatar1@2x.png"
              home1="/home2.svg"
              chevronRight="/chevronright.svg"
              chevronRight1="/chevronright5.svg"
              avatar2="/avatar11.svg"
              avatarIcon={false}
              homeIcon
              showPlaceholder={false}
              buttonSmallBoxShadow="unset"
              buttonSmallBackgroundColor="#dbeafe"
              buttonSmallBorder="unset"
              dividerBackgroundColor="#93c5fd"
              placeholderColor="#1e40af"
              placeholderWidth="78px"
              dividerBackgroundColor1="#93c5fd"
              leadingAvatar={false}
              leadingIcon
              leadingDivider={false}
              placeholder1={false}
              badge={false}
              trailingDivider={false}
              trailingIcon={false}
              trailingAvatar={false}
            />
          </div>
          <div className={styles.body}>
            <StyleLinkColorBlueState
              avatar="/avatar11.svg"
              home="/home1.svg"
              placeholder="Откликнуться"
              avatar1="/avatar5@2x.png"
              home1="/home2.svg"
              chevronRight="/chevronright.svg"
              chevronRight1="/chevronright3.svg"
              avatar2="/avatar11.svg"
              styleLinkColorBlueStateAlignSelf="unset"
              styleLinkColorBlueStateFlex="1"
              buttonFlex="1"
              buttonBackgroundColor="#2563eb"
              dividerBackgroundColor="#fff"
              placeholderColor="#fff"
              dividerBackgroundColor1="#fff"
              leadingAvatar={false}
              leadingDivider={false}
              leadingIcon={false}
              placeholder
              badge={false}
              trailingDivider={false}
              trailingIcon={false}
              trailingAvatar={false}
            />
            <StyleLinkColorBlueState
              avatar="/avatar11.svg"
              home="/home12.svg"
              placeholder="Подробнее"
              avatar1="/avatar5@2x.png"
              home1="/home2.svg"
              chevronRight="/chevronright.svg"
              chevronRight1="/chevronright4.svg"
              avatar2="/avatar11.svg"
              styleLinkColorBlueStateAlignSelf="unset"
              styleLinkColorBlueStateFlex="1"
              buttonFlex="1"
              buttonBackgroundColor="unset"
              dividerBackgroundColor="#93c5fd"
              placeholderColor="#2563eb"
              dividerBackgroundColor1="#93c5fd"
              leadingAvatar={false}
              leadingDivider={false}
              leadingIcon={false}
              placeholder
              badge={false}
              trailingDivider={false}
              trailingIcon={false}
              trailingAvatar={false}
            />
          </div>
        </div>
        <div className={styles.cardsinf}>
          <div className={styles.body}>
            <div className={styles.inf}>
              <div className={styles.head}>
                <div className={styles.title}>
                  <b className={styles.middleUxui}>Middle UX/UI дизайнер</b>
                  <div className={styles.projectSerafim}>Project Serafim</div>
                </div>
              </div>
              <b className={styles.b1}>60 000 - 80 000 ₽</b>
              <div className={styles.skills}>
                <div className={styles.listTags}>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>UX</div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>UI</div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>Figma</div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>Adobe Photoshop</div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>
                        Adobe After Effect
                      </div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CircleXs title />
            <StyleWhiteColorDarkState
              avatar="/avatar11.svg"
              home="/bookmarkplus.svg"
              placeholder="Button-sm"
              avatar1="/avatar1@2x.png"
              home1="/home2.svg"
              chevronRight="/chevronright.svg"
              chevronRight1="/chevronright5.svg"
              avatar2="/avatar11.svg"
              avatarIcon={false}
              homeIcon
              showPlaceholder={false}
              buttonSmallBoxShadow="unset"
              buttonSmallBackgroundColor="#dbeafe"
              buttonSmallBorder="unset"
              dividerBackgroundColor="#93c5fd"
              placeholderColor="#1e40af"
              placeholderWidth="78px"
              dividerBackgroundColor1="#93c5fd"
              leadingAvatar={false}
              leadingIcon
              leadingDivider={false}
              placeholder1={false}
              badge={false}
              trailingDivider={false}
              trailingIcon={false}
              trailingAvatar={false}
            />
          </div>
          <div className={styles.body}>
            <StyleLinkColorBlueState
              avatar="/avatar11.svg"
              home="/home1.svg"
              placeholder="Откликнуться"
              avatar1="/avatar5@2x.png"
              home1="/home2.svg"
              chevronRight="/chevronright.svg"
              chevronRight1="/chevronright3.svg"
              avatar2="/avatar11.svg"
              styleLinkColorBlueStateAlignSelf="unset"
              styleLinkColorBlueStateFlex="1"
              buttonFlex="1"
              buttonBackgroundColor="#2563eb"
              dividerBackgroundColor="#fff"
              placeholderColor="#fff"
              dividerBackgroundColor1="#fff"
              leadingAvatar={false}
              leadingDivider={false}
              leadingIcon={false}
              placeholder
              badge={false}
              trailingDivider={false}
              trailingIcon={false}
              trailingAvatar={false}
            />
            <StyleLinkColorBlueState
              avatar="/avatar11.svg"
              home="/home12.svg"
              placeholder="Подробнее"
              avatar1="/avatar5@2x.png"
              home1="/home2.svg"
              chevronRight="/chevronright.svg"
              chevronRight1="/chevronright4.svg"
              avatar2="/avatar11.svg"
              styleLinkColorBlueStateAlignSelf="unset"
              styleLinkColorBlueStateFlex="1"
              buttonFlex="1"
              buttonBackgroundColor="unset"
              dividerBackgroundColor="#93c5fd"
              placeholderColor="#2563eb"
              dividerBackgroundColor1="#93c5fd"
              leadingAvatar={false}
              leadingDivider={false}
              leadingIcon={false}
              placeholder
              badge={false}
              trailingDivider={false}
              trailingIcon={false}
              trailingAvatar={false}
            />
          </div>
        </div>
      </div>
      <div className={styles.list}>
        <div className={styles.cardsinf}>
          <div className={styles.body}>
            <div className={styles.inf}>
              <div className={styles.head}>
                <div className={styles.title}>
                  <b className={styles.middleUxui}>Middle UX/UI дизайнер</b>
                  <div className={styles.projectSerafim}>Project Serafim</div>
                </div>
              </div>
              <b className={styles.b1}>60 000 - 80 000 ₽</b>
              <div className={styles.skills}>
                <div className={styles.listTags}>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>UX</div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>UI</div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>Figma</div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>Adobe Photoshop</div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>
                        Adobe After Effect
                      </div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CircleXs title />
            <StyleWhiteColorDarkState
              avatar="/avatar11.svg"
              home="/bookmarkplus.svg"
              placeholder="Button-sm"
              avatar1="/avatar1@2x.png"
              home1="/home2.svg"
              chevronRight="/chevronright.svg"
              chevronRight1="/chevronright5.svg"
              avatar2="/avatar11.svg"
              avatarIcon={false}
              homeIcon
              showPlaceholder={false}
              buttonSmallBoxShadow="unset"
              buttonSmallBackgroundColor="#dbeafe"
              buttonSmallBorder="unset"
              dividerBackgroundColor="#93c5fd"
              placeholderColor="#1e40af"
              placeholderWidth="78px"
              dividerBackgroundColor1="#93c5fd"
              leadingAvatar={false}
              leadingIcon
              leadingDivider={false}
              placeholder1={false}
              badge={false}
              trailingDivider={false}
              trailingIcon={false}
              trailingAvatar={false}
            />
          </div>
          <div className={styles.body}>
            <StyleLinkColorBlueState
              avatar="/avatar11.svg"
              home="/home1.svg"
              placeholder="Откликнуться"
              avatar1="/avatar5@2x.png"
              home1="/home2.svg"
              chevronRight="/chevronright.svg"
              chevronRight1="/chevronright3.svg"
              avatar2="/avatar11.svg"
              styleLinkColorBlueStateAlignSelf="unset"
              styleLinkColorBlueStateFlex="1"
              buttonFlex="1"
              buttonBackgroundColor="#2563eb"
              dividerBackgroundColor="#fff"
              placeholderColor="#fff"
              dividerBackgroundColor1="#fff"
              leadingAvatar={false}
              leadingDivider={false}
              leadingIcon={false}
              placeholder
              badge={false}
              trailingDivider={false}
              trailingIcon={false}
              trailingAvatar={false}
            />
            <StyleLinkColorBlueState
              avatar="/avatar11.svg"
              home="/home12.svg"
              placeholder="Подробнее"
              avatar1="/avatar5@2x.png"
              home1="/home2.svg"
              chevronRight="/chevronright.svg"
              chevronRight1="/chevronright4.svg"
              avatar2="/avatar11.svg"
              styleLinkColorBlueStateAlignSelf="unset"
              styleLinkColorBlueStateFlex="1"
              buttonFlex="1"
              buttonBackgroundColor="unset"
              dividerBackgroundColor="#93c5fd"
              placeholderColor="#2563eb"
              dividerBackgroundColor1="#93c5fd"
              leadingAvatar={false}
              leadingDivider={false}
              leadingIcon={false}
              placeholder
              badge={false}
              trailingDivider={false}
              trailingIcon={false}
              trailingAvatar={false}
            />
          </div>
        </div>
        <div className={styles.cardsinf}>
          <div className={styles.body}>
            <div className={styles.inf}>
              <div className={styles.head}>
                <div className={styles.title}>
                  <b className={styles.middleUxui}>Middle UX/UI дизайнер</b>
                  <div className={styles.projectSerafim}>Project Serafim</div>
                </div>
              </div>
              <b className={styles.b1}>60 000 - 80 000 ₽</b>
              <div className={styles.skills}>
                <div className={styles.listTags}>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>UX</div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>UI</div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>Figma</div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>Adobe Photoshop</div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>
                        Adobe After Effect
                      </div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CircleXs title />
            <StyleWhiteColorDarkState
              avatar="/avatar11.svg"
              home="/bookmarkplus.svg"
              placeholder="Button-sm"
              avatar1="/avatar1@2x.png"
              home1="/home2.svg"
              chevronRight="/chevronright.svg"
              chevronRight1="/chevronright5.svg"
              avatar2="/avatar11.svg"
              avatarIcon={false}
              homeIcon
              showPlaceholder={false}
              buttonSmallBoxShadow="unset"
              buttonSmallBackgroundColor="#dbeafe"
              buttonSmallBorder="unset"
              dividerBackgroundColor="#93c5fd"
              placeholderColor="#1e40af"
              placeholderWidth="78px"
              dividerBackgroundColor1="#93c5fd"
              leadingAvatar={false}
              leadingIcon
              leadingDivider={false}
              placeholder1={false}
              badge={false}
              trailingDivider={false}
              trailingIcon={false}
              trailingAvatar={false}
            />
          </div>
          <div className={styles.body}>
            <StyleLinkColorBlueState
              avatar="/avatar11.svg"
              home="/home1.svg"
              placeholder="Откликнуться"
              avatar1="/avatar5@2x.png"
              home1="/home2.svg"
              chevronRight="/chevronright.svg"
              chevronRight1="/chevronright3.svg"
              avatar2="/avatar11.svg"
              styleLinkColorBlueStateAlignSelf="unset"
              styleLinkColorBlueStateFlex="1"
              buttonFlex="1"
              buttonBackgroundColor="#2563eb"
              dividerBackgroundColor="#fff"
              placeholderColor="#fff"
              dividerBackgroundColor1="#fff"
              leadingAvatar={false}
              leadingDivider={false}
              leadingIcon={false}
              placeholder
              badge={false}
              trailingDivider={false}
              trailingIcon={false}
              trailingAvatar={false}
            />
            <StyleLinkColorBlueState
              avatar="/avatar11.svg"
              home="/home12.svg"
              placeholder="Подробнее"
              avatar1="/avatar5@2x.png"
              home1="/home2.svg"
              chevronRight="/chevronright.svg"
              chevronRight1="/chevronright4.svg"
              avatar2="/avatar11.svg"
              styleLinkColorBlueStateAlignSelf="unset"
              styleLinkColorBlueStateFlex="1"
              buttonFlex="1"
              buttonBackgroundColor="unset"
              dividerBackgroundColor="#93c5fd"
              placeholderColor="#2563eb"
              dividerBackgroundColor1="#93c5fd"
              leadingAvatar={false}
              leadingDivider={false}
              leadingIcon={false}
              placeholder
              badge={false}
              trailingDivider={false}
              trailingIcon={false}
              trailingAvatar={false}
            />
          </div>
        </div>
      </div>
      <div className={styles.list}>
        <div className={styles.cardsinf}>
          <div className={styles.body}>
            <div className={styles.inf}>
              <div className={styles.head}>
                <div className={styles.title}>
                  <b className={styles.middleUxui}>Middle UX/UI дизайнер</b>
                  <div className={styles.projectSerafim}>Project Serafim</div>
                </div>
              </div>
              <b className={styles.b1}>60 000 - 80 000 ₽</b>
              <div className={styles.skills}>
                <div className={styles.listTags}>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>UX</div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>UI</div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>Figma</div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>Adobe Photoshop</div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>
                        Adobe After Effect
                      </div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CircleXs title />
            <StyleWhiteColorDarkState
              avatar="/avatar11.svg"
              home="/bookmarkplus.svg"
              placeholder="Button-sm"
              avatar1="/avatar1@2x.png"
              home1="/home2.svg"
              chevronRight="/chevronright.svg"
              chevronRight1="/chevronright5.svg"
              avatar2="/avatar11.svg"
              avatarIcon={false}
              homeIcon
              showPlaceholder={false}
              buttonSmallBoxShadow="unset"
              buttonSmallBackgroundColor="#dbeafe"
              buttonSmallBorder="unset"
              dividerBackgroundColor="#93c5fd"
              placeholderColor="#1e40af"
              placeholderWidth="78px"
              dividerBackgroundColor1="#93c5fd"
              leadingAvatar={false}
              leadingIcon
              leadingDivider={false}
              placeholder1={false}
              badge={false}
              trailingDivider={false}
              trailingIcon={false}
              trailingAvatar={false}
            />
          </div>
          <div className={styles.body}>
            <StyleLinkColorBlueState
              avatar="/avatar11.svg"
              home="/home1.svg"
              placeholder="Откликнуться"
              avatar1="/avatar5@2x.png"
              home1="/home2.svg"
              chevronRight="/chevronright.svg"
              chevronRight1="/chevronright3.svg"
              avatar2="/avatar11.svg"
              styleLinkColorBlueStateAlignSelf="unset"
              styleLinkColorBlueStateFlex="1"
              buttonFlex="1"
              buttonBackgroundColor="#2563eb"
              dividerBackgroundColor="#fff"
              placeholderColor="#fff"
              dividerBackgroundColor1="#fff"
              leadingAvatar={false}
              leadingDivider={false}
              leadingIcon={false}
              placeholder
              badge={false}
              trailingDivider={false}
              trailingIcon={false}
              trailingAvatar={false}
            />
            <StyleLinkColorBlueState
              avatar="/avatar11.svg"
              home="/home12.svg"
              placeholder="Подробнее"
              avatar1="/avatar5@2x.png"
              home1="/home2.svg"
              chevronRight="/chevronright.svg"
              chevronRight1="/chevronright4.svg"
              avatar2="/avatar11.svg"
              styleLinkColorBlueStateAlignSelf="unset"
              styleLinkColorBlueStateFlex="1"
              buttonFlex="1"
              buttonBackgroundColor="unset"
              dividerBackgroundColor="#93c5fd"
              placeholderColor="#2563eb"
              dividerBackgroundColor1="#93c5fd"
              leadingAvatar={false}
              leadingDivider={false}
              leadingIcon={false}
              placeholder
              badge={false}
              trailingDivider={false}
              trailingIcon={false}
              trailingAvatar={false}
            />
          </div>
        </div>
        <div className={styles.cardsinf}>
          <div className={styles.body}>
            <div className={styles.inf}>
              <div className={styles.head}>
                <div className={styles.title}>
                  <b className={styles.middleUxui}>Middle UX/UI дизайнер</b>
                  <div className={styles.projectSerafim}>Project Serafim</div>
                </div>
              </div>
              <b className={styles.b1}>60 000 - 80 000 ₽</b>
              <div className={styles.skills}>
                <div className={styles.listTags}>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>UX</div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>UI</div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>Figma</div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>Adobe Photoshop</div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                  <div className={styles.badgeAndTag}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img className={styles.homeIcon} alt="" src="/home9.svg" />
                    <div className={styles.placeholder}>
                      <div className={styles.status} />
                      <div className={styles.placeholder1}>
                        Adobe After Effect
                      </div>
                    </div>
                    <img
                      className={styles.homeIcon}
                      alt=""
                      src="/chevronright9.svg"
                    />
                    <div className={styles.closeIcon}>
                      <img className={styles.xIcon} alt="" src="/x4.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CircleXs title />
            <StyleWhiteColorDarkState
              avatar="/avatar11.svg"
              home="/bookmarkplus.svg"
              placeholder="Button-sm"
              avatar1="/avatar1@2x.png"
              home1="/home2.svg"
              chevronRight="/chevronright.svg"
              chevronRight1="/chevronright5.svg"
              avatar2="/avatar11.svg"
              avatarIcon={false}
              homeIcon
              showPlaceholder={false}
              buttonSmallBoxShadow="unset"
              buttonSmallBackgroundColor="#dbeafe"
              buttonSmallBorder="unset"
              dividerBackgroundColor="#93c5fd"
              placeholderColor="#1e40af"
              placeholderWidth="78px"
              dividerBackgroundColor1="#93c5fd"
              leadingAvatar={false}
              leadingIcon
              leadingDivider={false}
              placeholder1={false}
              badge={false}
              trailingDivider={false}
              trailingIcon={false}
              trailingAvatar={false}
            />
          </div>
          <div className={styles.body}>
            <StyleLinkColorBlueState
              avatar="/avatar11.svg"
              home="/home1.svg"
              placeholder="Откликнуться"
              avatar1="/avatar5@2x.png"
              home1="/home2.svg"
              chevronRight="/chevronright.svg"
              chevronRight1="/chevronright3.svg"
              avatar2="/avatar11.svg"
              styleLinkColorBlueStateAlignSelf="unset"
              styleLinkColorBlueStateFlex="1"
              buttonFlex="1"
              buttonBackgroundColor="#2563eb"
              dividerBackgroundColor="#fff"
              placeholderColor="#fff"
              dividerBackgroundColor1="#fff"
              leadingAvatar={false}
              leadingDivider={false}
              leadingIcon={false}
              placeholder
              badge={false}
              trailingDivider={false}
              trailingIcon={false}
              trailingAvatar={false}
            />
            <StyleLinkColorBlueState
              avatar="/avatar11.svg"
              home="/home12.svg"
              placeholder="Подробнее"
              avatar1="/avatar5@2x.png"
              home1="/home2.svg"
              chevronRight="/chevronright.svg"
              chevronRight1="/chevronright4.svg"
              avatar2="/avatar11.svg"
              styleLinkColorBlueStateAlignSelf="unset"
              styleLinkColorBlueStateFlex="1"
              buttonFlex="1"
              buttonBackgroundColor="unset"
              dividerBackgroundColor="#93c5fd"
              placeholderColor="#2563eb"
              dividerBackgroundColor1="#93c5fd"
              leadingAvatar={false}
              leadingDivider={false}
              leadingIcon={false}
              placeholder
              badge={false}
              trailingDivider={false}
              trailingIcon={false}
              trailingAvatar={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
