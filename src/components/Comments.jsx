import { useState, useEffect, useRef } from "react";
import { FetchReviewComments } from "./FetchData";
import styles from "./Comments.module.css";

export default function Comments({ review_id }) {
  const [comments, setComments] = useState([]);
  const [commentsJSX, setCommentsJSX] = useState([]);
  let notInitialRender = useRef(false);

  useEffect(() => {
    if (notInitialRender.current) {
      buildComments();
    } else {
      FetchReviewComments(review_id).then((reviewComments) => {
        setComments(reviewComments);
        notInitialRender.current = true;
      });
    }
  }, [review_id, comments]);

  function buildComments() {
    console.log("rev comments", comments.comments);
    if (comments.comments) {
      const buildCommentsJSX = comments.comments.map((comment) => {
        console.log("comment", comment);
        const { author, body, comment_id, created_at, review_id, votes } =
          comment;
        return (
          <li className={styles.list_comment} key={review_id + comment_id}>
            <header className={styles.header_comment}>
              <h4>
                Written By: <cite>{author}</cite>{" "}
                <span className={styles["text_comment-created-at"]}>
                  {created_at}
                </span>
              </h4>
            </header>
            <p className={styles.comment_text}>{body}</p>
            <footer className={styles["container_comment-votes"]}>
              <button className={styles["button_down-vote"]}>Vote -</button>
            <p className={styles['number-of_votes']}>{votes}</p>
              <button className={styles["button_up-vote"]}>Vote +</button>
            </footer>
          </li>
        );
      });
      setCommentsJSX(buildCommentsJSX);
    } else {
      setCommentsJSX(<h4>There are currently no comments for this review</h4>);
    }
  }

  return (
    <section className={styles.container_comments}>
      <h3>Comments Section</h3>
      <ul className={styles["container_review-comments"]}>
        {commentsJSX.length > 0 && commentsJSX}
      </ul>
    </section>
  );
}
