import Footer from "components/ui/Footer";
import React from "react";

const ContainerNoHeaderLayout: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto mt-12 flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default ContainerNoHeaderLayout;
