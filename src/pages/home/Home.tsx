import { Post } from "@tribeplatform/gql-client/types";
import { useAuthMember, usePosts } from "@tribeplatform/react-sdk/hooks";
import { simplifyPaginatedResult } from "@tribeplatform/react-sdk/utils";
import ContainerLayout from "layouts/ContainerLayout";
import React from "react";
import PostList from "./components/postList/PostList";
import StoryList from "./components/storyList/StoryList";
import Sidebar from "./components/Sidebar";

type Props = {};

const Home: React.FC<Props> = (props) => {
  const { data: storiesRaw } = usePosts({
    variables: { limit: 10, spaceIds: ["1puWC8ZZ3xVz"] },
  });
  const { data: postsRaw } = usePosts({
    variables: { limit: 10, spaceIds: ["r29laWP5vfaC"] },
    fields: {
      attachments: "all",
      owner: {
        member: "all",
      },
      reactions: {
        fields: "basic",
        variables: {
          limit: 0,
        },
      },
      createdBy: {
        member: "basic",
      },
    },
  });

  const { nodes: stories } = simplifyPaginatedResult<Post>(storiesRaw);
  const { nodes: posts } = simplifyPaginatedResult<Post>(postsRaw);

  return (
    <ContainerLayout>
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-8">
          {stories && <StoryList stories={stories} />}
        </div>
        <div className="hidden lg:block col-span-4 row-span-2">
          <Sidebar />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <PostList posts={posts} />
        </div>
      </div>
    </ContainerLayout>
  );
};

export default Home;
