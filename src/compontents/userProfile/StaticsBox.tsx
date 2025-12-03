interface dataType {
  title: string;
  ratio: string;
  originalValue?: string;
  icon: React.ReactNode;
}

interface dataProps {
  data: dataType;
}
const StaticsBox = ({ data }: dataProps) => {
  return (
    <div className="bg-white flex justify-between items-center p-3 rounded-lg border-light-purple border-1">
      <div>
        <p className="font-bold text-xl text-dark-purple"> {data.title} </p>
        <p className="text-3xl text-simon font-bold"> {data.ratio} </p>
        {data.originalValue && (
          <p className="">
            {data.title === "الدروس المكتمله"
              ? "من أصل"
              : data.title === "معدل التقدم" || data.title === "ساعات الدراسه"
              ? "هذا الأسبوع"
              : "هذا الشهر"}
            <span className="text-simon"> {data?.originalValue} </span>
          </p>
        )}
      </div>
      <div className="p-3 rounded-lg bg-light-purple text-dark-purple text-2xl">
        {data.icon}
      </div>
    </div>
  );
};

export default StaticsBox;
