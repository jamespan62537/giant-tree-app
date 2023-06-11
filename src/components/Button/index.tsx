import { useMemo } from "react";
import cx from "classnames";

enum TypeEnum {
  CONTAINED = 'contained',
};

enum SizeEnum {
  NORMAL = 'normal'
}

const { CONTAINED } = TypeEnum;
const { NORMAL } = SizeEnum

type ButtonProps = {
  type?: TypeEnum,
  size?: SizeEnum,
  title?: string | number,
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ type = CONTAINED, size = NORMAL, title = '', onClick }: ButtonProps) => {
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

Button.Size = SizeEnum;
Button.Type = TypeEnum;
export default Button;
