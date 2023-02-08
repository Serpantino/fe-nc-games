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
    const res = await fetch(`https://nc-games-test.onrender.com/api/reviews/${id}/comments`);
    const commentData = await res.json();
    return commentData;
  } catch (error) {
    console.error(error);
  }
}
