import { FunctionComponent, useMemo, type CSSProperties } from "react";
import LinkSmall from "./LinkSmall";
import styles from "./TypeBaseColorBlueStateD.module.css";

export type TypeBaseColorBlueStateDType = {
  className?: string;
  chevronLeft?: string;
  linkSm?: string;
  chevronRight?: string;

  /** Style props */
  linkSmColor?: CSSProperties["color"];
};

const TypeBaseColorBlueStateD: FunctionComponent<
  TypeBaseColorBlueStateDType
> = ({ className = "", chevronLeft, linkSm, chevronRight, linkSmColor }) => {
  const linkSmStyle: CSSProperties = useMemo(() => {
    return {
      color: linkSmColor,
    };
  }, [linkSmColor]);

  return (
    <div className={[styles.typebaseColorblueStated, className].join(" ")}>
      {/*<LinkSmall*/}
      {/*  chevronLeft="/avatar12@2x.png"*/}
      {/*  linkSm="Link-sm"*/}
      {/*  chevronRight="/avatar12@2x.png"*/}
      {/*  borderBottom={false}*/}
      {/*  trailingIcon={false}*/}
      {/*  linkPlaceholder*/}
      {/*  leadingIcon={false}*/}
      {/*  linkSmColor="#2563eb"*/}
      {/*  borderBottomAlignSelf="unset"*/}
      {/*  borderBottomBackgroundColor="#2563eb"*/}
      {/*  borderBottomWidth="55px"*/}
      {/*/>*/}
    </div>
  );
};

export default TypeBaseColorBlueStateD;
