import { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";
import ReviewList from "./ReviewList";
import Review from "./Review";

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
    <main>
      {!individualPage && <ReviewList setIndividualPage={setIndividualPage} setSelectedReview={setSelectedReview} selectedReview={selectedReview}/>}
      {individualPage && <Review selectedReview={selectedReview}/>}
    </main>
  );
}
