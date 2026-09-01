
export function renderReviews(reviews) {
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
