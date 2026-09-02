
export function renderReviews(reviews) {
    console.log("RENDER REVIEWS KØRER", reviews);
  const container = document.querySelector(".udtagelser");
  container.innerHTML = reviews
    .map((review) => {
      return `
            <article class="udtalelse">

                <p>
                    “${review.description}”
                </p>

                <p>
                    ${review.name}
                </p>

            </article>
        `;
    })
    .join("");

}
