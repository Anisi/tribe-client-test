import * as React from "react";
import classNames from "classnames";
import { FieldError } from "react-hook-form";

interface InputPropsInterface
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  ref: React.Ref<HTMLInputElement>;
}
const Input: React.FC<React.PropsWithChildren<InputPropsInterface>> =
  React.forwardRef(({ className, children, error, ...props }, ref) => {
    return (
      <label>
        {children}
        <input
          
          className={classNames(
            className,
            "w-full border border-grey-400 p-2 rounded-sm"
          )}
          {...props}
          ref={ref}
        />

        {error && <p className="text-red-600">{error?.message}</p>}
      </label>
    );
  });

export default Input;
