document.getElementById('bt-submit').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o envio do formulário e o recarregamento da página
    const nome = document.getElementById('exampleInputNome').value;
    const email = document.getElementById('exampleInputEmail1').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "gabriel123.bardasson@gmail.com",
            Password: "CEE1272E6B746EA67B7E2B610843CED21B87",
            To: email,
            From: "gabriel123.bardasson@gmail.com",
            Subject: `${nome}, obrigado por entrar em contato!`,
            Body: `Nome: ${nome} <br> Email: ${email} <br> Mensagem: ${mensagem}`
        }).then(
            () => alert('Mensagem enviada com sucesso!')
        ).catch(
            error => alert('Falha ao enviar a mensagem: ' + error)
        );
    } else {
        alert('Preencha todos os campos!');
    }
    location.reload();
});
