import * as React from "react";
import classNames from "classnames";

const Button: React.FC<
  React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ className, children, ...props }) => {
  return (
    <button
      className={classNames(
        className,
        "bg-blue-500 disabled:bg-blue-400 rounded-sm p-2 text-white font-bold"
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
