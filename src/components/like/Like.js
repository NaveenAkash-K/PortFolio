import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, runTransaction } from "firebase/database";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import firebaseConfig from "../../firebaseConfig"; // Update the path accordingly
import "./like.css";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db, "likeCount");

const Like = () => {
  const [animate, setAnimate] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [likeStatus, setLikeStatus] = useState(() => {
    return localStorage.getItem("likeStatus") === "true";
  });

  useEffect(() => {
    // Listen for changes to like count from Realtime Database
    const unsubscribe = onValue(dbRef, (snapshot) => {
      setLikeCount(snapshot.val() || 0);
    });

    // Cleanup the listener when the component unmounts
    return () => {
      unsubscribe(); // Unsubscribe from onValue
    };
  }, []);

  const likeClick = () => {
    // Toggle like status in localStorage
    const newLikeStatus = !likeStatus;
    localStorage.setItem("likeStatus", newLikeStatus.toString());

    // Set isLiked and trigger animation
    setAnimate(true);

    // Reset animation after a short delay
    setTimeout(() => {
      setAnimate(false);
    }, 300); // Adjust the duration to match your animation duration

    // Use runTransaction to increment or decrement like count atomically in Realtime Database
    runTransaction(dbRef, (currentLikeCount) => {
      return newLikeStatus
        ? (currentLikeCount || 0) + 1
        : (currentLikeCount || 0) - 1;
    }).then((transactionResult) => {
      // Transaction completed
      setLikeCount(transactionResult.snapshot.val() || 0);
    });

    // Update local state
    setLikeStatus(newLikeStatus);
  };

  return (
    <button className={`like ${animate ? 'pop' : ''}`} onClick={likeClick}>
      {likeStatus ? <AiFillHeart /> : <AiOutlineHeart />}
      <p className="like_count">{likeCount}</p>
    </button>
  );
};

export default Like;
