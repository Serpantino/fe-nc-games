import { FetchReviews } from "../components/FetchData";
import { useState, useEffect, useRef } from "react";
import styles from './ReviewList.module.css';

export default function ReviewList() {
  const [reviews, setReviews] = useState([]);
  let notInitialRender = useRef(false);

  const [reviewsJSX, setReviewsJSX] = useState([]);

  useEffect(() => {
    if (notInitialRender.current) {
      buildReviewsJSX(reviews);
  
    } else {
      notInitialRender.current = true;

      console.log("1st render");
      FetchReviews().then((reviewData) => {
        console.log(reviewData);
        setReviews(reviewData);
      });
    }
  }, [reviews]);

  function buildReviewsJSX() {
    const tempReviewArray = reviews.map((review) => {
      
      return (
        <li key={review.review_id} className={styles.list_review}>
          <img src={review.review_img_url} aria-hidden="true" alt={`Photo of ${review.title}`} className={styles['image_reviews-list']}/>
          <p aria-label="A link to the review of: " className={styles.linkto_review}>
            {review.title}
          </p>
        </li>
      );
    });
    return setReviewsJSX(tempReviewArray);
  }

  return <ul className={styles['ul-container_reviews']}>{reviewsJSX.length > 0 ? reviewsJSX : "....Loading"}</ul>;
}
