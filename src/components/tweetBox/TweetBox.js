import React, { useState } from "react";
import "../../css/tweetBox.css";
import { Avatar, Button } from "@material-ui/core";

const TweetBox = () => {
  const [char, setCar] = useState(0);
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://picsum.photos/id/1025/50/50" />
          <textarea
            placeholder="What's happening?"
            maxLength="250"
            onKeyUp={(e) => setCar(e.target.value.length)}
          />
        </div>
        <span>{char}/256</span>
        <input
          className="tweetBox__imageInput form-control"
          placeholder="Optional: Enter image URL"
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
