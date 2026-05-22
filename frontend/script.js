const formulario = document.getElementById("formularioReserva");

const modalPagamento = document.getElementById("modalPagamento");
const modalSucesso = document.getElementById("modalSucesso");

const confirmarPagamento = document.getElementById("confirmarPagamento");
const fecharPagamento = document.getElementById("fecharPagamento");
const fecharSucesso = document.getElementById("fecharSucesso");

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    modalPagamento.style.display = "flex";

});

confirmarPagamento.addEventListener("click", function () {

    modalPagamento.style.display = "none";

    modalSucesso.style.display = "flex";

});

fecharPagamento.addEventListener("click", function () {

    modalPagamento.style.display = "none";

});

fecharSucesso.addEventListener("click", function () {

    modalSucesso.style.display = "none";

    formulario.reset();

});