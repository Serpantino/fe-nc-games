import { useState } from "react";
import { useParams } from "react-router-dom";
import { PatchReviewVotes } from "../components/FetchData";
import styles from "./Review.module.css";

import Comments from "../components/Comments";

export default function Review({ selectedReview, setSelectedReview }) {
  const {
    review_id,
    category,
    comment_count,
    created_at,
    designer,
    owner,
    review_body,
    review_img_url,
    title,
    votes,
  } = selectedReview;

  let params = useParams();
  const reviewPostDate = created_at
    .split("")
    .slice(0, 10)
    .join("")
    .split("-")
    .reverse()
    .join("-");

  return (
    <article className={styles.page_review}>
      <header className={styles.review_header}>
        <h2>{title}</h2>
        <cite>By: {designer}</cite> {/*TODO clickable designer to filter*/}
        <div className={styles["container_header-inner"]}>
          <img
            src={review_img_url}
            aria-hidden="true"
            alt="Photo (supposedly) of the game"
            className={styles["image_single-review"]}
          />
          <div className={styles['container_header-sub']}>
            <h4>
              Review By: <cite>{owner}</cite> <br />
              <small>Created at: {reviewPostDate}</small>
            </h4>
            {/*TODO Add link to user*/}
            <p>
              <button className={styles['button_dec-review-vote']} onClick={(e) => {
                handleVotes("-")
              }}>-</button>
              Votes: <span className={styles['text_data-review-votes']}>{votes}</span>
            <button className={styles['button_inc-review-vote']} onClick={(e) => {
              handleVotes("+")
            }}>+</button>
            </p>
          </div>
        </div>
      </header>
      <section className={styles["container_review-body"]}>
        <p>{review_body}</p>
      </section>
      <section className={styles["container_review-comments"]}>
        <ul>
          <Comments review_id={review_id} />
        </ul>
      </section>
    </article>
  );

  function handleVotes(operand) {
    
    const updateVotes = {...selectedReview};
    let voteAmendment = operand === "+" ? updateVotes.votes + 1 : updateVotes.votes -1;
    const patchValue = operand === "+" ? +1 : -1;
    updateVotes.votes = voteAmendment;
    setSelectedReview(updateVotes);
    PatchReviewVotes(review_id, patchValue); 

  }
}
