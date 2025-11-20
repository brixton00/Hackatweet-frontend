import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../reducers/user";
import LastTweets from "./LastTweets";
import Trends from "./Trends";
//import styles from '';

function Home() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const [tweetText, setTweetText] = useState("");
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tweets")
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          setTweets(data.tweets);
        }
      });
  }, []);

  // 280 carac
  const handleChangeTweet = (e) => {
    const value = e.target.value;
    if (value.length <= 280) {
      setTweetText(value);
    }
  };

  // Extraire hashtags #
  const extractHashtags = (text) => {
    const words = text.split(/\s+/);
    const tags = words.filter((w) => w.startsWith("#")).map((w) => w.slice(1));
    return tags;
  };

  const handlePostTweet = () => {
    if (!tweetText.trim()) return;

    const hashtags = extractHashtags(tweetText);

    fetch("http://localhost:3000/tweet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: user.token,
        tweet: tweetText,
        hashtags,
      }),
    });
  };

  const handleDelete = (tweetId) => {
    fetch(`http://localhost:3000/tweet/${tweetId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: user.token }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          setTweets((prev) => prev.filter((t) => t._id !== tweetId));
        }
      });
  };

  const handleLogout = () => {
    dispatch(logout());
    // PENSER A GERER : redirection vers /login par exemple
  };

  return (
    <div className="homeContainer">
      <div className="leftColumn">
        <div className="logo" /* PENSER A GERER : onClick: retour home */>
          Hackatweet
        </div>
        <div className="userInfos">
          <p>@{user.username}</p>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div className="centerColumn">
        <div className="newTweet">
          <textarea
            value={tweetText}
            onChange={handleChangeTweet}
            placeholder="What's up?"
          />
          <div className="tweetFooter">
            <span>{280 - tweetText.length} characters left</span>
            <button onClick={handlePostTweet}>Tweet</button>
          </div>
        </div>

        <LastTweets
          tweets={tweets}
          currentUserId={user._id}
          onLike={handleLike}
          onDelete={handleDelete}
        />
      </div>

      <div className="rightColumn">
        <Trends tweets={tweets} />
      </div>
    </div>
  );
}

export default Home;
