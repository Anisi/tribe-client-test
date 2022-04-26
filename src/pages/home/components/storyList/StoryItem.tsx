import { Image } from "@tribeplatform/gql-client/types";
import React from "react";
import { generatePath, Link } from "react-router-dom";
import reactPaths from "../../../../routes/reactPaths";

type Props = {
  postId: string;
  username: string;
  userProfilePicture: Image | null;
};

const StoryItem: React.FC<Props> = (props) => {
  return (
    <Link
      to={generatePath(reactPaths.stories.show, { storyId: props.postId })}
      className="w-16 block"
    >
      <div className="border-2 rounded-full border-red-700 p-[2px] max-w-max">
        <img
          src={props.userProfilePicture?.url || ""}
          alt={props.username}
          className="h-14 w-14 rounded-full"
        />
      </div>
      <div className="line-clamp-1">{props.username}</div>
    </Link>
  );
};

export default StoryItem;
