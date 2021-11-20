import React, { forwardRef, useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

import "../../css/post.css";
import db from "../../services/firebase";
import { doc, updateDoc } from "firebase/firestore";

const Post = forwardRef(
  (
    { displayName, username, verified, text, image, avatar, like, postId },
    ref
  ) => {
    const [color, setColor] = useState("");

    useEffect(() => {
      like ? setColor("red") : setColor("");
    }, [like]);

    const updateLike = async () => {
      like ? (like = false) : (like = true);
      const postRef = doc(db, "posts", postId);
      await updateDoc(postRef, {
        like: like,
      });
    };

    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon
              fontSize="small"
              type="button"
              onClick={() => updateLike()}
              style={{ color: color }}
            />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
