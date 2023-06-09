import cx from "classnames";

const direction = {
  ROW: "row",
};

const { ROW } = direction;

const ButtonGroupRowStyle = {
  [ROW]: "flex",
};

const ButtonGroup = ({ direction = ROW, children }) => {
  const directionStyle = ButtonGroupRowStyle[direction];

  return <div className={cx(directionStyle)}>{children}</div>;
};

ButtonGroup.ButtonGroupRowStyle = ButtonGroupRowStyle;
export default ButtonGroup;
