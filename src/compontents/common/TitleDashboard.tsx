const TitleDashboard = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: string;
}) => {
  return (
    <h1
      className={`text-3xl font-bold text-dark-purple flex items-center gap-2 mb-10 ${style} `}
    >
      {children}
    </h1>
  );
};

export default TitleDashboard;
