// html button elements

let  exploreButton = document.querySelector('.explore-button');
let headButton = document.querySelector('.head-button');
let restartButton = document.querySelector('.restart');
let yesButton = document.querySelector('.yes');
let trueButton = document.querySelector('.true');
trueButton.style.display ="none";
let falseButton = document.querySelector('.false');
falseButton.style.display ="none";
let herbivoreButton = document.querySelector('.herbivore');
herbivoreButton.style.display ="none";
let carnivoreButton = document.querySelector('.carnivore');
carnivoreButton.style.display ="none";
yesButton.style.display ="none";
let goCaveButton = document.querySelector('.goCave');
goCaveButton.style.display ="none";
let takeEggsButton = document.querySelector('.takeEggs');
takeEggsButton.style.display ="none";
let waitButton = document.querySelector('.wait');
waitButton.style.display ="none";
let keepWanderingButton = document.querySelector('.keepWandering');
keepWanderingButton.style.display ="none";
let noButton = document.querySelector('.no');
noButton.style.display ="none";
// html content elements
let text = document.querySelector('.text');
let pizza = document.querySelector('h2');
let yes2Button = document.querySelector('.yes2');
yes2Button.style.display ="none";
let no2Button = document.querySelector('.no2');
no2Button.style.display ="none";
let move = false;
let foodTime = false;
// html images elements
let start = document.querySelector('.startSubway');
let keepFlying = document.querySelector('.keepFlying');
keepFlying.style.display ="none";
let yes3Button = document.querySelector('.yes3');
yes3Button.style.display ="none";
let no3Button = document.querySelector('.no3');
no3Button.style.display ="none";
    
let choiceAimage = document.querySelector('.choiceAimage');
    choiceAimage.style.display ="none";
let ball = document.querySelector('.ball');
    ball.style.display ="none";
let choiceA1image = document.querySelector('.choiceA1image');
    choiceA1image.style.display ="none";
let choiceA2image = document.querySelector('.choiceA2image');
    choiceA2image.style.display ="none";
let choiceA3image = document.querySelector('.choiceA3image');
    choiceA3image.style.display ="none";
let choiceA4image = document.querySelector('.choiceA4image');
    choiceA4image.style.display ="none";
let choiceA5image = document.querySelector('.choiceA5image');
    choiceA5image.style.display ="none";
let choiceA6image = document.querySelector('.choiceA6image');
    choiceA6image.style.display ="none";
let choiceA7image = document.querySelector('.choiceA7image');
    choiceA7image.style.display ="none";
let choiceA8image = document.querySelector('.choiceA8image');
    choiceA8image.style.display ="none";
let choiceA9image = document.querySelector('.choiceA9image');
    choiceA9image.style.display ="none";
let choiceA10image = document.querySelector('.choiceA10image');
    choiceA10image.style.display ="none";

headButton.addEventListener('click', function() {
    restartButton.style.display="none";
    foodTime=true;
    text.innerHTML = "Pterodactyls were the first flying verterbrates.";
 restartButton.style.display="none";
 yesButton.style.display="none";
 noButton.style.display="none";
 trueButton.style.display="block";
 falseButton.style.display="block";
 start.style.display = "none";
 choiceAimage.style.display ="block";
 exploreButton.style.display="none";
 headButton.style.display="none";
});
restartButton.addEventListener('click', function() {
    foodTime=false;
text.innerHTML = "You are a Pterodactyl you just woke up from a long sleep and you are very hungry. Do you want to fly to go get food?";
start.style.display = "block";
choiceAimage.style.display ="none";
yesButton.style.display="none";
noButton.style.display="none";
exploreButton.style.display="block";
headButton.style.display="block";
    choiceA1image.style.display ="none";
    choiceA2image.style.display ="none";
    choiceA3image.style.display ="none";
    choiceA4image.style.display ="none";
    choiceA5image.style.display ="none";
    choiceA6image.style.display ="none";
    choiceA7image.style.display ="none";
    choiceA8image.style.display ="none";
    choiceA9image.style.display ="none";
    choiceA10image.style.display ="none";
});
trueButton.addEventListener('click', function(){
    restartButton.style.display="block";
    choiceA3image.style.display ="none";
    headButton.style.display ="none";
    trueButton.style.display ="none";
    falseButton.style.display ="none";
    choiceA5image.style.display ="none";
    choiceA4image.style.display ="none";
    text.innerHTML = "You fly above from nest and see a nearby lake covered with foliage, animals and fish. Click on the lake to stop and eat or keep flying"
   keepFlying.style.display ="block";
    choiceA6image.style.display ="block";

});

