const body = document.getElementById("root");
const first_block = document.querySelector("div#first_block");
const second_block = document.querySelector("div#second_block");
const third_block = document.querySelector("div#third_block");
const fourth_block = document.querySelector("div#fourth_block");
const fifth_block = document.querySelector("div#fifth_block");
const sixth_block = document.querySelector("div#sixth_block");
let blocks = [first_block, second_block, third_block, fourth_block, fifth_block, sixth_block];
const about_block = document.querySelector("div.about_block");
const translate_button = document.querySelector("button.translate_button");
const about_button = document.querySelector("button.about_button");
const anchor1 = document.querySelectorAll("header > a")[0];
const anchor2 = document.querySelectorAll("header > a")[1];
const anchor3 = document.querySelectorAll("header > a")[2];
const anchor4 = document.querySelectorAll("header > a")[3];
const anchor5 = document.querySelectorAll("header > a")[4];
const anchor6 = document.querySelectorAll("header > a")[5];
const anchors = [anchor1, anchor2, anchor3, anchor4, anchor5, anchor6];

let offset = 0; // basically active block index
let fired = false; // cooldown parameter for scrolling
let k = true; // true - no about block showing false - about block showing, parameter for about block
let ruen = false; // false - ru true - en, translation parameter
if(localStorage.getItem("ruen")) ruen = localStorage.getItem("ruen") === "true" ? true : false;
else localStorage.setItem("ruen", false);

setActiveLink();


const le_text = {
//  About/О сайте
    aboutRU1: "Данный сайт посвящен цитатам персонажей вселенной <a href=\"https://www.youtube.com/@finchbirdstudio\">Freaked Fleapit</a>. Звездочкой/астериксом (*) помечены те реплики, что были неофициально переведены с английского языка.",
    aboutRU2: "По сути, все права на интеллектуальную собственность, что представляет данный сайт, большая часть его текста и изображений персонажей, должны переходить студии Finch Bird Studio, однако я не знаю, хотят ли они их иметь или иметь в целом что-то общее с этим сайтом. Вам это реально надо? И придут ли к моей двери авторы шрифта, что я использую для элементов интерфейса и этого текста? Если это правда произойдёт, то вы знаете, где меня искать.",
    aboutEN1: "This site is dedicated to character quotes from <a href=\"https://www.youtube.com/@finchbirdstudio\">Freaked Fleapit</a> universe. Quotes marked with a star/asterisk (*) are unofficially translated from their original language.",
    aboutEN2: "If you think about it, all rights for intellectual property, such as this site, most of it's text and images of characters, are reserved to Finch Bird Studio, but I don't know if they want to have them or have anything to do with this site. Do you really need this? And will authors of this font, which I am using for user interface elements and this text, come banging at my door? If it really happens, you know where to search me.",
//  Buttons/Кнопки
    buttonRU1: "О сайте",
    buttonRU2: "Закрыть",
    buttonEN1: "About",
    buttonEN2: "Close",
//  Quotes and names/Цитаты и имена
    QKeylaEN: "Keyla:<br/><br/>I'm, not sleeping! I'm just resting my eyes...",
    QKeylaRU: "Кейла:<br/><br/>Я не сплю! Я просто даю своим глазам отдых...*",
    QRubyEN: "Ruby:<br/><br/>---",
    QRubyRU: "Руби:<br/><br/>---",
    QBellboyEN: "Bellboy:<br/><br/>---",
    QBellboyRU: "Беллбой:<br/><br/>---",
    QFasariaEN: "Fasaria:<br/><br/>---",
    QFasariaRU: "Фасария:<br/><br/>---",
    QSJuneEN: "Sister June:<br/><br/>---",
    QSJuneRU: "Сестра Джун:<br/><br/>---",
    QNewbieEN: "Newbie/Endie:<br/><br/>---",
    QNewbieRU: "Новичок/Энди:<br/><br/>---",
    KeylaEN: "Keyla",
    KeylaRU: "Кейла",
    RubyEN: "Ruby",
    RubyRU: "Руби",
    BellboyEN: "Bellboy",
    BellboyRU: "Беллбой",
    FasariaEN: "Fasaria",
    FasariaRU: "Фасария",
    SJuneEN: "Sister June",
    SJuneRU: "Сестра Джун",
    NewbieEN: "Endie",
    NewbieRU: "Энди"
};

