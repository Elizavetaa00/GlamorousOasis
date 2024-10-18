window.onload = function() {
    const master = localStorage.getItem('selectedMaster');
    const time = localStorage.getItem('selectedTime');
    const serviceType = localStorage.getItem('selectedServiceType');

    if (master && time && serviceType) {
        const confirmationMessage = `Вы успешно записаны к ${master} на ${time}.`;
        document.getElementById('confirmationMessage').innerText = confirmationMessage;
    } else {
        document.getElementById('confirmationMessage').innerText = 'К сожалению, информация о записи недоступна.';
    }
};

function goToHomePage() {
    window.location.href = 'index.html';
}