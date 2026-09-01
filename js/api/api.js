const BASE_URL = "https://legekrogen-9n6uv.ondigitalocean.app";

export async function fetchProducts() {
  const response = await fetch(`${BASE_URL}/products`);
  const data = await response.json();

  return data;
}

export async function fetchReviews() {
  const response = await fetch(`${BASE_URL}/reviews`);

  const data = await response.json();

  return data;
}

export async function fetchQuestions() {
  const response = await fetch(`${BASE_URL}/qandas`);

  const data = await response.json();

  return data;
}