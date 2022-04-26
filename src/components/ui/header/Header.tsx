import { ChatAlt2Icon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { Image } from "@tribeplatform/gql-client/types";
import { useNetwork } from "@tribeplatform/react-sdk/hooks";
import React from "react";
import { Link } from "react-router-dom";
import reactPaths from "../../../routes/reactPaths";
import AuthContext from "../../../store/auth-context";
import Button from "../Button";
import MemberMenu from "./MemberMenu";

const Header: React.FC = () => {
  const AuthCtx = React.useContext(AuthContext);
  const userIsLoggedIn = !!AuthCtx.token;

  const { data: network } = useNetwork();

  return (
    <header className="border-b border-b-gray-300 bg-white px-4">
      <div className="flex justify-between items-center container mx-auto h-14">
        {network && (
          <Link to={reactPaths.home} className="h-10 block">
            <img src={(network?.logo as Image)?.url} alt={network?.name} className="h-full" />
          </Link>
        )}
        <input
          placeholder="Search"
          className="bg-gray-200 rounded-md p-2 min-w-[250px] hidden md:block"
        />
        <nav>
          {userIsLoggedIn && (
            <ul className="flex items-center gap-4">
              <li>
                <Link to={reactPaths.home}>
                  <HomeIcon className="h-6 w-6 text-slate-900" />
                </Link>
              </li>
              <li className="flex items-center">
                <button className="pointer-events-none">
                  <ChatAlt2Icon className="h-6 w-6 text-slate-400" />
                </button>
              </li>
              <li className="flex items-center">
                <button className="pointer-events-none">
                  <PlusCircleIcon className="h-6 w-6 text-slate-400" />
                </button>
              </li>
              <MemberMenu />
            </ul>
          )}
          {!userIsLoggedIn && (
            <ul className="flex gap-2">
              <li>
                <Link to={reactPaths.login}>
                  <Button>Log In</Button>
                </Link>
              </li>
              <li>
                <Link to={reactPaths.register}>
                  <Button className="!bg-white text-blue-500">Sign Up</Button>
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
