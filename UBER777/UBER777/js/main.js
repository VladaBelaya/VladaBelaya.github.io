document.addEventListener('DOMContentLoaded', () => { // код будет выполнятся после того как загрузили хтмл
    const navY = document.querySelector('.subheader'); // переменная с nav
    let last = 0 | 0; // счетчик
    window.addEventListener('scroll', () => { // выполнение кода при событии скролл 
        const current = window.pageYOffset | 0; // высота окна по оси Y
        current > last ? navY.classList.add('isHide') : navY.classList.remove('isHide') // высота больше 150 и больше чем счетчик ? да, добавляем класс isHide где opacity и др стили : удаляем класс
        last = current; // счетчик = значение окна 
    })
})