import React, { useState, useEffect } from "react";
import "../../css/feeds.css";
import FlipMove from "react-flip-move";
import db from "../../services/firebase";
import { collection, onSnapshot } from "firebase/firestore";

import TweetBox from "../tweetBox/TweetBox";
import Post from "../post/Post";

//import { collection, getDocs } from "firebase/firestore";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = () => {
      onSnapshot(collection(db, "posts"), (snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      });
    };
    getData();
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
