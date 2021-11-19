import React from "react";
import "../../css/feeds.css";
import FlipMove from "react-flip-move";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/*<TweetBox />*/}

      <FlipMove></FlipMove>
    </div>
  );
};

export default Feed;
