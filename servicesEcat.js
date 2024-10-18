
function loadServices(category) {
	const servicesList = document.getElementById('servicesEcat');
	servicesList.innerHTML = '';

	let services = [];
	// console.log(category);
	switch (category) {
		case 'nail':
			services = [
				{ name: 'Наращивание + дизайн', price: '3000-4000 ₽', time: '4 часа', type: 'nail'},
				{ name: 'Наращивание', price: '2600 ₽', time: '3 часа', type: 'nail'},
				{ name: 'Коррекция', price: '1200-1400 ₽', time: '1,5 часа', type: 'nail'}
			];
			break;
		case 'hairstylist':
			services = [
				{ name: 'Карэ', price: '1000-1500 ₽', time: '30 мин', type: 'hairstylist'},
				{ name: 'Оданго', price: '2000-2500 ₽', time: '1 час', type: 'hairstylist'},
				{ name: 'Французский твист', price: '2000-2500 ₽', time: '1 час', type: 'hairstylist'}
			];
			break;
		case 'cosmetolog':
			services = [
				{ name: 'Чистка лица', price: '2500 ₽', time: '120 мин', type: 'cosmetolog'},
				{ name: 'Массаж лица', price: '1800 ₽', time: '120 мин', type: 'cosmetolog'},
				{ name: 'Анти-акне уход', price: '3000 ₽', time: '120 мин', type: 'cosmetolog'}
			];
			break;
		

	}

	// Генерация HTML для услуг
	services.forEach(service => {
		const serviceItem = document.createElement('div');
		serviceItem.classList.add('service-item');
		serviceItem.innerHTML = `
			<label>
				<input type="radio" name="service" value="${service.type}" onchange="checkServiceSelected()">
				${service.name}
			</label>
			<span>${service.price} / ${service.time}</span>
		`;
		servicesList.appendChild(serviceItem);
	});

	// Обновление активной категории
	document.querySelectorAll('.category').forEach(item => {
		item.classList.remove('active');
	});
	document.querySelector(`[onclick="loadServices('${category}')"]`).classList.add('active');
}

// Проверка выбранной услуги
function checkServiceSelected() {
	const selectedService = document.querySelector('input[name="service"]:checked');
	const nextButton = document.getElementById('nextButton');
	nextButton.disabled = !selectedService;
}

function proceedToMaster() {
	const selectedService = document.querySelector('input[name="service"]:checked');
	const nextButton = document.getElementById('nextButton');

	if (selectedService) {
		const serviceType = selectedService.value; // Получаем тип услуги
		localStorage.setItem('selectedServiceType', serviceType); // Сохраняем его в localStorage
		alert('Вы выбрали услугу: ' + selectedService.innerText);
		window.location.href = 'masterSelect.html';
	} else {
		alert('Пожалуйста, выберите услугу.');
	}
}

window.onload = () => loadServices('nail');