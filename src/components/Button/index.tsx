import React, { useMemo } from "react";
import cx from "classnames";

enum Type {
  CONTAINED = 'contained',
};

enum Size {
  NORMAL = 'normal'
}

const { CONTAINED } = Type;
const { NORMAL } = Size

type ButtonProps = {
  type?: Type,
  size?: Size,
  title?: string | number,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ type = CONTAINED, size = NORMAL, title, onClick }: ButtonProps) => {
  const ButtonTypeStyle = useMemo(() => {
    return {
      [CONTAINED]: "p-2 border-solid border-[1px]",
    }
  }, []);

  const ButtonSizeStyle = useMemo(() => {
    return {
      [NORMAL]: "text-sm",
    }
  }, []);

  const sizeStyle = ButtonSizeStyle[size];
  const typeStyle = ButtonTypeStyle[type];

  return (
    <button className={cx(sizeStyle, typeStyle)} onClick={onClick}>
      {title}
    </button>
  );
};

Button.Size = Size;
Button.Type = Type;
export default Button;
