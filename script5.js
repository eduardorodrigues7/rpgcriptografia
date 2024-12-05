let countdown;
let timeLeft = 60;

function startChallenge() {
    document.getElementById('challenge').style.display = 'block';
    document.querySelector('button[onclick="startChallenge()"]').style.display = 'none';

    countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            window.location.href = 'pagina92ruim.html'; // Página para onde redirecionar se o tempo acabar
        } else {
            document.getElementById('timer').textContent = timeLeft;
            timeLeft -= 1;
        }
    }, 1000);
}

function checkPassword() {
    const inputPassword = document.getElementById('decrypted-input').value.toLowerCase();
    const feedbackElement = document.getElementById('feedback');
    const nextPageButton = document.getElementById('next-page-button');
    const correctPassword = 'cipher'; // Substitua pela senha correta

    if (inputPassword === correctPassword) {
        clearInterval(countdown);
        feedbackElement.style.display = 'block';
        feedbackElement.textContent = 'Senha correta!';
        nextPageButton.style.display = 'block';
    } else {
        feedbackElement.style.display = 'block';
        feedbackElement.textContent = 'Senha incorreta, tente novamente.';
    }
}