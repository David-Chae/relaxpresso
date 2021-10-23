
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

/************************************************************
* Wifi Illustration selection. 
* Changes the data source when the illustration is clicked.
* Updates the illustration with a counter. 
*************************************************************/

let wifiIllustration = document.getElementById('wifi-illustration');
let wifiCounter = 0;

wifiIllustration.addEventListener("click", function(){

    wifiCounter++;

    if(wifiCounter > 3){
        wifiCounter = 1;
    }

    let full = wifiIllustration.src;
    console.log(full);
    let len = full.len;
    console.log(len);
    let pre = full.slice(0, len-5);
    console.log(pre);
    let currentData = pre + wifiCounter + ".svg";
    wifiIllustration.src = "/img/illustrations/wifi_password_illustration_v" + currentData;
    console.log(wifiIllustration.src);

})

/************************************************************
* Story speech bubble animation. 
* Calls expand function when a pointer hovers over a profile
* photo. Calls shrink function when a pointer moves away from
* a profile photo. 
*************************************************************/

let profiles = document.querySelectorAll('.profile');

profiles.forEach(function(profile){

    let rectangle = $("#" + profile.id + "-photo");
    let speechBubble = $("#" + profile.id + "-speech");

    rectangle.hover(
    function() {
        speechBubble.css({
        "animation-name": "expand",
        "animation-duration": "0.25s"
        });
    },
    function() {
        speechBubble.css({
        "animation-name": "shrink",
        "animation-duration": "0.1s"
        });
    }
    );

});
