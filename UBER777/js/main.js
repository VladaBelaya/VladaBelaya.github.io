document.addEventListener('DOMContentLoaded', () => {
    const navY = document.querySelector('nav');
    let last = 0 | 0;
    window.addEventListener('scroll', () => {
        const current = window.pageYOffset | 0;
        current > 150 && current > last ? navY.classList.add('isHide') : navY.classList.remove('isHide')
        last = current;
    })
})