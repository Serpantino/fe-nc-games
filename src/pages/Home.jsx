import { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";
import styles from "./Home.module.css";
import ReviewList from "./ReviewList";
import Review from "./Review";
import Categories from "./Categories";

export default function Home() {
  const [individualPage, setIndividualPage] = useState(false); //useRef?
  const [selectedReview, setSelectedReview] = useState();
  const currentLocation = useLocation();

  useEffect(() => {
  
    if (!currentLocation.pathname.includes('/review/')) {
      setIndividualPage(false);
    }
  }, [individualPage, selectedReview, currentLocation]);



  return (
    <main className={styles.container_home}>
      {currentLocation.pathname.includes('/categories') && <Categories />}
      {!individualPage &&  currentLocation.pathname.includes('/reviews') && <ReviewList setIndividualPage={setIndividualPage} setSelectedReview={setSelectedReview} selectedReview={selectedReview}/>}
      {individualPage && <Review selectedReview={selectedReview} setSelectedReview={setSelectedReview}/>}
    </main>
  );
}
