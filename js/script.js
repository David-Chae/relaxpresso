
let slides = document.querySelectorAll('.slide');
let btns = document.querySelectorAll('.btn');
let currentSlide = 1;

///////////////////////////////////////////////////////////////
// Javascript for image slider manual navigation
let manualNav = function(manual){
    slides.forEach((slide) => {
    slide.classList.remove('active');

    btns.forEach((btn) => {
        btn.classList.remove('active');
    });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
    });
});

///////////////////////////////////////////////////////////////
/* Javascript for image slider autoplay navigation
 
let repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
    setTimeout(function(){
        [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');
        });

    slides[i].classList.add('active');
    btns[i].classList.add('active');
    i++;

    if(slides.length == i){
        i = 0;
    }
    if(i >= slides.length){
        return;
    }
    repeater();
    }, 10000);
    }
    repeater();
}
repeat();
*/

///////////////////////////////////////////////////////////////
// Javascript for opening menu items.

const dishs = document.querySelectorAll('.dish')

dishs.forEach(function(dish){
    dish.addEventListener("click", function(e){
        e.preventDefault();

        let dishButton = dish.childNodes[1];
        let dishText = dishButton.childNodes[1];
        let dishName = dishText.childNodes[1];
        let dishIngredients = dishText.childNodes[3];
        let buttonIcon = dishButton.childNodes[3].childNodes[1];
        let dishImg = dish.childNodes[3];

        if (dishButton.style.backgroundColor === '' || dishButton.style.backgroundColor === '#fff' ||
        dishButton.style.backgroundColor === 'rgb(255, 255, 255)'){
              dishButton.style.backgroundColor = '#ff6961';
              dishName.style.color = '#fff';
              dishIngredients.style.color = '#fff';
              dishImg.style.display = "block";
              buttonIcon.name = "chevron-up-outline";
              buttonIcon.style.color = "#fff";
        }else{
              dishButton.style.backgroundColor = '#fff';
              dishName.style.color = '#16A085';
              dishIngredients.style.color = '#16A085';
              dishImg.style.display = "none";
              buttonIcon.name = "chevron-down-outline";
              buttonIcon.style.color = "#16A085";
        }

    })
})



const sides = document.querySelectorAll('.side');

sides.forEach(function(side){
    side.addEventListener("click", function(e){
        e.preventDefault();

        let sideButton = side.childNodes[1];
        let sideText = sideButton.childNodes[1];
        let sideName = sideText.childNodes[1];
        let buttonIcon = sideButton.childNodes[3].childNodes[1];
        let sideImg = side.childNodes[3];

        console.log(side.childNodes);

        if (sideButton.style.backgroundColor === '' || sideButton.style.backgroundColor === '#fff' ||
        sideButton.style.backgroundColor === 'rgb(255, 255, 255)'){
              sideButton.style.backgroundColor = '#ff6961';
              sideName.style.color = '#fff';
              sideImg.style.display = "block";
              buttonIcon.name = "chevron-up-outline";
              buttonIcon.style.color = "#fff";
        }else{
              sideButton.style.backgroundColor = '#fff';
              sideName.style.color = '#16A085';
              sideImg.style.display = "none";
              buttonIcon.name = "chevron-down-outline";
              buttonIcon.style.color = "#16A085";
        }

    })
})



/************************************************************
* Menu selection. 
* Adds selected class name when a menu item has been clicked. 
*************************************************************/ 

let menuItems = document.querySelectorAll('.menu-item');
let menuSets = document.querySelectorAll('.menu-set');

menuItems.forEach(function(menuItem){
    menuItem.addEventListener("click", function(e){
        e.preventDefault();
        // console.log(menuItem.classList);

        for(let i=0; i < menuItems.length; i++){
            menuItems[i].classList.remove('selected');
        }
        menuItem.classList.add('selected');

        for(let i=0; i < menuSets.length; i++){
             menuSets[i].classList.remove('selected');
        }

        let menuSetId = '#' + menuItem.textContent;
        let menuSet = document.querySelector(menuSetId);

        menuSet.classList.add('selected');

    })
})

