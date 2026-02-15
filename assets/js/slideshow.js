

const show = {
    slide_1: {
        title: 'CrashCTRL',
        desktop: ['../assets/images/products/CrashCTRL-w-1.png','../assets/images/products/CrashCTRL-w-2.png','../assets/images/products/CrashCTRL-w-3.png','../assets/images/products/CrashCTRL-w-4.png','../assets/images/products/CrashCTRL-w-5.png'],
        text: '123'
    },
    slide_2: {
        title: 'Matters of the Heart',
        mobile: ['../assets/images/products/MOH-m-1.png','../assets/images/products/MOH-m-2.png','../assets/images/products/MOH-m-3.png','../assets/images/products/MOH-m-4.png'],
        tablet: ['../assets/images/products/MOH-t-1.png','../assets/images/products/MOH-t-2.png','../assets/images/products/MOH-t-3.png','../assets/images/products/MOH-t-4.png'],
        desktop: ['../assets/images/products/MOH-w-1.png','../assets/images/products/MOH-w-2.png','../assets/images/products/MOH-w-3.png','../assets/images/products/MOH-w-4.png'],
        text: 'abc'
    },
    slide_3: {
        title: 'SOS',
        mobile: ['../assets/images/products/SOS-m-1.png','../assets/images/products/SOS-m-2.png'],
        tablet: ['../assets/images/products/SOS-t-1.png','../assets/images/products/SOS-t-2.png'],
        desktop: ['../assets/images/products/SOS-w-1.png','../assets/images/products/SOS-w-2.png'],
        text: 'xyz'
    }
}
//console.log(show);


let num = 0;
let screenshots;

function change_slide(n) {
    let slide = slides.querySelector('img');
    
    console.log(slide);
    //console.log(show);

    if (slide) {
        Object.entries(show).forEach(([key]) => {
            if (slide.id == key && num < show[key].desktop.length || num == 0) {
                num += n;
                screenshots = show[key].desktop.length;
                load_slides(key);

                
    
                console.log(key);
                console.log(show[key].desktop);
                console.log(show[key].desktop.length);
                console.log('num: ' + num);
                console.log('n: ' + n);
            } 
            
            if (slide.id == key && num >= show[key].desktop.length || num == -1) {
                num = 0;
                load_slides(key);

                console.log(show[key]);
                console.log(show[key].desktop);
                console.log(show[key].desktop.length);
                console.log('num: ' + num);
                console.log('n: ' + n);
            }
        });
        /*
        let dot = document.createElement('span');
        dot.className = 'dot';
        document.getElementById('pagination').appendChild(dot);
        */
    }
}


const slide_containers = document.querySelectorAll('slides');

const open_slides_button = document.querySelectorAll('.show_button');



open_slides_button.forEach(btn => {
    btn.addEventListener('click', (element) => {
        element.preventDefault();
        const current_slide = element.target.closest('.slides');
        let preview_slide = document.getElementById('slides');

        preview_slide.lastElementChild.id = current_slide?.id;
        //preview_slide.lastElementChild.setAttribute('id', preview_slide.lastElementChild.id);
        console.log(preview_slide.lastElementChild.id);

        console.log(current_slide);
        console.log(current_slide?.id);
        console.log(preview_slide);
        console.log(preview_slide?.id);
        console.log(preview_slide.lastElementChild);
        console.log(preview_slide.lastElementChild.id);

        /*
        preview_slide.lastElementChild.src = show.slide_2.mobile[num];
        preview_slide.lastElementChild.srcset = show.slide_2.tablet[num] + ' 900w,' + show.slide_2.desktop[num] + ' 1000w';
        preview_slide.lastElementChild.alt = show.slide_2.text;
        */

        load_slides(preview_slide.lastElementChild.id);
        console.log(load_slides(preview_slide.lastElementChild.id));



        /*
        const card = element.target.closest('.show_button');
        const selected_slide = card?.id;
        const path = selected_slide ? show[selected_slide] : null;

        if (path) {
            console.log(card);
            console.log(selected_slide);
            console.log(path);
            addModule(path, 'modal-content');
        }
        */
    });
});

/*
function pagination() {
    for (let i = 0; i <= num; i++) {
        console.log(num);
        let dot = document.createElement('span');
        dot.className = 'dot';
        document.getElementById('pagination').appendChild(dot);
    }

}
*/
/*
function pagination() {
    /*
    let dot = document.createElement('span') ;
    dot.className = 'dot';
    dot += num;
    document.getElementById('pagination').appendChild(dot);
    

    for (let i; i = num;) {
        console.log(num);
        let dot = document.createElement('span');
        dot.className = 'dot';
        document.getElementById('pagination').appendChild(dot);
    }
}
*/



