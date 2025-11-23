interface inputProps {
  name: string;
  type: string;
  placeholder?: string;
  style?: string;
  checked?: boolean;
}

const Input = ({ name, type, placeholder, style, checked }: inputProps) => {
  return (
    <input
      className={`${style} m-2 bg-light-purple/50 px-5 py-2 rounded-lg text-dark-purple focus:border-2 focus:border-purple placeholder:text-dark-purple outline-0`}
      type={type}
      name={name}
      placeholder={placeholder}
      checked={checked}
    />
  );
};

export default Input;
