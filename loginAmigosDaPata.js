function fazerCadastro() {
    const mail = document.getElementById('email').value;
    const nome = document.getElementById('name').value
    const senha = document.getElementById('senha').value;
    const confirmsenha = document.getElementById('cfs').value;

    if (senha === confirmsenha) {
        localStorage.setItem('email', mail);
        localStorage.setItem('name', nome)
        localStorage.setItem('senha', senha);
        localStorage.setItem('cfs', confirmsenha);
        alert("Cadastro efetuado com sucesso!");
        carregarLogin()
    }else {

        let element = document.getElementById('senha')
        let element2 = document.getElementById('cfs')
        let element3 = document.getElementById('p01')
        let element4 = document.getElementById('p02')

        element.classList.add('error')
        element2.classList.add('error')
        element3.classList.add('error')
        element4.classList.add('error')
    }
}

function fazerLogin() {
    const mail = document.getElementById('email').value;
    const senha = document.getElementById('senha').value; 

    const userMailLocalStorage = localStorage.getItem('email');
    const userSenhaLocalStorage = localStorage.getItem('senha');

    if((mail===userMailLocalStorage) && (senha===userSenhaLocalStorage)) {
        alert("Login efetuado com sucesso! Gatinhos e Doguinhos te esperam!");
        carregarPage()
    } else {
        alert("Dados incorretos! Tente novamente, os pets te esperam!");
    }
}

function carregarPage() {
    window.location.href = "index.html";
}

function carregarLogin() {
    window.location.href = "loginAmigosDaPata.html";
}

