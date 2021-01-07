
var audio = document.querySelector('.audio');
var animaleName = document.querySelector('.animaleName');

function animaleSound(element){
    var sound = element.getAttribute('data-sound');
    audio.src = sound;
    audio.play();

    var name = element.getAttribute('data-text');
    animaleName.innerHTML = name;

    element.style.background = '#BFC9CA';
    $(element).siblings().css('background','none');
    document.getElementById('catch').classList.add('jsanimate');
}
function openContact(){
    document.getElementById('overlay').style.marginLeft="0px";
    document.getElementById('send').style.marginLeft='300px';
    document.getElementById('send').style.marginTop="-2px";
    document.getElementById('disappear').style.display='none';
    document.getElementById('left').style.display="block";
}
function closeContact(){
    document.getElementById('overlay').style.marginLeft="-400px"
    document.getElementById('send').style.marginLeft="0px"
    document.getElementById('disappear').style.display='block';
    document.getElementById('left').style.display="none";
}
function show(){
    alert("The browser Will Be Reloaded");
}
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });