import React from "react";
import Header from "components/ui/header/Header";

const ContainerNoFooterLayout: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto mt-12 flex-grow">{children}</div>
    </div>
  );
};

export default ContainerNoFooterLayout;
