import axios from 'axios';

export async function FetchReviews() {
  try {
    const res = await fetch("https://nc-games-test.onrender.com/api/reviews");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function FetchReviewComments(id) {
  try {
    const res = await fetch(
      `https://nc-games-test.onrender.com/api/reviews/${id}/comments`
    );
    const commentData = await res.json();
    return commentData;
  } catch (error) {
    console.error(error);
  }
}

export async function PostReviewComment(review_id, comment) {
  console.log(comment, review_id);
  // const body = comment;
  // try {
  //   const res = await fetch(
  //     `https://nc-games-test.onrender.com/api/reviews/${review_id}/comments`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         // "Access-Control-Allow-Origin": "*"
  //       },
  //       body: JSON.stringify(body),
  //     }
  //     );
  //     let data = res.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
    try{
      let res = await axios.post(`https://nc-games-test.onrender.com/api/reviews/${review_id}/comments`,comment)
      let data = res.data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
}
