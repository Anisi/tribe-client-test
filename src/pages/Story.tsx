import ContainerLayout from "layouts/ContainerLayout";
import React from "react";
import { Link } from "react-router-dom";
import reactPaths from "routes/reactPaths";

const Story: React.FC = () => {
  return (
    <ContainerLayout>
      <div className="text-center">
        <h1 className="text-xl font-bold mb-3">We are working on this page.</h1>
        <p className="text-lg">
          <Link to={reactPaths.home}> Main Page</Link>
        </p>
      </div>
    </ContainerLayout>
  );
};

export default Story;
