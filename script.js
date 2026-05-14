const WHATSAPP_NUMBER = "5514996935035";

const DEFAULT_MESSAGE =
  "Olá! Vim pelo site e gostaria de fazer um orçamento para ar-condicionado.";

function buildWhatsAppUrl() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
}

const whatsappButtons =
  document.querySelectorAll(".js-whatsapp");

whatsappButtons.forEach((button) => {

  button.addEventListener("click", (event) => {

    event.preventDefault();

    window.open(
      buildWhatsAppUrl(),
      "_blank"
    );

  });

});