falseButton.addEventListener('click', function(){
    restartButton.style.display="block";
    choiceA4image.style.display ="none";
    headButton.style.display ="none";
    trueButton.style.display ="none";
    falseButton.style.display ="none";
    choiceA5image.style.display ="none";
    choiceA4image.style.display ="none";
    text.innerHTML = "you fall to the ground as all your ancestors would have before you and are stuck looking for food on the ground."
    choiceA4image.style.display ="block";
});

yesButton.addEventListener('click', function(){
    restartButton.style.display="block";
    choiceA9image.style.display ="none";
    fal
    yesButton.style.display ="none";
    noButton.style.display ="none";
    choiceA10image.style.display ="none";
choiceAimage.style.display ="none";
choiceA5image.style.display ="none";
text.innerHTML = "your dragon can not fly through the heavy winds and falls back to the ground and wind up back where you started"
choiceA10image.style.display ="block";

});
keepFlying.addEventListener('click', function(){
    restartButton.style.display="none";
    keepFlying.style.display ="none";
    text.innerHTML = "You you eventually get so hungry you are forced to land and starve"
    choiceA6image.style.display ="block";
});

pizza.addEventListener("mouseenter", function(){
    if(foodTime==true){
    choiceAimage.style.display ="none";
    restartButton.style.display="block";
    choiceA1image.style.display ="none";
        choiceA3image.style.display ="none";
        choiceA4image.style.display ="none";
        choiceA5image.style.display ="none";
    text.innerHTML = "You found food. You make it another day to find your dragon after the storm passes"
    choiceA2image.style.display ="block";
    }
});

choiceA6image.addEventListener('click', function(){
    restartButton.style.display="block";
    choiceAimage.style.display ="none";
    choiceA6image.style.display ="none";
    keepFlying.style.display ="none";
    text.innerHTML = "you make it to the lake now you have to find something to eat are pterodactyls carnivores or herbivores"
    carnivoreButton.style.display ="block";
    herbivoreButton.style.display ="block";
    choiceA7image.style.display ="block";
});

carnivoreButton.addEventListener('click', function(){
    restartButton.style.display="block";
    choiceA9image.style.display ="none";
    choiceA10image.style.display ="none";
    carnivoreButton.style.display ="none";
    herbivoreButton.style.display ="none";
    choiceA5image.style.display ="none";
    choiceA4image.style.display ="none";
    text.innerHTML = "you are correct and dive down grabbing 3 fish to eat satisfying your hunger and making it another day"
    choiceA9image.style.display ="block";
});

herbivoreButton.addEventListener('click', function(){
    restartButton.style.display="block";
    choiceA9image.style.display ="none";
    carnivoreButton.style.display ="none";
    herbivoreButton.style.display ="none";
    choiceA10image.style.display ="none";
choiceAimage.style.display ="none";
choiceA5image.style.display ="none";
text.innerHTML = "you try to eat some leaves but you can't fully digest them and it doesn't satisfy your hunger"
choiceA10image.style.display ="block";

});
exploreButton.addEventListener("click", function(){
    restartButton.style.display="none";
    start.style.display = "none";
    exploreButton.style.display="none";
headButton.style.display="none";
    text.innerHTML = "you dont want to fly and decide to explore the land you see a cave that might have some food do you go inside or keep wandering"
    goCaveButton.style.display ="block";
    keepWanderingButton.style.display ="block";
    choiceA3image.style.display ="block";
});
goCaveButton.addEventListener("click", function(){
    restartButton.style.display="none";
    start.style.display = "none";
    exploreButton.style.display="none";
headButton.style.display="none";
    text.innerHTML = "you go inside the cave and find some big bugs scurrying around the walls. Do Pterodactyls eat bugs?"
    goCaveButton.style.display ="none";
    keepWanderingButton.style.display ="none";
yes2Button.style.display ="block";
no2Button.style.display ="block";
    choiceA3image.style.display ="block";
});
yes2Button.addEventListener('click', function(){

text.innerHTML = "you eat the bugs and they satisfy your hunger for now"
restartButton.style.display="block";
goCaveButton.style.display ="none";
keepWanderingButton.style.display ="none";
yes2Button.style.display ="none";
no2Button.style.display ="none";
choiceA3image.style.display ="none";
choiceA2image.style.display ="block";
});
keepWanderingButton.addEventListener("click", function(){
    restartButton.style.display="none";
    start.style.display = "none";
    exploreButton.style.display="none";
headButton.style.display="none";
    text.innerHTML = "you dont want to go in the cave and decide to explore the land you find a nest of eggs do you take them immediately or see if the parents are nearby"
    goCaveButton.style.display ="none";
    keepWanderingButton.style.display ="none";
    choiceA3image.style.display ="block";
});
takeEggsButton.addEventListener('click', function(){
    restartButton.style.display="none";
    start.style.display = "none";
    exploreButton.style.display="none";
headButton.style.display="none";
    text.innerHTML = "you take the eggs and quickly run but you suddenly hear a veloceraptor screeching behind you. Are Velociraptors fast?"
    yes3Button.style.display ="block";
    no3Button.style.display ="block";
    choiceA3image.style.display ="none";
    choiceA8image.style.display ="block";
});
yes3Button.addEventListener('click', function(){
    restartButton.style.display="none";
    start.style.display = "none";
    exploreButton.style.display="none";
headButton.style.display="none";
    text.innerHTML = "you quickly fly away as fast as you can from the velociraptor reach and get back to your nest safely with the eggs"
    choiceA1image.style.display ="block";
});
no3Button.addEventListener('click', function(){
    restartButton.style.display="none";
    start.style.display = "none";
    exploreButton.style.display="none";
headButton.style.display="none";
    text.innerHTML = "you underestimate the speed of the velociraptor and it catches you and you succumb a a velociraptor attack"
    choiceA8image.style.display ="block";
});

