let intro = setTimeout(() => {
    $("#intro").fadeOut('slow');
  }, 1300)
  
!(function ($doc, $win) {
	var screenWidth = $win.screen.width / 2,
		screenHeight = $win.screen.height / 2,
        $elems = $doc.getElementsByClassName("beforeCard"),
        $elemsHead = $doc.getElementsByClassName("head"),
        $elemsFoot = $doc.getElementsByClassName("foot"),
		$elemsDesc = $doc.getElementsByClassName("description"),
        $elemsDiablo = $doc.getElementsByClassName("sticker"),

		validPropertyPrefix = '',
		otherProperty = 'perspective(1000px)',
        elemStyle = $elems[0].style;
		elemStyle = $elemsDesc[0].style;
		elemStyle = $elemsDiablo[0].style;
        elemStyle = $elemsHead[0].style;
		elemStyle = $elemsFoot[0].style;

	if(typeof elemStyle.webkitTransform == 'string') {
		validPropertyPrefix = 'webkitTransform';
	} else if (typeof elemStyle.MozTransform == 'string') {
		validPropertyPrefix = 'MozTransform';
	}

	$doc.addEventListener('mousemove', function (e) {
		var centroX = e.clientX - screenWidth,
			centroY = screenHeight - (e.clientY + 13),
			degX = centroX * 0.04,
			degY = centroY * 0.02,
			$elem
		for (var i = 0; i < $elemsDesc.length; i++) {
            $elem = $elemsDiablo[i];
            $elem = $elems[i];
            $elem.style[validPropertyPrefix] = otherProperty + 'rotateY('+ degX +'deg)  rotateX('+ degY +'deg)';
        };
       
	});

})(document, window);

let sticker = document.getElementsByClassName('sticker')
let header = document.getElementById('header')
let myName = document.getElementById('name')
let diams = document.getElementById('diams')

let card = document.getElementsByClassName('card')
let description = document.getElementById('descCard')
let imgCard = document.getElementById('imgCard')

let desc = document.getElementById('desc');
let titreCard = document.getElementById('titreCard');

function perso1() {
    $('#myVideo').attr('src', "./images/hell.mp4");
    $('#myVideoCard').attr('src', "./images/gold.mp4");
    $(".sticker").css('z-index','0');
    sticker[0].src = "./images/perso1.png"
    header.src = "./images/head.png"
    diams.src = "./images/diams2.png"
    sticker[0].style.filter = "brightness(1)" 
    sticker[0].style.transition = "1s ease" 
    myName.src = "./images/name.png"
    desc.textContent = "My ax and unlimited power have made me a ruthless conqueror. I won't hesitate to use them to destroy you"
    description.textContent = "My ax and unlimited power have made me a ruthless conqueror. I won't hesitate to use them to destroy you"
    titreCard.innerHTML = "The Barbarian"
    document.getElementById('imgCard').style.backgroundImage = `url(./images/perso1.png)`
}

function perso2() {
    $('#myVideo').attr('src', "./images/hell.mp4");
    $('#myVideoCard').attr('src', "./images/thunder.mp4");
    $(".sticker").css('z-index','0');
    sticker[0].src = "./images/necro.png"
    header.src = "./images/head.png"
    diams.src = "./images/diams2.png"
    sticker[0].style.filter = "brightness(1)" 
    sticker[0].style.transform = "scale(1.1)" 
    sticker[0].style.transition = "1s ease" 
    myName.src = "./images/name.png"
    desc.textContent = "The elemental forces are with me! I will annihilate anyone who gets in my way! Run away! Poor fools"
    description.textContent = "The elemental forces are with me! I will annihilate anyone who gets in my way! Run away! Poor fools"
    titreCard.innerHTML = "Necromancer"
    document.getElementById('imgCard').style.backgroundImage = `url(./images/necro.png)`
}

function perso3() {
    $('#myVideo').attr('src', "./images/hell.mp4");
    $('#myVideoCard').attr('src', "./images/lights.mp4");
    $(".sticker").css('z-index','0');
    sticker[0].src = "./images/woman.png"
    header.src = "./images/head.png"
    diams.src = "./images/diams2.png"
    sticker[0].style.filter = "brightness(1)" 
    sticker[0].style.transform = "scale(1.1)" 
    sticker[0].style.transition = "1s ease" 
    myName.src = "./images/name.png"
    desc.textContent = "Unfortunate! I'm here to put an end to the forces of evil! My speed and strength will get the better of you"
    description.textContent = "Unfortunate! I'm here to put an end to the forces of evil! My speed and strength will get the better of you"
    titreCard.innerHTML = "Demon Hunter"
    document.getElementById('imgCard').style.backgroundImage = `url(./images/woman.png)`
}

function persoMe() {
    $('#myVideo').attr('src', "./images/itback.mp4");
    $('#myVideoCard').attr('src', "./images/matrix.mp4");
    $(".sticker").css('z-index','0');
    sticker[0].src = "./images/fateh.png"
    header.src = "./images/headFateh.png"
    myName.src = "./images/nameFateh.png"
    diams.src = "./images/diams2.png"
    sticker[0].style.filter = "brightness(1)" 
    sticker[0].style.transform = "scale(1.1)" 
    sticker[0].style.transition = "1s ease"
    desc.textContent = "👋 Hi, i'm Fateh, a french web developer passionate about programming and drawing. I created it with HTML CSS and jQuery"
    description.textContent = "👋 Hi, i'm Fateh, a french web developer passionate about programming and drawing. I created it with HTML CSS and jQuery"
    titreCard.innerHTML = "Web Developer"
    document.getElementById('imgCard').style.backgroundImage = `url(./images/fateh2.png)`
}

function diablo() {
    $('#myVideo').attr('src', "./images/hell.mp4");
    $('#myVideoCard').attr('src', "./images/fire2.mp4");
    $(".sticker").css('z-index','0');
    sticker[0].src = "./images/diablo.png"
    header.src = "./images/head.png"
    sticker[0].style.filter = "brightness(1)" 
    sticker[0].style.transform = "scale(1.1)" 
    sticker[0].style.transition = "1s ease" 
    myName.src = "./images/name.png"
    diams.src = "./images/diams.png"
    desc.textContent = "Poor human! Do you dare to face me while I master the force of darkness? Approach! Let's finish in!"
    description.textContent = "Poor human! Do you dare to face me while I master the force of darkness? Approach! Let's finish in!"
    titreCard.innerHTML = "Malthael"
    document.getElementById('imgCard').style.backgroundImage = `url(./images/diablo.png)`
}

$('.beforeCard').hover(function() {
    setTimeout(() => {
        $(".sticker").css('z-index','1');
    }, 200)
});

$('.sticker').hover(function() {
    $('.btn').fadeTo(1,0)
},function() {
    $('.btn').fadeTo(1,1)
});

var isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
if (isIOS) {
    document.location.href="./iospage.html";
}
