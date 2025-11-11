interface TitleSectionProps {
  children: string;
}

const TitleSection = ({ children }: TitleSectionProps) => {
  return <h1 className="text-dark-purple font-bold md:text-5xl text-3xl text-center md:mt-20 mt-10 mb-10" > {children} </h1>;
};

export default TitleSection;
