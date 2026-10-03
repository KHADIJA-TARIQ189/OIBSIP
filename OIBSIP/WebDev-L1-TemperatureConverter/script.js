const input = document.getElementById("value");
const unit = document.getElementById("unit");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");

const toCelsius = { C: v => v, F: v => (v - 32) * 5 / 9, K: v => v - 273.15 };

function convert() {
  errorEl.textContent = "";
  resultEl.innerHTML = "";
  const raw = input.value.trim();

  if (raw === "" || isNaN(Number(raw))) {
    errorEl.textContent = "Please enter a valid number.";
    return;
  }

  const c = toCelsius[unit.value](Number(raw));
  if (c < -273.15) {
    errorEl.textContent = "That is below absolute zero (-273.15 °C). Enter a higher value.";
    return;
  }

  const f = c * 9 / 5 + 32;
  const k = c + 273.15;
  resultEl.innerHTML =
    `<p>${c.toFixed(2)} °C</p><p>${f.toFixed(2)} °F</p><p>${k.toFixed(2)} K</p>`;
}

document.getElementById("convert").addEventListener("click", convert);
input.addEventListener("keydown", e => { if (e.key === "Enter") convert(); });
