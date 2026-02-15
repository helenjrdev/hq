
async function addModule(module, container) {
    try {
        const response = await fetch(module);
        const component = await response.text();
        document.getElementById(container).innerHTML = component;
    } catch(error) {
        document.getElementById(container).innerHTML = 'The page is unavailable and this error have been reported.';
    }
}

const mq = window.matchMedia('(min-width: 991px)');
const header = document.getElementById('header');
const footer = document.getElementById('footer');
const nav = document.querySelector('header nav', 'footer nav');

function switchViewPort(e) {
    if (e.matches) {
        // Desktop
        document.querySelectorAll('header').forEach(element => {
            element.classList.add('desktop', 'active');
            element.classList.remove('mobile');
        });
        document.querySelectorAll('footer').forEach(element => {
            element.classList.add('desktop', 'active');
            element.classList.remove('mobile');
        });

        
        
        if (nav !== null) {
            nav.remove();
            document.addEventListener('DOMContentLoaded', () => {
                addModule('../components/header_web.html', 'header');
                addModule('../components/footer_web.html', 'footer');
            });
        } else if (header.className.includes('desktop active') && footer.className.includes('desktop active')) {
            document.addEventListener('DOMContentLoaded', () => {
                addModule('../components/header_web.html', 'header');
                addModule('../components/footer_web.html', 'footer');
            });
        } else {
            addModule('../components/header_web.html', 'header');
            addModule('../components/footer_web.html', 'footer');
        }
        
       
    } else {
        // Mobile
        document.querySelectorAll('header').forEach(element => {
            element.classList.add('mobile', 'active');
            element.classList.remove('desktop');
        });
        document.querySelectorAll('footer').forEach(element => {
            element.classList.add('mobile', 'active');
            element.classList.remove('desktop');
        });

        
        
        if (nav !== null) {
            nav.remove();
            document.addEventListener('DOMContentLoaded', () => {
                addModule('../components/header_mobile.html', 'header');
                addModule('../components/footer_mobile.html', 'footer');
                console.log(1);
            });
        } else if (header.className.includes('mobile active') && footer.className.includes('mobile active')) {
            document.addEventListener('DOMContentLoaded', () => {
                addModule('../components/header_mobile.html', 'header');
                addModule('../components/footer_mobile.html', 'footer');
                console.log(2);
            });
        } else {
            addModule('../components/header_mobile.html', 'header');
            addModule('../components/footer_mobile.html', 'footer');
            console.log(3);
        }
    }
}

switchViewPort(mq);

mq.addEventListener('change', switchViewPort);







const icp_button = document.querySelectorAll('.lander');

let profiles = {
    fou: '../../clients/founders.html',
    mgr: '../../clients/managers.html',
    proj: '../../clients/project-managers.html',
    own: '../../clients/owners.html',
    eng: '../../employers/engineering-managers.html',
    dir: '../../employers/engineering-head-dir.html',
    prod: '../../employers/product-managers.html',
    cto: '../../employers/tech-founders.html'
}

icp_button.forEach(btn => {
    btn.addEventListener('click', (element) => {
        element.preventDefault();
        const card = element.target.closest('.lander');
        const persona = card?.id;
        const path = persona ? profiles[persona] : null;

        if (path) {
            console.log(card);
            console.log(persona);
            console.log(path);
            addModule(path, 'modal-content');
        }
    });
});



//const close_button = document.querySelectorAll('.btn-close, .close_slide_button');
const close_button = document.querySelectorAll('.btn-close');
const open_button = document.querySelectorAll('.open-modal');
//const close_slides_button = document.querySelectorAll('.close_slide_button');

open_button.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('modal-overlay').classList.remove('hidden');
        document.getElementById('modal-container').classList.remove('hidden');
    });
});
close_button.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('hello');
        document.getElementById('modal-overlay').classList.add('hidden');
        document.getElementById('modal-container').classList.add('hidden');
    });
});
/**/

