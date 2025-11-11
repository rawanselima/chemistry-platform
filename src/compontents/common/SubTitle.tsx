import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const SubTitle = ({ children }: Props) => {
  return (
    <h6 className="w-fit py-2 px-10 text-sm font-bold rounded text-dark-purple bg-light-purple flex items-center gap-1">
      {children}
    </h6>
  );
};

export default SubTitle;
