import cx from "classnames";

const direction = {
  ROW: "row",
};

const { ROW } = direction;

const ButtonGroupRowStyle = {
  [ROW]: "flex items-center",
};

const ButtonGroup = ({ prefix, direction = ROW, children }) => {
  const directionStyle = ButtonGroupRowStyle[direction];

  return (
    <div className={cx(directionStyle)}>
      {prefix}: {children}
    </div>
  );
};

ButtonGroup.ButtonGroupRowStyle = ButtonGroupRowStyle;
export default ButtonGroup;
