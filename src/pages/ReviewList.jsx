import { FetchReviews } from "../components/FetchData";
import { useState, useEffect } from "react";

export default function ReviewList() {
  const [reviews, setReviews] = useState();

  const reviewsJSX = [];

  useEffect(() => {
    FetchReviews().then((reviewData) => setReviews(reviewData));
  }, []);

  useEffect(() => {
    reviews.forEach((review) => {
      return reviewsJSX.push(
        <li key={review.review_id}>
          <p aria-label="A link to the review of:" className="linkto_review">
            {review.title}
          </p>
        </li>
      );
    });
  }, [reviews]);

  return <ul>{reviewsJSX ? reviewsJSX : "....Loading"}</ul>;
}
