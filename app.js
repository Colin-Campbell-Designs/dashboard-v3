//Nav 
const nav = document.querySelector('.nav')
const navButton = document.querySelector('.nav__closeButton');
const navItem = document.querySelectorAll('.nav__item');
const navIcon = document.querySelectorAll('.nav__icon');

navButton.addEventListener('click', e => {
    e.preventDefault();

    if(nav.classList.contains('close')){
        navOpen();
        } else {
           navClosed()
        }
    })

    
    navItem.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
        
            if(nav.classList.contains('close')){
                navOpen();
                } else {
                   navClosed()
                }
            })
    })
       

function navOpen() {
    nav.classList.remove('close')
        nav.classList.add('open');
        navButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        iconDisappear()
    }

    function navClosed() {
            nav.classList.remove('open')
            nav.classList.add('close');
            navButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
            iconShow()
        }

        function iconDisappear() {
            navIcon.forEach(icon => {
                icon.style.display = 'none';
            })
        }

        function iconShow() {
            navIcon.forEach(icon => {
                icon.style.display = 'block';
            })
        }

        