function button_listeners() {
    const preview_button = document.querySelectorAll('.preview_button');
    const next_slide = document.getElementById('next'); 
    const prev_slide = document.getElementById('prev');
    
    preview_button.forEach(btn => {
        btn.addEventListener('click', async (element) => {
            await element.preventDefault();
        });
    });

    next_slide.addEventListener('click', async () => {
        change_slide(1);
    });

    prev_slide.addEventListener('click', async () => {
        change_slide(-1);
    });
}


function load_slides(slide_id) {

    if (!preview || !slides) return;

    let slide = slides.querySelector('img');
    let title = slide.closest('#preview_title');
    let page = slide.closest('#preview_page');

    if (slide) {
        slide.id = slide_id;
        page = num + 1 + '/' + screenshots;

        switch (slide.id) {
            case 'slide_2':
                //slide.id = 'slide_2';
                slide.src = show.slide_2.mobile[num];
                slide.srcset = show.slide_2.tablet[num] + ' 900w,' + show.slide_2.desktop[num] + ' 1000w';
                slide.alt = show.slide_2.text;
                title = show.slide_2.title + ' ' + page;
                //title.textContent = title;
                //page.textContent = page;
                console.log('F');

                console.log(slide);
                console.log(slide.src);
                //console.log(title.innerHTML);
                //console.log(page.innerHTML);
                break;
            case 'slide_3':
                //slide.id = 'slide_3';
                slide.src = show.slide_3.mobile[num];
                slide.srcset = show.slide_3.tablet[num] + ' 900w,' + show.slide_3.desktop[num] + ' 1000w';
                slide.alt = show.slide_3.text;
                title = show.slide_3.title + ' ' + page;
                console.log('U');

                console.log(slide);
                console.log(slide.src);
                break;
            default:
                slide.id = 'slide_1';
                slide.src = show.slide_1.desktop[num];
                slide.srcset = show.slide_1.desktop[num] + ' 900w,' + show.slide_1.desktop[num] + ' 1000w';
                slide.alt = show.slide_1.text;
                title = show.slide_1.title + ' ' + page;
                console.log('C');

                console.log(slide);
                console.log(slide.src);
        }
        console.log(title);
        console.log(page);

        console.log('slide: ' + slide);
    } else { //slide.id != 'slide_1') {
        console.log('slide: ' + slide);

        slide = document.createElement('img');
        slide.id = 'slide_1';
        slide.src = show.slide_1.desktop[num];
        slide.srcset = show.slide_1.desktop[num] + ' 900w,' + show.slide_1.desktop[num] + ' 1000w';
        slide.alt = show.slide_1.text;
        title = show.slide_1.title + ' ' + page;
        slides.appendChild(slide);
        console.log('K');

        console.log('slide: ' + slide);
        console.log(slide.src);
    }
    document.getElementById('preview_title').innerHTML = title;

    

}
//function load_slideshow() {
    if (document.getElementById('products')) {
        document.addEventListener('DOMContentLoaded', async () => {
            await addModule('../components/slideshow.html', 'slideshow');
            const preview = document.getElementById('preview');
            //const slides = preview.getElementsByClassName('slides')[0].getElementsByTagName('img')[0];
            //const slides = preview.getElementById('slides');
            const slides = document.getElementById('slides');
            let preview_slide = document.getElementById('slides');
            console.log(preview_slide);
            console.log(preview_slide.lastElementChild);
            console.log(preview_slide.lastElementChild.id);
            
            load_slides(preview_slide.lastElementChild.id);
            //await pagination();
            await button_listeners();
            await change_slide(num);
            console.log(num);
    
            document.querySelectorAll('.close_slide_button').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log('hi');
                    document.getElementById('modal-overlay').classList.add('hidden');
                    document.getElementById('slideshow').classList.add('hidden');
                    document.removeEventListener('click', load_slides);
                });
            });
        });
    }

    if (document.getElementById('slideshow').childElementCount == 0) {
        document.removeEventListener('DOMContentLoaded', load_slides);
    }
//}

open_slides_button.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('hey');
        document.getElementById('slideshow').classList.remove('hidden');
        document.getElementById('modal-overlay').classList.remove('hidden');
    });
});
/*
close_slides_button.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('hi');
        document.getElementById('modal-overlay').classList.add('hidden');
        document.getElementById('slideshow').classList.add('hidden');
    });
});
*/

/*close_button.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('slideshow').classList.add('hidden');
        document.getElementById('modal-overlay').classList.add('hidden');
    });
});*/

function slides_buttons() {
    //
}