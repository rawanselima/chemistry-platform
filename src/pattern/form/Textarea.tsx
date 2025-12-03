interface TextareaProps {
  name: string;
  placeholder?: string;
  style?: string;
  defaultValue?: string;
}

const Textarea = ({
  name,
  placeholder,
  style,
  defaultValue,
}: TextareaProps) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className={`${style} m-2 bg-light-purple/50 px-5 py-2 rounded-lg text-dark-purple focus:border-2 focus:border-purple placeholder:text-dark-purple placeholder:text-sm outline-0`}
      defaultValue={defaultValue}
    />
  );
};

export default Textarea;
