/* import { addToCart } from "./cart.js";

export function renderProducts(products, containerSelector = ".products-list") {
  const container = document.querySelector(containerSelector);

  container.innerHTML = products
    .map((product) => {
      return `
            <article class="card">

                <img 
                    class="card__img"
                    src="${product.image}"
                    alt=""
                >

                <div class="card__body">
                    <p class="card-overskrift">${product.title}</p>
                    <p class="card-text">${product.description}</p>
                    <p class="card-pris">${product.price} kr.</p>
                </div>

                <button class="BTN-cards" data-id="${product._id}">
                  Føj til kurv
                </button>

            </article>
        `;
    })
    .join("");

  const buttons = document.querySelectorAll(".BTN-cards");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.id;
      console.log("Produkt ID:", productId);

      const product = products.find((product) => product._id === productId);

      console.log("Produkt fundet:", product);
      addToCart(product);
    });
  });
}
 */

import { addToCart } from "./cart.js";

export function renderProducts(products, containerSelector = ".products-list") {
  const container = document.querySelector(containerSelector);

  if (!container) {
    return;
  }

  container.innerHTML = products
    .map((product) => {
      return `
        <article class="card">

          <img 
            class="card__img"
            src="${product.image}"
            alt="${product.title}"
          >

          <div class="card__body">
            <p class="card-overskrift">${product.title}</p>
            <p class="card-text">${product.description}</p>
            <p class="card-pris">${product.price} kr.</p>
          </div>

          <button 
            class="BTN-cards" 
            data-id="${product._id}">
            Føj til kurv
          </button>

        </article>
      `;
    })
    .join("");

  const buttons = document.querySelectorAll(".BTN-cards");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.id;

      console.log("Produkt ID:", productId);

      const product = products.find((product) => product._id === productId);

      console.log("Produkt fundet:", product);

      addToCart(product);
    });
  });
}