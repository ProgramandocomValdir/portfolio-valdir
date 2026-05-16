 // configuração do EmailJS
const SERVICE_ID  = 'service_wutyq25';
const TEMPLATE_ID = 'g9g3r2m';
const PUBLIC_KEY  = 'MEVyTMJvjgXoROu3E';

emailjs.init(PUBLIC_KEY);

// seleciono o formulário da página
const form = document.getElementById("contactForm");

// adiciono um evento quando o formulário for enviado
form.addEventListener("submit", function(e) {

    e.preventDefault(); // impede a página de recarregar

    // pego os valores digitados pelo usuário
    const nome     = document.getElementById("nome").value.trim();
    const email    = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const status   = document.getElementById("statusMsg");
    const btn      = document.getElementById("sendBtn");

    // verifico se algum campo está vazio
    if (!nome || !email || !mensagem) {
        status.textContent = "Por favor, preencha todos os campos!";
        status.style.color = "#f87171";
        return;
    }

    // desabilito o botão durante o envio
    btn.disabled = true;
    btn.textContent = "Enviando...";
    status.textContent = "";

    // envio pelo EmailJS
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name:  nome,
        from_email: email,
        message:    mensagem,
        reply_to:   email
    }).then(function() {
        status.textContent = "✓ Mensagem enviada com sucesso! 🚀";
        status.style.color = "#4ade80";
        form.reset();
        btn.textContent = "Enviar";
        btn.disabled = false;
    }).catch(function() {
        status.textContent = "Erro ao enviar. Tente novamente.";
        status.style.color = "#f87171";
        btn.textContent = "Enviar";
        btn.disabled = false;
    });
});
