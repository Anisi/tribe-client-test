import * as React from "react";
import classNames from "classnames";
import loadingSpinnerImg from "assets/images/loading_spinner.svg";

const Loading: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div className={classNames(className, "w-full flex justify-center p-4")} {...props}>
      <img src={loadingSpinnerImg} alt="Loading" className="animate-spin w-6 h-6" />
    </div>
  );
};

export default Loading;
