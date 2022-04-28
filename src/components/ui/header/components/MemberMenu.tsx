import { Image } from "@tribeplatform/gql-client/types";
import { useAuthMember } from "@tribeplatform/react-sdk/hooks";
import React from "react";
import { Link } from "react-router-dom";
import reactPaths from "routes/reactPaths";

const MemberMenu: React.FC = () => {
  const { data: member } = useAuthMember();

  return member ? (
    <li>
      <Link to={reactPaths.home}>
        <img
          src={(member.profilePicture as Image).url}
          alt={member.name || ""}
          className="w-5 h-5 rounded-full"
        />
      </Link>
    </li>
  ) : null;
};

export default MemberMenu;
