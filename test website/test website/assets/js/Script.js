var slideIndex = 0;
var currentSlideIndex = 0;
var slideArray = [];

function Slide(title, subtitle, background, link ) {
   this.title = title;
   this.subtitle = subtitle;
   this.background = background;
   this.link = link;
   this.id = "slide" + slideIndex;
   slideIndex++;
   slideArray.push(this);
}

// ви можете зробити скільки завгодно слайдів

var slide1 = new Slide(
   "Someone",
   "What?",
   "public/images/1.1.png",
   "https://www.pinterest.ru/katyarudkovskay/%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6%D0%B8/"
);


var slide2 = new Slide(
   "Something",
   "Why?",
   "public/images/1.2.png",
   "https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%8B%D0%B5_%D0%B2%D0%BE%D0%BB%D0%BD%D1%8B"
);
var slide3 = new Slide(
   "Somebody",
   "Who?",
   "public/images/1.3.png",
   "https://www.bodo.ua/go/polet-na-vozdushnom-share/"
);


function buildSlider(){
   var myHTML;
   for(var i = 0; i < slideArray.length; i++) {
       myHTML += "<div id='" + slideArray[i].id +
           "' class='singleSlide' style='background-image:url(" + slideArray[i].background + ");'>" +
           "<div class='slideOverlay'>" +
           "<h1 class='T1'>" + slideArray[i].title + "</h1>" +
           "<h4 class='T4'>" + slideArray[i].subtitle + "</h4>" +
           "<a class='slider' href='" + slideArray[i].link + "' target='_blank'>Link</a>" +
           "</div>" +
           "</div>";
   }

   document.getElementById("mySlider").innerHTML = myHTML;
   document.getElementById("slide" + currentSlideIndex).style.left = 0;
}

buildSlider();

function prevSlide(){
   var nextSlideIndex;
   if (currentSlideIndex === 0 ) {
       nextSlideIndex = slideArray.length - 1;
   } else {
       nextSlideIndex = currentSlideIndex - 1;
   }

   document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
   document.getElementById("slide" + currentSlideIndex).style.left = 0;

   document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
   document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");

   currentSlideIndex = nextSlideIndex;
}

function nextSlide(){
   var nextSlideIndex;
   if (currentSlideIndex === (slideArray.length - 1) ) {
       nextSlideIndex = 0;
   } else {
       nextSlideIndex = currentSlideIndex + 1;
   }

   document.getElementById("slide" + nextSlideIndex).style.left = "100%";
   document.getElementById("slide" + currentSlideIndex).style.left = 0;

   document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
   document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");

   currentSlideIndex = nextSlideIndex;
}
