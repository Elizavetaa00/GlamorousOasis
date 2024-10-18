// Мастера для услуги
const masters = {
    'nail': [
        { 
            name: 'Екатерина Большакова', 
            experience: '5 лет', 
            images: ['photo_2024-10-07_23-02-38.jpg','photo_2024-10-07_23-02-46.jpg'] 
        },
        { 
            name: 'Мария Смирнова', 
            experience: '3 года', 
            images: ['photo_2024-10-07_23-02-30.jpg','photo_2024-10-07_23-02-23.jpg'] 
        },
    ],
    'hairstylist': [
        { 
            name: 'Елизаветта Большакова', 
            experience: '4 года', 
            images: ['photo_2024-10-07_23-20-18.jpg','photo_2024-10-07_23-20-36.jpg'] // Пустой массив, если нет фото
        },
        { 
            name: 'Ольга Кузнецова', 
            experience: '6 лет', 
            images: ['photo_2024-10-07_23-20-29.jpg','photo_2024-10-07_23-20-47.jpg'] 
        },
    ],
    'cosmetolog': [
        { 
            name: 'Евгащина Дарья', 
            experience: '7 лет', 
            images: ['photo_2024-10-07_23-42-32.jpg','photo_2024-10-07_23-42-40.jpg'] 
        },
        { 
            name: 'Романова Наталья', 
            experience: '2 года', 
            images: ['photo_2024-10-07_23-42-55.jpg','photo_2024-10-07_23-42-46.jpg'] 
        },
    ]
};

// Загружаем список мастеров и показываем сразу два фото под каждым
function loadMasters(serviceType) {
    const masterList = document.getElementById('masterList');
    masterList.innerHTML = '';

    masters[serviceType].forEach(master => {
        const masterItem = document.createElement('div');
        masterItem.classList.add('service');
        
        //инфа мастера
        const masterInfo = `
            <div class="service-description">
                <strong>${master.name}</strong>
                <p>Опыт: ${master.experience}</p>
            </div>
        `;

        // фотки
        const imagesHtml = master.images.slice(0, 2).map(src => 
            `<img src="${src}" alt="Пример работы ${master.name}" class="work-image">`
        ).join('');

        masterItem.innerHTML = masterInfo + imagesHtml;
        
        masterItem.onclick = () => selectMaster(master.name);
        masterList.appendChild(masterItem);
    });
}

function selectMaster(masterName) {
    localStorage.setItem('selectedMaster', masterName);
    alert(`Вы выбрали мастера: ${masterName}`);


document.getElementById('proceedToTimeButton').onclick = proceedToTime;

    
    // прогрузка
    const selectedMaster = masters[localStorage.getItem('selectedServiceType')].find(master => master.name === masterName);
    if (selectedMaster && selectedMaster.images) {
        showMasterImages(selectedMaster.images);
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
window.onload = () => {
    const serviceType = localStorage.getItem('selectedServiceType');
    if (serviceType) {
        loadMasters(serviceType);
    }
};