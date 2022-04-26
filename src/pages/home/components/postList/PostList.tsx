import { Post } from "@tribeplatform/gql-client/types";
import * as React from "react";
import PostItem from "./PostItem";

interface PostListPropsInterface {
  posts: Post[];
}

const PostList: React.FunctionComponent<PostListPropsInterface> = ({
  posts,
}) => {
  console.log(posts);
  return posts ? (
    <div className="flex flex-col gap-6">
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  ) : null;
};

export default PostList;
