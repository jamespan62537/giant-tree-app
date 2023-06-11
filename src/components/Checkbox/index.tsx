type CheckboxProps = {
  checked: boolean,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
};

const Checkbox = ({ checked = false, onChange }: CheckboxProps) => <input type="checkbox" checked={checked} onChange={onChange} />;

export default Checkbox;
