import { useState, useContext } from "react";
import { PostReviewComment } from "./FetchData";
import styles from "./NewCommentModal.module.css";
import { UserContext } from "../context/UserContext";

export default function NewCommentModal({
  setShowModal,
  review_id,
  setRerenderMe,
}) {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [newCommentText, setNewCommentText] = useState("");
  const [disabled, setDisabled] = useState(false);
  return (
    <section className={styles["container_new-comment"]}>
      <header className={styles["header_new-comment"]}>
        <h2 className={styles["title_new-comment"]}>New Comment</h2>
        <button
          aria-label="close new comment window"
          className={styles["button_close"]}
          onClick={(e) => {
            e.preventDefault();
            setShowModal(false);
          }}
        >
          X
        </button>
      </header>
      <form
        className={styles["form_new-comment"]}
        onSubmit={(e) => handleSubmit(e)}
      >
        <textarea
          placeholder="Please enter your comment...."
          rows="10"
          aria-label="comment text area"
          aria-describedby="This is the text input box to enter in your new comment"
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          disabled={disabled}
        />
        <button className={styles.button_submit} disabled={disabled}>{disabled ? 'Submitted' : 'Submit Comment'}</button>
      </form>
    </section>
  );

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    PostReviewComment(review_id, {
      username: currentUser.user,
      body: newCommentText,
    }).then(() => {
      setNewCommentText('Success!')
      setTimeout(() => {
        setShowModal(false);
        setDisabled(false);
        setRerenderMe(+1);
        },3000)
    })
  }
}
