//модальное окно
//получаем кнопки ухзнать больше, закрыть модал окно а так же само модал окно

let more = document.querySelector('.more'),
    descBtn = document.querySelectorAll('.description-btn'),
    overlay = document.querySelector('.overlay'),
    closs = document.querySelector('.popup-close');
//вешаем на показать больше событие чтобы всплыло модал окно и вешаем анимацию на его всплывание и запрещаем скролить
more.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash'); //повесил анимацию из стилей на кнопку
    document.body.style.overflow = 'hidden';
});


for (let i = 0; i < descBtn.length; i++) {
    descBtn[i].addEventListener('click', function () {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
}

//закрываем модал окно кнопкой крестик вешая на нее событие 
closs.addEventListener('click', function () {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
});