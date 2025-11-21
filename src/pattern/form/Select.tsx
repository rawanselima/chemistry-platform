interface LevelsProps {
  id: string;
  level: string;
}

interface CoursesProps {
  id: string;
  titleCourse: string;
}

interface SelectProps {
  data: Array<LevelsProps | CoursesProps>;
  name: string;
  style?: string;
  defaultValue?: string;
}

const Select = ({ data, name, style, defaultValue }: SelectProps) => {
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
        <option
          key={ele.id}
          value={"level" in ele ? ele.level : ele.titleCourse}
        >
          {"level" in ele ? ele.level : ele.titleCourse}
        </option>
      ))}
    </select>
  );
};

export default Select;
