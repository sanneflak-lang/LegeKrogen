export function renderHeader() {
  const header = document.querySelector(".header");

  if (!header) {
    return;
  }

  header.innerHTML = `
        <nav class="MainNav wrapper">

            <a href="index.html">
                <img 
                    class="Nav-logo"
                    src="assets/logo/legekrogen_logo.png"
                    alt="Legekrogen"
                >
            </a>

            <div class="burger">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>

            <ul class="mainNav-ul">

            <li class="mainNav-item">
                <a href="index.html" class="mainNav-link">
                    Forsiden
                </a>
            </li>
                <li class="mainNav-item">
                    <a href="products.html" class="mainNav-link">
                        Produkter
                    </a>
                </li>


                <li class="mainNav-item">
                    <a href="subscribe.html" class="mainNav-link">
                        Kundeklub
                    </a>
                </li>

                <li class="mainNav-item">
                    <a href="cart.html" class="mainNav-link">
                        <i class="fa-solid fa-cart-shopping"></i>
                        
                    </a>
                </li>
                <li class="mainNav-item">
                    <a href="questions.html" class="mainNav-link">
                       
                        FAQ
                    </a>
                </li>

            </ul>

        </nav>
    `;
}
