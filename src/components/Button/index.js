import cx from "classnames";

const ButtonType = {
  CONTAINED: "contained",
};

const ButtonSize = {
  NORMAL: "normal",
};

const { CONTAINED } = ButtonType;
const { NORMAL } = ButtonSize;

const ButtonTypeStyle = {
  [CONTAINED]: "p-2 border-solid border-[1px]",
};

const ButtonSizeStyle = {
  [NORMAL]: "text-sm",
};

const Button = ({ type = CONTAINED, size = NORMAL, title, onClick }) => {
  const sizeStyle = ButtonSizeStyle[size];
  const typeStyle = ButtonTypeStyle[type];

  return (
    <button className={cx("", sizeStyle, typeStyle)} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
