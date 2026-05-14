const WHATSAPP_NUMBER = "5514998765432";

const DEFAULT_MESSAGE =
  "Olá! Vim pelo site e gostaria de fazer um orçamento para ar-condicionado.";

// lucide
lucide.createIcons();

// whatsapp buttons
const buttons = document.querySelectorAll(".js-whatsapp");

buttons.forEach((button) => {

  button.addEventListener("click", (event) => {

    event.preventDefault();

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

    window.open(url, "_blank");

  });

});
