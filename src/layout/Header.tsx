import React from "react";
import { ChatAlt2Icon, HomeIcon, PlusCircleIcon } from "@heroicons/react/solid";
import reactPaths from "../routes/reactPaths";
import { useMember, useNetwork } from "@tribeplatform/react-sdk/hooks";
import { Image } from "@tribeplatform/gql-client/types";
import { Link } from "react-router-dom";

type Props = {};

const Header: React.FC<Props> = (props) => {
  const { data: network } = useNetwork();
  //@ts-expect-error
  const { data: member } = useMember({ id: { id: "nC0cudFyn7" } });
  console.log(member);
  return (
    <header className="border-b border-b-gray-300 bg-white">
      <div className="flex justify-between items-center container mx-auto h-14">
        {network && (
          <Link to={reactPaths.home}>
            <img src={(network?.logo as Image)?.url} alt={network?.name} />
          </Link>
        )}
        <input
          placeholder="Search"
          className="bg-gray-200 rounded-md py-1 px-2"
        />
        <nav className="">
          <ul className="flex items-center gap-4">
            <li>
              <Link to={reactPaths.home}>
                <HomeIcon className="h-6 w-6 text-slate-900" />
              </Link>
            </li>
            <li>
              <Link to={reactPaths.home}>
                <ChatAlt2Icon className="h-6 w-6 text-slate-900" />
              </Link>
            </li>
            <li>
              <Link to={reactPaths.home}>
                <PlusCircleIcon className="h-6 w-6 text-slate-900" />
              </Link>
            </li>
            <li>
              {member && (
                <Link to={reactPaths.home}>
                  <img
                    src={(member.profilePicture as Image).url}
                    alt={member.name || ""}
                    className="w-5 h-5 rounded-full"
                  />
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
