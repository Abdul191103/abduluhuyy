document.addEventListener('DOMContentLoaded', function() {
    const messages = [
        "Aku mencintaimu lebih dari kata-kata bisa mengungkapkan. Setiap detik bersamamu adalah anugerah.",
        "Cintaku padamu adalah kekuatan yang menghidupkan setiap hariku.",
        "Kamu adalah alasan senyumku setiap hari.",
        "Tanpamu, hidupku tak akan sempurna. Aku mencintaimu.",
        "Setiap momen bersamamu adalah kenangan yang tak terlupakan."
    ];
    
    const container = document.querySelector('.container');
    const messageElement = document.querySelector('.love-message');
    const changeMessageButton = document.getElementById('changeMessageButton');

    changeMessageButton.addEventListener('click', function() {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        messageElement.textContent = randomMessage;
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        container.style.backgroundColor = randomColor;
    });
});
