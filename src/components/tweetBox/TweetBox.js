import React, { useState, useRef } from "react";
import "../../css/tweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import { collection, addDoc } from "firebase/firestore";
import db from "../../services/firebase";

const TweetBox = () => {
  const [char, setCar] = useState(0);
  const tweetTxt = useRef();
  const imgUrl = useRef();
  const avatar = "https://picsum.photos/id/1025/50/50";
  const displayName = "Elon Musk";
  const like = false;
  const username = "elonmusk";
  const verified = true;

  const addPost = async (e) => {
    e.preventDefault();
    if (tweetTxt.current.value === "") return;
    await addDoc(collection(db, "posts"), {
      avatar: avatar,
      displayName: displayName,
      image: imgUrl.current.value,
      like: like,
      text: tweetTxt.current.value,
      username: username,
      verified: verified,
    });
    tweetTxt.current.value = "";
    imgUrl.current.value = "";
  };

  return (
    <div className="tweetBox">
      <form onSubmit={addPost}>
        <div className="tweetBox__input">
          <Avatar src={avatar} />
          <textarea
            placeholder="What's happening?"
            maxLength="250"
            ref={tweetTxt}
            onKeyUp={(e) => setCar(e.target.value.length)}
          />
        </div>
        <span className="tweetBox__characters">{char}/256</span>
        <input
          className="tweetBox__imageInput form-control"
          placeholder="Optional: Enter image URL"
          ref={imgUrl}
          type="text"
        />

        <Button type="submit" className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
