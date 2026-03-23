// seleciono o formulário da página
const form = document.querySelector("form");

// adiciono um evento quando o formulário for enviado
form.addEventListener("submit", function(e) {
    
    e.preventDefault(); // impede a página de recarregar

    // pego os valores digitados pelo usuário
    const nome = document.querySelector("input[type='text']").value;
    const email = document.querySelector("input[type='email']").value;
    const mensagem = document.querySelector("textarea").value;

    // verifico se algum campo está vazio
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos!");
        return; // para o envio
    }

    // simulação de envio do formulário
    alert("Mensagem enviada com sucesso! 🚀");

    // limpo os campos depois do envio
    form.reset();
});