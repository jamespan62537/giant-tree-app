import cx from "classnames";

enum DirectionEnum {
  ROW = 'row'
}

const { ROW } = DirectionEnum

type ButtonGroupProps = {
  prefix: string,
  direction?: DirectionEnum,
  children: React.ReactNode
}

const ButtonGroupRowStyle = {
  [ROW]: "flex items-center",
};

const ButtonGroup = ({ prefix = '', direction = ROW, children }: ButtonGroupProps) => {
  const directionStyle = ButtonGroupRowStyle[direction];

  return (
    <div className={cx(directionStyle)}>
      {prefix}: {children}
    </div>
  );
};

ButtonGroup.Direction = DirectionEnum;
export default ButtonGroup;