// document.addEventListener('keydown', function(event) {
//     if(event.keyCode == 37) {
//        // alert('Left was pressed');
//        start.style.display = "none";
//        restartButton.style.display="none";
//        exploreButton.style.display="none";
//        choiceA3image.style.display ="none";
//    headButton.style.display="none";
//        text.innerHTML = "you continue wandering becoming soaked in water you eventually come back to where you started and see a tiger click the down arrow key to climb up a tree or look for something to fight it off with and drag it to the tiger"
//        choiceA4image.style.display ="block";
//        ball.style.display ="block";

//     }
//     else if(event.keyCode == 39) {
//         //alert('Right was pressed');
//         start.style.display = "none";
//         exploreButton.style.display="none";
//         choiceA3image.style.display ="none";
//     headButton.style.display="none";
//         text.innerHTML = "you find supplies to make a fire you ignite the fire and see footprints on the ground they look like the paw prints of your dragon you follow them finding your dragon click yes to immediately fly away no to wait out the sorm before leaving"
//         yesButton.style.display="block";
//         noButton.style.display="block";
//         choiceA5image.style.display ="block";
//     }
//     if(event.keyCode == 38) {
//         // alert('up was pressed');
//             restartButton.style.display="block";
//             choiceAimage.style.display ="none";
//             choiceA6image.style.display ="none";
//             text.innerHTML = "As you approach you feel a sharp pain in your head everything goes dark"
//             choiceA1image.style.display ="block";
//      }
//      else if(event.keyCode == 40) {
//         //alert('Right was pressed');
//         restartButton.style.display="block";
//         start.style.display = "none";
//         choiceA4image.style.display ="none";
//         exploreButton.style.display="none";
//         choiceA3image.style.display ="none";
//     headButton.style.display="none";
//         text.innerHTML = "the tiger climbs up the tree and starts clawing at you you see a bright light as you die"
//         choiceA1image.style.display ="block";

//     }
// });

// ball.onmousedown = function(event) {
//     // (1) prepare to moving: make absolute and on top by z-index
//     ball.style.position = 'absolute';
//     ball.style.zIndex = 1000;
   
//     // move it out of any current parents directly into body
//     // to make it positioned relative to the body
//     document.body.append(ball);
  
//     // centers the ball at (pageX, pageY) coordinates
//     function moveAt(pageX, pageY) {
//         move=true;
//       ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
//       ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
//     }



 
//     // move our absolutely positioned ball under the pointer
//     moveAt(event.pageX, event.pageY);
  
//     function onMouseMove(event) {
//       moveAt(event.pageX, event.pageY);
//     }
  
//     // (2) move the ball on mousemove
//     document.addEventListener('mousemove', onMouseMove);
  
//     // (3) drop the ball, remove unneeded handlers
//     ball.onmouseup = function() {
//       document.removeEventListener('mousemove', onMouseMove);
//       ball.onmouseup = null;
//     };
  
//   };
// console.log("pageX,pageY");
//   ball.addEventListener('mouseDown',function(){

 


//   });
  
//     choiceA4image.addEventListener('mouseover', function(){
//         if(move==true){
//         restartButton.style.display="block";
//         choiceAimage.style.display ="none";
//         choiceA4image.style.display ="none";
//         ball.style.display="none";
//         text.innerHTML = "you find a sword in the grass and stab the tiger getting away safely"
//         choiceA8image.style.display ="block";
//     }
//     });
    