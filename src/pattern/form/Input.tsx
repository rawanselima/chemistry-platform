interface inputProps {
  name: string;
  type: string;
  placeholder?: string;
  style?: string;
}

const Input = ({ name, type, placeholder, style  }: inputProps) => {
  return (
    <input
      className={`${style} m-2 bg-light-purple/50 px-5 py-2 rounded-lg text-dark-purple focus:border-2 focus:border-purple placeholder:text-dark-purple outline-0`}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;
