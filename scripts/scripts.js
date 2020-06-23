let alerts = function() {
    parentElement = document.createElement('div');
    parentElement.classList.add('alert_list');

    document.body.insertBefore(parentElement, document.querySelector('.contacts'));
}
alerts();

let error = function() {
    errorElement = document.createElement('div');
    errorElement.classList.add('error');
    errorElement.innerHTML = 'Ошибка!';

    parentElement.appendChild(errorElement);
    
    setInterval(() => {document.querySelector('.error').remove()}, 5000);
}

let alert = function() {
    alertElement = document.createElement('div');
    alertElement.classList.add('alert');
    alertElement.innerHTML = 'Привет Мир!';

    parentElement.appendChild(alertElement);
    setTimeout(() => {alertElement.remove()}, 5000);
}

let msg = function() {
    msgElement = document.createElement('div');
    msgElement.classList.add('msg');
    msgElement.innerHTML = 'Сообщение отправлено';

    parentElement.appendChild(msgElement);

    setTimeout(() => {msgElement.remove()}, 5000);
}
alert();    
