const TitleDashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-3xl font-bold text-dark-purple flex items-center gap-2 mb-10">
      {children}
    </h1>
  );
};

export default TitleDashboard;
