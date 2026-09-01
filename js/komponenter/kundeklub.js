export function renderKundeklub() {
  const container = document.querySelector(".kundeklub-container");

  if (!container) {
    return;
  }

  container.innerHTML = `
        <p>Kunne du også tænke dig at blive medlem af vores</p>

        <h3>Kundeklub?</h3>

        <button class="kundeclub-BTN">
            <a href="subscribe.html">BLIV MEDLEM NU!</a>
        </button>
    `;
}
