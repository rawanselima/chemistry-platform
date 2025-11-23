interface ButtonProps {
  children: React.ReactNode;
  additionalStyle?: string;
  style: "solid" | "outline" | "solved" | "wrong" | "correct";
  size: "small" | "medium" | "large";
  width: "half" | "full" | "fit";
  onClick?: () => void;
}

type ColorStyles = {
  solid: string;
  outline: string;
  solved: string;
  wrong: string;
  correct: string;
};

type SizeStyle = {
  small: string;
  medium: string;
  large: string;
};

type widthStyle = {
  half: string;
  full: string;
  fit: string;
};

const Button = ({
  children,
  style,
  size,
  width,
  additionalStyle,
  onClick,
}: ButtonProps) => {
  const colors: ColorStyles = {
    solid: "bg-purple hover:bg-dark-purple text-white",
    outline:
      "border-1 border-purple text-purple hover:bg-purple hover:text-white",
    solved: "bg-simon text-white",
    wrong: "bg-red-900 text-white",
    correct: "bg-green-700 text-white",
  };

  const padding: SizeStyle = {
    small: "py-1 px-7 text-sm",
    medium: "py-2 px-5",
    large: "py-3 px-10",
  };

  const widthValue: widthStyle = {
    half: "w-1/2",
    full: "w-full",
    fit: "w-fit",
  };

  return (
    <button
      className={`${widthValue[width]} ${
        additionalStyle ? additionalStyle : "rounded-lg"
      } flex items-center justify-center gap-1 ${
        padding[size]
      }  cursor-pointer transition-all duration-300 ${colors[style]} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
