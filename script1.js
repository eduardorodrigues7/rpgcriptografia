function checkMessage() {
    const inputMessage = document.getElementById('input-message').value.toLowerCase();
    const feedback = document.getElementById('feedback');
    const newButton = document.getElementById('new-button');

    if (inputMessage === 'missao') {
        feedback.style.display = 'block';
        feedback.textContent = 'Mensagem correta!';

        newButton.style.display = 'block';
    } else {
        feedback.style.display = 'block';
        feedback.textContent = 'Mensagem incorreta, tente novamente.';
    }
}