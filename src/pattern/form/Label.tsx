const Label = ({
  label,
  style,
  htmlFor,
}: {
  label: string;
  style?: string;
  htmlFor: string;
}) => {
  return (
    <label className={style} htmlFor={htmlFor}>
      {label}
    </label>
  );
};

export default Label;
