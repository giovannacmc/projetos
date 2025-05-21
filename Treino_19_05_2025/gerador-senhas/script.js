function gerarSenha() {
    const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const especiais = "!@#$%^&*()_+";

    let tamanho = document.getElementById("tamanho").value;
    let incluirNumeros = document.getElementById("numeros").checked;
    let incluirEspeciais = document.getElementById("especiais").checked;
    let incluirMaiusculas = document.getElementById("maiusculas").checked;

    let caracteres = letrasMinusculas;
    if (incluirMaiusculas) caracteres += letrasMaiusculas;
    if (incluirNumeros) caracteres += numeros;
    if (incluirEspeciais) caracteres += especiais;

    if (caracteres.length === 0) {
        alert("Selecione pelo menos um tipo de caractere!");
        return;
    }

    let senha = "";
    for (let i = 0; i < tamanho; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    document.getElementById("senha").textContent = senha;
    console.log("Senha gerada: " + senha); // Para testes
}

function copiarSenha() {
    const senha = document.getElementById("senha").textContent;
    if (!senha) {
        alert("Nenhuma senha foi gerada ainda!");
        return;
    }
    navigator.clipboard.writeText(senha).then(() => {
        alert("Senha copiada para a área de transferência!");
    });
}
