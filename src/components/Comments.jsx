import { useState, useEffect, useRef } from "react";
import { FetchReviewComments } from "./FetchData";

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
      const buildCommentsJSX = comments.comments.map(({ comment }) => {
        const { author, body, comment_id, created_at, review_id, votes } =
          comment;
        return (
          <li className="list_comment" key={review_id + comment_id}>
            <h4>
              Written<cite>{author}</cite>{" "}
              <span className="text_comment-created-at">{created_at}</span>
            </h4>
            <p>{body}</p>
            <button className="button_up-vote">Vote +</button>
            <button className="button_down-vote">Vote -</button>
          </li>
        );
      });
      setCommentsJSX(buildCommentsJSX);
    } else {
      setCommentsJSX(<h4>There are currently no comments for this review</h4>);
    }
  }

  return (
    <section className="container_comments">
      <h3>Comments Section</h3>
      <ul>{commentsJSX.length > 0 && commentsJSX}</ul>
    </section>
  );
}
