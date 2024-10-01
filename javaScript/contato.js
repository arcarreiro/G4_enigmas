document.getElementById('bt-submit').addEventListener('click', function (event) {
    event.preventDefault();  // Impede o envio do formulário e o recarregamento da página

    const nome = document.getElementById('exampleInputNome').value;
    const email = document.getElementById('exampleInputEmail1').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        fetch("https://api.elasticemail.com/v2/email/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                "apikey": "33CC23DFF35280119899F39FF364A233D4648E7C55C52C45C5ED8A9604354EC98BB5009419AE4E1B17EECA6447969BD9", // Substitua com sua chave de API ElasticEmail
                "subject": `${nome}, obrigado por entrar em contato!`,
                "from": email,
                "to": email,
                "bodyHtml": `Nome: ${nome} <br> Email: ${email} <br> Mensagem: ${mensagem}`,
                "isTransactional": false
            })
        }).then(
            response => response.json()
        ).then(
            data => {
                if (data.success) {
                    alert('Mensagem enviada com sucesso!');
                    location.reload();
                } else {
                    alert('Erro ao enviar a mensagem: ' + data.error);
                }
            }
        ).catch(
            error => alert('Falha ao enviar a mensagem: ' + error)
        );
    } else {
        alert('Preencha todos os campos!');
    }
});
