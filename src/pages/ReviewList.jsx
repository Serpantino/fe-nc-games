import { FetchReviews } from "../components/FetchData";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ReviewList.module.css";

export default function ReviewList({
  setIndividualPage,
  setSelectedReview,
  selectedReview,
}) {
  const [reviews, setReviews] = useState([]);
  let notInitialRender = useRef(false);


  const [reviewsJSX, setReviewsJSX] = useState([]);

  useEffect(() => {
    if (notInitialRender.current) {
      buildReviewsJSX(reviews);
    } else {
      notInitialRender.current = true;

      FetchReviews().then((reviewData) => {
        setReviews(reviewData);
      });
    }
  }, [reviews]);

  function buildReviewsJSX() {
    const tempReviewArray = reviews.map((review) => {
      return (
        <Link
          to={`/review/${review.review_id}`}
          className={styles.linkto_review}
          onClick={(e) => handleSelectedReview(e, review)}
        >
          <li key={review.review_id} className={styles.list_review}>
            <img
              src={review.review_img_url}
              aria-hidden="true"
              alt={`Photo of ${review.title}`}
              className={styles["image_reviews-list"]}
            />
            <p
              aria-label="A link to the review of: "
              className={styles.linkto_review}
            >
              {review.title}
            </p>
          </li>
        </Link>
      );
    });
    setReviewsJSX(tempReviewArray);
  }

  function handleSelectedReview(e, review) {

    setIndividualPage(true);
    setSelectedReview(review);   

  }
  

  return (
    <section className={styles['container_review-list']}>
      <h2>Reviews</h2>
      <ul className={styles["ul-container_reviews"]}>
        {reviewsJSX.length > 0 ? reviewsJSX : "....Loading"}
      </ul>
    </section>
  );
}
