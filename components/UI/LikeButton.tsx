import { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import styles from "../../styles/LikeButton.module.css";

const LikeButton: React.FC = () => {
  const [animate, setAnimate] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(0);
  const [likeStatus, setLikeStatus] = useState<boolean>(false);
  const [likeIsDisabled, setLikeIsDisabled] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://us-central1-portfolio-8b85a.cloudfunctions.net/api/getLikes")
      .then((res) => {
        res.json().then((res) => {
          setLikeCount(res.likes);
        });
      })
      .catch(() => {
        setLikeIsDisabled(true);
      });

    setLikeStatus(localStorage.getItem("likeStatus") === "true");
  }, []);

  const likeClick = async () => {
    let action: string;

    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 300);

    if (likeStatus) {
      action = "decrement";
    } else {
      action = "increment";
    }

    setLikeCount((prevState) => {
      if (likeStatus) {
        return prevState - 1;
      } else {
        return prevState + 1;
      }
    });

    localStorage.setItem("likeStatus", (!likeStatus).toString());
    setLikeStatus(!likeStatus);

    fetch(
      "https://us-central1-portfolio-8b85a.cloudfunctions.net/api/updateLikes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: action }),
      }
    ).catch(() => {
      setLikeCount((prevState) => {
        if (likeStatus) {
          return prevState + 1;
        } else {
          return prevState - 1;
        }
      });
      setLikeIsDisabled(true);
      setLikeStatus(likeStatus);
      localStorage.setItem("likeStatus", (likeStatus).toString());
    });
  };

  return (
    <button disabled={likeIsDisabled}
      className={styles.like + " " + `${animate ? styles.pop : ""}` + " " + `${likeIsDisabled ? styles.disabled : ""}`}
      onClick={likeClick}
    >
      {likeStatus ? <AiFillHeart /> : <AiOutlineHeart />}
      <p className={styles.count}>{likeCount}</p>
    </button>
  );
};

export default LikeButton;