function setText(){
    translate_button.innerHTML = ruen ? "EN" : "RU";
    about_button.innerHTML = k ? (ruen ? le_text.buttonEN1 : le_text.buttonRU1) : (ruen ? le_text.buttonEN2 : le_text.buttonRU2)
    document.querySelector("div.about_block div:nth-child(1)").innerHTML = ruen ? le_text.aboutEN1 : le_text.aboutRU1;
    document.querySelector("div.about_block div:nth-child(2)").innerHTML = ruen ? le_text.aboutEN2 : le_text.aboutRU2;
    anchor2.innerHTML = ruen ? le_text.KeylaEN : le_text.KeylaRU;
    anchor1.innerHTML = ruen ? le_text.RubyEN : le_text.RubyRU;
    anchor3.innerHTML = ruen ? le_text.BellboyEN : le_text.BellboyRU;
    anchor5.innerHTML = ruen ? le_text.FasariaEN : le_text.FasariaRU;
    anchor4.innerHTML = ruen ? le_text.SJuneEN : le_text.SJuneRU;
    anchor6.innerHTML = ruen ? le_text.NewbieEN : le_text.NewbieRU;
    first_block.children[0].innerHTML = ruen ? le_text.QRubyEN : le_text.QRubyRU;
    second_block.children[0].innerHTML = ruen ? le_text.QKeylaEN : le_text.QKeylaRU;
    third_block.children[0].innerHTML = ruen ? le_text.QBellboyEN : le_text.QBellboyRU;
    fourth_block.children[0].innerHTML = ruen ? le_text.QSJuneEN : le_text.QSJuneRU;
    fifth_block.children[0].innerHTML = ruen ? le_text.QFasariaEN : le_text.QFasariaRU;
    sixth_block.children[0].innerHTML = ruen ? le_text.QNewbieEN : le_text.QNewbieRU;
}

window.onload = setText;

translate_button.addEventListener("click", () => {
    if (localStorage.getItem("ruen") === "true") localStorage.setItem("ruen", "false");
    else localStorage.setItem("ruen", "true");
    
    ruen = ruen ? false : true;
    setText();
})

function setActiveLink(about=false){
    if (!about){
        anchors.forEach((element) => {element.classList.remove("link_active")});
        anchors[offset].classList.add("link_active");
        blocks[offset].scrollIntoView({behavior: 'smooth'});
    }
    else{
        anchors.forEach((element) => {element.classList.remove("link_active")})
    }
}


anchor1.addEventListener("click", () => {offset = 0; setActiveLink()});
anchor2.addEventListener("click", () => {offset = 1; setActiveLink()});
anchor3.addEventListener("click", () => {offset = 2; setActiveLink()});
anchor4.addEventListener("click", () => {offset = 3; setActiveLink()});
anchor5.addEventListener("click", () => {offset = 4; setActiveLink()});
anchor6.addEventListener("click", () => {offset = 5; setActiveLink()});

document.querySelector("button.about_button").addEventListener("click", () => {
    let left = k ? 0 : 100;
    about_button.innerHTML = k ? (ruen ? le_text.buttonEN2 : le_text.buttonRU2) : (ruen ? le_text.buttonEN1 : le_text.buttonRU1)
    k ? setActiveLink(true) : setActiveLink()
    k = k ? false : true;
    about_block.style = "left: "+left+"vw";
});


document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchmove', handleTouchMove);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
    return evt.touches ||      // browser API
    evt.originalEvent.touches; // jQuery
}
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
            let left = 0;
            about_button.innerHTML = ruen ? le_text.buttonEN2 : le_text.buttonRU2
            setActiveLink(true)
            k = false;
            about_block.style = "left: "+left+"vw";
        } else {
            let left = 100;
            about_button.innerHTML = ruen ? le_text.buttonEN1 : le_text.buttonRU1
            setActiveLink()
            k = true;
            about_block.style = "left: "+left+"vw";
            
        }                       
    } else {
        if ( yDiff > 0 && offset < 5 && k) {
            offset++;
            anchors.forEach((element) => {element.classList.remove("link_active")});
            anchors[offset].classList.add("link_active");
            blocks[offset].scrollIntoView({behavior: 'smooth'});
        } else if (yDiff < 0 && offset > 0 && k) { 
            offset--;
            anchors.forEach((element) => {element.classList.remove("link_active")});
            anchors[offset].classList.add("link_active");
            blocks[offset].scrollIntoView({behavior: 'smooth'});
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;
};


window.onwheel = function(event) {
    if (!fired && k){
        if (event.deltaY > 0 && offset < 5){
            offset++;
            setActiveLink();
        }
        if (event.deltaY < 0 && offset > 0){
            offset--;
            setActiveLink();
        }
        fired = true;
        setTimeout(() => {fired = false}, 700)
    }
};