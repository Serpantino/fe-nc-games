import { FetchReviews } from "../components/FetchData";
import { useState, useEffect, useRef } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import styles from "./ReviewList.module.css";

export default function ReviewList({setIndividualPage, setSelectedReview, selectedReview}) {
  const [reviews, setReviews] = useState([]);
  let notInitialRender = useRef(false);
  const navigatePage = useNavigate();
  
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
        <li key={review.review_id} className={styles.list_review}>
          <img
            src={review.review_img_url}
            aria-hidden="true"
            alt={`Photo of ${review.title}`}
            className={styles["image_reviews-list"]}
            />
          <Link
            to={`/review/${review.review_id}`}
            className={styles.linkto_review}
            onClick={(e) => handleSelectedReview(e, review)}
            >
            <p
              aria-label="A link to the review of: "
              className={styles.linkto_review}
              >
              {review.title}
            </p>
          </Link>
        </li>
      );
    });
    setReviewsJSX(tempReviewArray);
  }
  
  function handleSelectedReview(e, review) {
  
    setIndividualPage(true);
    setSelectedReview(review);   

  }
  
  
  if(reviews.length > 0) {
    
  }

  return (
    <ul className={styles["ul-container_reviews"]}>
      {reviewsJSX.length > 0 ? reviewsJSX : "....Loading"}
    </ul>
  );
}
