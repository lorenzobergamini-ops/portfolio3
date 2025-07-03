
document.addEventListener("DOMContentLoaded", () => {
const cookieBanner = document.getElementById("cookie-banner");
const acceptCookies = document.getElementById("accept-cookies");

if (!localStorage.getItem("cookiesAccepted")) {
    cookieBanner.classList.remove("hidden");
}

acceptCookies.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.classList.add("hidden");
});
});

document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".star-rating .star");
  let valoreSelezionato = 0;

  stars.forEach((star, index) => {
    star.addEventListener("mouseover", () => {
      evidenziaStelle(index);
    });

    star.addEventListener("mouseout", () => {
      evidenziaStelle(valoreSelezionato - 1);
    });

    star.addEventListener("click", () => {
      valoreSelezionato = index + 1;
      evidenziaStelle(index);
    });
  });

  function evidenziaStelle(finoAIndex) {
    stars.forEach((star, i) => {
      if (i <= finoAIndex) {
        star.classList.add("active");
      } else {
        star.classList.remove("active");
      }
    });
  }
});
