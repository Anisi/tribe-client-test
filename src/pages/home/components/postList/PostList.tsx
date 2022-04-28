import { CheckCircleIcon } from "@heroicons/react/outline";
import { Post, PostListFilterByEnum } from "@tribeplatform/gql-client/types";
import { usePosts } from "@tribeplatform/react-sdk/hooks";
import { simplifyPaginatedResult } from "@tribeplatform/react-sdk/utils";
import Loading from "components/ui/Loading";
import * as React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PostItem from "./PostItem";

const PostList: React.FC = () => {
  const {
    data: postsRaw,
    hasNextPage,
    fetchNextPage,
  } = usePosts({
    variables: { limit: 2, spaceIds: ["r29laWP5vfaC"] },

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
  let { nodes: posts } = simplifyPaginatedResult<Post>(postsRaw);

  posts = posts.filter(
    (post) => post.attachments && post.attachments?.length > 0
  );

  console.log(posts);

  return posts ? (
    <InfiniteScroll
      dataLength={posts.length} //This is important field to render the next data
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<Loading />}
      endMessage={
        <p className="p-4 flex justify-center items-center gap-2 font-bold">
          <CheckCircleIcon className="w-6 h-6 text-red-600" /> Yay! You have
          seen all the posts!
        </p>
      }
    >
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </div>
    </InfiniteScroll>
  ) : null;
};

export default PostList;
