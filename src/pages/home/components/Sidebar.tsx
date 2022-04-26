import { Image, Member } from "@tribeplatform/gql-client/types";
import { useAuthMember } from "@tribeplatform/react-sdk/hooks";
import * as React from "react";
import AuthContext from "store/auth-context";



const Sidebar: React.FC = () => {
  const AuthCtx = React.useContext(AuthContext);
  const ctxLogoutHandler = AuthCtx.logout;

  const { data: member } = useAuthMember();
  return (
    <div className="m-6">
      {member && (
        <div className="py-6 flex gap-4">
          <img
            src={(member.profilePicture as Image).url}
            alt={member.name || ""}
            className="w-14 h-14 rounded-full"
          />
          <div className="flex justify-between items-center w-full">
            <div>
              <p className="font-bold">{member.username}</p>
              <p className="text-gray-500">{member.name}</p>
            </div>

            <button
              onClick={ctxLogoutHandler}
              className="row-span-2 text-blue-500 font-bold"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
