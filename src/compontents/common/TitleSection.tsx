interface TitleSectionProps {
  children: string;
}

const TitleSection = ({ children }: TitleSectionProps) => {
  return (
    <h1 className="text-dark-purple font-bold md:text-5xl text-3xl text-center md:pt-20 pt-10 pb-10">
      {" "}
      {children}{" "}
    </h1>
  );
};

export default TitleSection;
