import { Image, Post } from "@tribeplatform/gql-client/types";
import { usePosts } from "@tribeplatform/react-sdk/hooks";
import { simplifyPaginatedResult } from "@tribeplatform/react-sdk/utils";
import React from "react";
import StoryItem from "./StoryItem";

const StoryList: React.FC = () => {
  const { data: storiesRaw } = usePosts({
    variables: { limit: 10, spaceIds: ["1puWC8ZZ3xVz"] },
  });

  const { nodes: stories } = simplifyPaginatedResult<Post>(storiesRaw);

  return (
    stories && (
      <ol className="flex gap-4 p-3 my-6 bg-white border border-gray-300">
        {stories.map((story) => (
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
