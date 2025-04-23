document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    let campoA = parseFloat(document.getElementById("bloco_1").value);
    let campoB = parseFloat(document.getElementById("bloco_2").value);
    let mensagem = document.getElementById("mensagem");

    if (campoB > campoA) {
        alert("Bloco 2 é maior que o bloco 1, logo o formulário é válido")
        mensagem.textContent = "Formulário válido! Campo B é maior que Campo A.";
        mensagem.style.color = "blue";
        mensagem.style.backgroundColor= "green";
    } else {
        alert("Tente novamente, o Bloco 2 deve ser maior que o bloco 1")
        mensagem.textContent = "Erro! Campo B deve ser maior que Campo A.";
        mensagem.style.color = "blue";
        mensagem.style.backgroundColor="red";
    }
});
