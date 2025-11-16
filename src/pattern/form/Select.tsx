interface levelsProps {
  id: string;
  level: string;
}

interface selectProps {
  data: Array<levelsProps>;
  name: string;
  style?: string;
  defaultValue?: string;
}

const Select = ({ data, name, style, defaultValue }: selectProps) => {
  return (
    <select
      name={name}
      className={`${style} m-2 bg-light-purple/50 px-5 py-2 rounded-lg text-dark-purple focus:border-2 focus:border-dark-purple outline-0`}
    >
      {data?.map((ele: levelsProps) => {
       <option value={defaultValue}  >
           {defaultValue}
          </option>
        return (
          <option value={ele.level} key={ele.id}>
            {ele.level}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
