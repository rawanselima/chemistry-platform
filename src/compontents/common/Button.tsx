interface ButtonProps {
  children: React.ReactNode;
  style: "solid" | "outline";
  size: "small" | "medium" | "large";
}

type ColorStyles = {
  solid: string;
  outline: string;
};

type SizeStyle = {
  small: string;
  medium: string;
  large: string;
};
const Button = ({ children, style, size }: ButtonProps) => {
  const colors: ColorStyles = {
    solid: "bg-purple hover:bg-dark-purple text-white",
    outline:
      "border-1 border-purple text-purple hover:bg-purple hover:text-white",
  };

  const padding: SizeStyle = {
    small: "py-1 px-7 text-sm",
    medium: "py-2 px-5",
    large: "py-3 px-7",
  };
  return (
    <button
      className={`flex items-center gap-1 ${padding[size]} rounded-lg cursor-pointer transition-all duration-300 ${colors[style]} `}
    >
      {children}
    </button>
  );
};

export default Button;
