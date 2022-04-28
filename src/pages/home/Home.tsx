import ContainerLayout from "layouts/ContainerLayout";
import React from "react";
import PostList from "./components/postList/PostList";
import Sidebar from "./components/Sidebar";
import StoryList from "./components/storyList/StoryList";

const Home: React.FC = () => {
  return (
    <ContainerLayout>
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-8">
          <StoryList />
        </div>
        <div className="hidden lg:block col-span-4 row-span-2">
          <Sidebar />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <PostList />
        </div>
      </div>
    </ContainerLayout>
  );
};

export default Home;
