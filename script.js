function cadastrarAnimal() {

    const nome = document.getElementById('nome').value;
    const nomeLocalStorage = localStorage.getItem('nome');

    alert('Animal cadastrado com sucesso!');
    carregarPage()
}

function carregarPage() {
    window.location.href = "index.html";
}