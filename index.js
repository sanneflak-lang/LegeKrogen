import { fetchProducts, fetchQuestions, fetchReviews } from "./js/api/api.js";

import { renderHeader } from "./js/komponenter/header.js";
import { burgerMenu } from "./js/komponenter/burgerMenu.js";
import { renderFooter } from "./js/komponenter/footer.js";
import { renderKundeklub } from "./js/komponenter/kundeklub.js";
import { renderProducts } from "./js/komponenter/productList.js";
import { renderCart } from "./js/komponenter/cartList.js";
import { renderQuestions } from "./js/komponenter/questionsList.js";
import { renderReviews } from "./js/komponenter/reviewsList.js";

renderHeader();
burgerMenu();
renderFooter();
renderKundeklub();

const productsContainer = document.querySelector(".products-list");

const recommendedProductsContainer = document.querySelector(
  ".recommended-products-list",
);

const products = await fetchProducts();

if (recommendedProductsContainer) {
  const recommendedProducts = products.data
    .filter((product) => product.recommended === true)
    .slice(0, 3);

  renderProducts(recommendedProducts, ".recommended-products-list");
}

if (productsContainer) {
  renderProducts(products.data);
}

if (productsContainer) {
  renderProducts(products.data);
}

const cartContainer = document.querySelector(".cart-list");

if (cartContainer) {
  renderCart();
}

console.log("RENDER PRODUCTS KØRT");

const questions = await fetchQuestions();

console.log("Questions:", questions);

const questionsContainer = document.querySelector(".questions-list");

if (questionsContainer) {
  renderQuestions(questions.data);
}


const reviews = await fetchReviews();

console.log("Reviews:", reviews);

const reviewsContainer = document.querySelector(".udtagelser");

if (reviewsContainer) {
  renderReviews(reviews.data);
}