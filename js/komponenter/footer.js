export function renderFooter() {
  const footer = document.querySelector(".footer-container");

  if (!footer) {
    return;
  }

  footer.innerHTML = `
        <div class="footer-inner">

            <div class="footer-section">
                <h3>Kundeservice</h3>

                <p>kontakt@legekrogen.dk</p>
                <p>+45 23 45 67 89</p>
            </div>


            <div class="footer-section">
                <h3>Følg os</h3>

                <div class="socials">

                    <a href="#" aria-label="Facebook">
                        <i class="fa-brands fa-facebook"></i>
                    </a>

                    <a href="#" aria-label="Instagram">
                        <i class="fa-brands fa-instagram"></i>
                    </a>

                </div>
            </div>

        </div>
    `;
}
