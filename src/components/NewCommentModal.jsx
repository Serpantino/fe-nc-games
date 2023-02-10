import {useState, useContext} from 'react';
import { PostReviewComment } from './FetchData';
import styles from "./NewCommentModal.module.css";
import {UserContext} from "../context/UserContext";


export default function NewCommentModal({ setShowModal, review_id, setRerenderMe }) {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    console.log('user',currentUser.user)
  const [newCommentText, setNewCommentText] = useState("");
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
          onChange={e => setNewCommentText(e.target.value)}
        />
        <button className={styles.button_submit}>Submit Comment</button>
      </form>
    </section>
  );

  function handleSubmit(e) {
    e.preventDefault();
    console.log(newCommentText);
    PostReviewComment(review_id, {username: currentUser.user, body: newCommentText})
    .then(() => {
        setRerenderMe(+1)
    })
  }
}
