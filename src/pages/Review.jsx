import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Review.module.css";

export default function Review({ selectedReview }) {
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
          <h4>
            Review By: <cite>{owner}</cite> <br />
            <small>Created at: {reviewPostDate}</small>
          </h4>{" "}
          {/*TODO Add link to user*/}
        </div>
      </header>
      <section className={styles["container_review-body"]}>
        <p>{review_body}</p>
      </section>
      <section className={styles["container_review-comments"]}>
        <div>
          <h4>Comment Placeholder</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            incidunt? Distinctio unde harum cum dicta officia dignissimos
            necessitatibus, vel natus, deleniti autem repellendus laborum nobis!
            Sunt modi explicabo asperiores laudantium.
          </p>
        </div>
        <div>
          <h4>Comment Placeholder</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            incidunt? Distinctio unde harum cum dicta officia dignissimos
            necessitatibus, vel natus, deleniti autem repellendus laborum nobis!
            Sunt modi explicabo asperiores laudantium.
          </p>
        </div>
        <div>
          <h4>Comment Placeholder</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            incidunt? Distinctio unde harum cum dicta officia dignissimos
            necessitatibus, vel natus, deleniti autem repellendus laborum nobis!
            Sunt modi explicabo asperiores laudantium.
          </p>
        </div>
      </section>
    </article>
  );
}
