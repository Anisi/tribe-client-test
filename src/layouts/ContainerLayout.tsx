import React from "react";
import Header from "components/ui/header/Header";
import Footer from "components/ui/Footer";

const ContainerLayout: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto mt-6 flex-grow">{children}</div>
      <Footer/>
    </div>
  );
};

export default ContainerLayout;
