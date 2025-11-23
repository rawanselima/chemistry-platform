interface TextareaProps {
  name: string;
  placeholder?: string;
  style?: string;
}

const Textarea = ({ name, placeholder, style }: TextareaProps) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className={`${style} m-2 bg-light-purple/50 px-5 py-2 rounded-lg text-dark-purple focus:border-2 focus:border-purple placeholder:text-dark-purple outline-0`}
    />
  );
};

export default Textarea;
