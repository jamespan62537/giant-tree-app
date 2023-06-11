type FormProps = {
  children: React.ReactNode,
};

const Form = ({ children }: FormProps) => {
  return <div className="m-auto mb-5 flex w-full max-w-[750px] flex-col items-center border-[1px] border-solid p-5">{children}</div>;
};

export default Form;
