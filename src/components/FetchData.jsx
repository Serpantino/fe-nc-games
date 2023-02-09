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

export async function PatchReviewVotes(review_id, votes) {
  try {
    // console.log("patch attempt", review_id, votes);
    // const res = await fetch(
    //   `https://nc-games-test.onrender.com/api/reviews/${review_id}`,
    //   {
    //     method: "PATCH",
    //     body: JSON.stringify({ inc_votes: votes }),
    //     headers: { "Content-type": "application/json; charset=UTF-8" }
    //   }
    // );
    // const data = res.json();

    const res = await axios.patch(`https://nc-games-test.onrender.com/api/reviews/${review_id}`, {inc_votes: votes});
    const data = res.json();
    console.log("patch", data);
  } catch (error) {
    console.error(error);
  }
}
