import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Pagination from "./Pagination";
import styles from "./TypeBaseShapeNone.module.css";

export type TypeBaseShapeNoneType = {
  className?: string;
  chevronLeft?: string;
  chevronRight?: string;
  chevronLeftIcon?: boolean;
  showDiv?: boolean;
  showPrevious?: boolean;
  showNext?: boolean;
  divVisible?: boolean;
  chevronRightIcon?: boolean;

  /** Style props */
  divWidth?: CSSProperties["width"];
  previousWidth?: CSSProperties["width"];
  nextWidth?: CSSProperties["width"];
  divWidth1?: CSSProperties["width"];
};

const TypeBaseShapeNone: FunctionComponent<TypeBaseShapeNoneType> = ({
  className = "",
  chevronLeft,
  chevronRight,
  chevronLeftIcon,
  showDiv,
  showPrevious,
  showNext,
  divVisible,
  chevronRightIcon,
  divWidth,
  previousWidth,
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
    <div className={[styles.typebaseShapenone, className].join(" ")}>
      <Pagination
        chevronLeft="/avatar11@2x.png"
        chevronRight="/avatar11@2x.png"
        divider={false}
        trailingLabel
        trailingIcon={false}
        leadingLabel
        leadingCharacter
        trailingCharacter
        leadingIcon={false}
        showDivider={false}
        dividerVisible={false}
        dividerVisible1={false}
        dividerVisible2={false}
        dividerVisible3={false}
        divWidth="unset"
        previousWidth="unset"
        linkBackgroundColor="#e5e7eb"
        nextWidth="unset"
        divWidth1="unset"
      />
    </div>
  );
};

export default TypeBaseShapeNone;
