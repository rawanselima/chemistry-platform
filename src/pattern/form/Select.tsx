interface SelectProps<T> {
  data: Array<T>;
  name: string;
  style?: string;
  defaultValue?: string;
}

const Select = <T extends { id: string; value: string }>({
  data,
  name,
  style,
  defaultValue,
}: SelectProps<T>) => {
  return (
    <select
      name={name}
      className={`${style} m-2 bg-light-purple/50 px-5 py-2 rounded-lg text-dark-purple focus:border-2 focus:border-dark-purple outline-0`}
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
  );
};

export default Select;
