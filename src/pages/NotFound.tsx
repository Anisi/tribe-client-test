import ContainerLayout from "layouts/ContainerLayout";
import React from "react";
import { Link } from "react-router-dom";
import reactPaths from "routes/reactPaths";

const NotFound: React.FC = () => {
  return (
    <ContainerLayout>
      <div className="text-center">
        <h1 className="text-xl font-bold mb-3">
          Sorry, this page isn't available.
        </h1>
        <p className="text-lg">
          The link you followed may be broken, or the page may have been
          removed. Go back to
          <Link to={reactPaths.home}> Main Page</Link>.
        </p>
      </div>
    </ContainerLayout>
  );
};

export default NotFound;
