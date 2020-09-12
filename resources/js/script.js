window.addEventListener('resize', handleResize)
document.querySelector('.mobile-nav').addEventListener('click', handleClick)
function handleResize (e) {
    e.preventDefault();
    const nav = document.querySelector('.main-nav');
    if(window.innerWidth <= 767) {
        nav.style.right = '-500px'
    } else {
        nav.style.right = '0px'
    }
    
}
function handleClick(e) {
    e.preventDefault();
    
    const nav = document.querySelector('.main-nav');
    if(nav.style.right === '-500px') nav.style.right = "-50px"
    else nav.style.right = "-500px"
        
}