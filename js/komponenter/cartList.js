function updateQuantity(productId, change) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];


  const product = cart.find((product) => product._id === productId);

  if (!product) {
    return;
  }

  product.quantity += change;

  if (product.quantity <= 0) {
    const updatedCart = cart.filter((product) => product._id !== productId);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  } else {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  renderCart();
}

export function renderCart() {
  const container = document.querySelector(".cart-list");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalPrice = 0;

  if (cart.length === 0) {
    container.innerHTML = `
            <p>Din kurv er tom.</p>
        `;

    return;
  }

  cart.forEach((product) => {
    totalPrice += product.price * product.quantity;
  });
  
  container.innerHTML = cart
    .map((product) => {
      return `
            <article class="cart-card">

                <img
                    src="${product.image}"
                    alt="${product.title}"
                >

                <div>
                    <h2>${product.title}</h2>
                    
                    <p>${product.description}</p>
                    
                    <p class="card-pris">${product.price} kr.</p>
                    
                    <div class="quantity">
                        <button 
                            class="minus" 
                            data-id="${product._id}">
                            −
                        </button>

                        <span>${product.quantity}</span>

                        <button 
                            class="plus" 
                            data-id="${product._id}">
                            +
                        </button>

                    </div>


                    <button 
                             class="remove-product" 
                             data-id="${product._id}">
                             Fjern
                            </button>

                </div>

            </article>
        `;
    })
    .join("");


    const totalContainer = document.querySelector(".cart-total");

    totalContainer.innerHTML = `
  <h2>Samlet pris: ${totalPrice} kr.</h2>
`;

  const plusButtons = document.querySelectorAll(".plus");

  const minusButtons = document.querySelectorAll(".minus");

  plusButtons.forEach((button) => {
    button.addEventListener("click", () => {
      updateQuantity(button.dataset.id, 1);
    });
  });

  minusButtons.forEach((button) => {
    button.addEventListener("click", () => {
      updateQuantity(button.dataset.id, -1);
    });
  });



  const removeButtons = document.querySelectorAll(".remove-product");
  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.id;
  
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
      const updatedCart = cart.filter((product) => product._id !== productId);
  
      localStorage.setItem("cart", JSON.stringify(updatedCart));
  
      renderCart();
    });
  });



}


