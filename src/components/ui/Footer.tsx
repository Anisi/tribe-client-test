import * as React from "react";
import { Link } from "react-router-dom";
import reactPaths from "routes/reactPaths";

const Footer: React.FC<
  React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ className, children, ...props }) => {
  return (
    <div className="flex flex-col items-center text-gray-500 py-8">
      <nav>
        <ul className="flex gap-3">
          <li>
            <Link to={reactPaths.staticPages.about} className="!text-gray-500">
              About
            </Link>
          </li>
          <li>
            <Link to={reactPaths.staticPages.terms} className="!text-gray-500">
              Terms
            </Link>
          </li>
          <li>
            <Link to={reactPaths.staticPages.help} className="!text-gray-500">
              Help
            </Link>
          </li>
        </ul>
      </nav>
      <p className="mt-2">© 2022 Example Copyright</p>
    </div>
  );
};

export default Footer;
