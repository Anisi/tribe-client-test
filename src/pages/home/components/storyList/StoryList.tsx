import { Image, Post } from "@tribeplatform/gql-client/types";
import React from "react";
import StoryItem from "./StoryItem";

type Props = {
  stories: Post[];
};

const StoryList: React.FC<Props> = (props) => {
  return (
    props.stories && (
      <ol className="flex gap-4 p-3 my-6 bg-white border border-gray-300">
        {props.stories.map((story) => (
          <li key={story.id}>
            <StoryItem
              username={story.owner?.member?.name || ""}
              userProfilePicture={story.owner?.member?.profilePicture as Image}
              postId={story.id}
            />
          </li>
        ))}
      </ol>
    )
  );
};

export default StoryList;
