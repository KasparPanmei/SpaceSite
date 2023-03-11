const togglebtn = document.getElementsByClassName('toggle-btn')[0]

const nav_links = document.getElementsByClassName('nav-links')[0]

togglebtn.addEventListener('click', () => 
{
    nav_links.classList.toggle('active')
})