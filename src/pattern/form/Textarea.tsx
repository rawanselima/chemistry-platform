import { useFormContext, type RegisterOptions } from "react-hook-form";

interface TextareaProps {
  name: string;
  placeholder?: string;
  style?: string;
  defaultValue?: string;
  rules?: RegisterOptions;
}

const Textarea = ({
  name,
  placeholder,
  style,
  defaultValue,
  rules,
}: TextareaProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <textarea
        placeholder={placeholder}
        className={`${style} m-2 bg-light-purple/50 px-5 py-2 rounded-lg text-dark-purple focus:border-2 focus:border-purple placeholder:text-dark-purple placeholder:text-sm outline-0`}
        defaultValue={defaultValue}
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

export default Textarea;
