function checkMessage() {
    const inputMessage = document.getElementById('decrypted-input').value.toLowerCase();
    const feedback = document.getElementById('feedback');
    const newButton = document.getElementById('novob');

    if (inputMessage === 'lqydgd r vlvwhpd gh ydowruq udslgr') {
        feedback.style.display = 'block';
        feedback.textContent = 'Mensagem correta!';
        newButton.style.display = 'block';
    } else {
        feedback.style.display = 'block';
        feedback.textContent = 'Mensagem incorreta, tente novamente.';
    }
}

function showImage() {
    const image = document.getElementById('hidden-image');
    const showImageButton = document.querySelector('button[onclick="showImage()"]');
    image.style.display = 'block';
    showImageButton.style.display = 'none';
}