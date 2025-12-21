import { useFormContext, type RegisterOptions } from "react-hook-form";

interface inputProps {
  name: string;
  type: string;
  placeholder?: string;
  style?: string;
  checked?: boolean;
  defaultValue?: string;
  focus?: boolean;
  readonly?: boolean;
  rules?: RegisterOptions;
  value?: string;
}

const Input = ({
  name,
  type,
  placeholder,
  style,
  checked,
  defaultValue,
  focus,
  readonly,
  rules,
  value,
}: inputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <input
        className={`${style} ${
          readonly ? "bg-gray-200 cursor-not-allowed" : "bg-light-purple/50"
        } m-2  px-5 py-2 rounded-lg text-dark-purple focus:border-2 focus:border-purple placeholder:text-dark-purple placeholder:text-sm outline-0`}
        type={type}
        placeholder={placeholder}
        checked={checked}
        defaultValue={defaultValue}
        autoFocus={focus}
        readOnly={readonly}
        value={value}
        {...register(name, rules)}
      />
      {errors[name] && (
        <p className="font-bold text-red-700">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </>
  );
};

export default Input;
