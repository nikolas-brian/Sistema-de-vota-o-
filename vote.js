const enviar = document.getElementById('enviar');
let voto = null;
let selectedButton = null;

function selectCandidate(candidato, button) {
    // Remove a classe 'selected' de todos os botões
    const buttons = document.querySelectorAll('.candidato button');
    buttons.forEach(btn => btn.classList.remove('selected'));

    // Adiciona a classe 'selected' ao botão clicado
    button.classList.add('selected');
    voto = candidato; // Armazena o voto
}

enviar.addEventListener('click', () => {
    if (voto) {
        alert(`Voto computado com sucesso: ${voto}`);
    } else {
        alert('Selecione um candidato');
    }
});