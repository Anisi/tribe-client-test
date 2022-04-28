import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/outline";
import { Image, Post } from "@tribeplatform/gql-client/types";
import * as React from "react";
import { imageFullUrl, readablePastPeriod } from "utils/helpers";
import parse from "html-react-parser";
import ReactPlayer from "react-player";
import {
  useAddReaction,
  useRemoveReaction,
} from "@tribeplatform/react-sdk/hooks";

interface PostItemPropsInterface {
  post: Post;
}

const PostItem: React.FunctionComponent<PostItemPropsInterface> = ({
  post,
}) => {
  const { mutate: upVote } = useAddReaction();
  const { mutate: downVote } = useRemoveReaction();
  const reacted = post?.reactions?.some(
    (reaction) => reaction.reacted && reaction.reaction === "+1"
  );

  return post.attachments && post.attachments?.length > 0 ? (
    <div className="bg-white border border-gray-300">
      <div className="py-2 px-4 border-b border-gray-300 flex items-center font-bold gap-2">
        <img
          src={(post.owner?.member?.profilePicture as Image).url}
          alt={post.owner?.member?.username}
          className="w-12 h-12 rounded-full"
        />
        {post.owner?.member?.username}
      </div>

      {["jpg", "jpeg"].includes(post.attachments[0].extension) ? (
        <img
          src={post.attachments[0].url}
          loading="lazy"
          alt={post.owner?.member?.username}
          className="w-full"
        />
      ) : (
        <ReactPlayer
          url={post.attachments[0].url}
          width="100%"
          hight="100%"
          playing={true}
        />
      )}
      <div className="px-6 my-6">
        {reacted ? (
          <HeartIconSolid
            className="w-8 h-8 text-slate-900 cursor-pointer"
            onClick={() => downVote({ postId: post?.id, reaction: "+1" })}
          />
        ) : (
          <HeartIconOutline
            className="w-8 h-8 text-slate-900 cursor-pointer"
            onClick={() =>
              upVote({
                postId: post?.id,
                input: {
                  reaction: "+1",
                },
              })
            }
          />
        )}

        {post.reactionsCount > 0 && (
          <p className="flex mt-4 font-bold">{post.reactionsCount} likes</p>
        )}
        <time
          dateTime={post.createdAt}
          className="text-gray-400 mt-2 uppercase"
        >
          {readablePastPeriod(post.createdAt)}
        </time>
      </div>
    </div>
  ) : null;
};

export default PostItem;
