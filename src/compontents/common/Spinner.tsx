type border = {
  lightPurple: string;
  purple: string;
};

interface colorProps {
  color: "lightPurple" | "purple";
}
export default function Spinner({ color }: colorProps) {
  const border: border = {
    lightPurple: "border-light-purple",
    purple: "border-purple",
  };
  return (
    <div
      className={`w-10 h-10 rounded-full border-4 border-solid ${border[color]} border-t-transparent animate-spin`}
    ></div>
  );
}
