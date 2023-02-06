export async function FetchReviews() {
  try {
    const res = await fetch("https://nc-games-test.onrender.com/api/reviews");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
