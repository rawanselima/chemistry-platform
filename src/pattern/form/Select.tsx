import { useFormContext, type RegisterOptions } from "react-hook-form";

interface SelectProps<T> {
  data: Array<T>;
  name: string;
  style?: string;
  defaultValue?: string;
  value?: string;
  rules?: RegisterOptions;
  onChange?: (e?: any) => void;
}

const Select = <T extends { id: string; value: string }>({
  data,
  name,
  style,
  defaultValue,
  rules,
  value,
  onChange,
}: SelectProps<T>) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <select
        className={`${style} m-2 bg-light-purple/50 px-5 py-2 rounded-lg text-dark-purple focus:border-2 focus:border-dark-purple outline-0`}
        {...register(name, rules)}
        onChange={onChange}
        value={value}
      >
        {/* Default Option */}
        {defaultValue && (
          <option value="" disabled selected>
            {defaultValue}
          </option>
        )}

        {/* Render items */}
        {data.map((ele) => (
          <option key={ele.id} value={ele.id}>
            {ele.value}
          </option>
        ))}
      </select>
      {errors[name] && (
        <p className="font-bold text-red-700">
          {errors[name]?.message?.toString()}
        </p>
      )}
    </>
  );
};

export default Select;
