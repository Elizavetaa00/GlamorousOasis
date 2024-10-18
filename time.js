// Время для записи
const availableTimes = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];

// Загружаем список времени
function loadTimes() {
    const timeList = document.getElementById('timeList');
    timeList.innerHTML = '';

    availableTimes.forEach(time => {
        const timeItem = document.createElement('div');
        timeItem.classList.add('time-item');
        timeItem.innerText = time;
        timeItem.onclick = () => selectTime(time);
        timeList.appendChild(timeItem);
    });
}

function selectTime(time) {
    localStorage.setItem('selectedTime', time);
    alert(`Вы выбрали время: ${time}`);
}

function confirmAppointment() {
    const master = localStorage.getItem('selectedMaster');
    const time = localStorage.getItem('selectedTime');

    if (master && time) {
        alert(`Вы успешно записаны к ${master} на ${time}`);
        console.log("Redirecting to confirmation.html");
        window.location.href = 'confirmation.html';
    } else {
        alert('Пожалуйста, выберите время.');
    }
}

function proceedToTime() {
    const selectedMaster = localStorage.getItem('selectedMaster');
    
    if (selectedMaster) {
        window.location.href = 'time.html';
    } else {
        alert('Пожалуйста, выберите мастера.');
    }
}

window.onload = loadTimes;
