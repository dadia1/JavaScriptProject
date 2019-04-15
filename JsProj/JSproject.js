// JavaScript source code
var data4x4 = [];
var data6x6 = [];
////////////////
var BackCards4x4 = ["baby1.jpg", "ball1.jpg", "birds1.jpg", "c1.jpg"
    , "cake1.jpg", "car1.jpg", "chair1.jpg", "chick1.jpg"];
var Val4x4 = [];
for (var i = 0; i <= 7; i++)
    Val4x4.push(i);

for (var i = 0; i < BackCards4x4.length; i++) {
    for (var j = 0; j < 2; j++) {
        data4x4.push({ img: BackCards4x4[i], value: Val4x4[i] });
    }
}
////////////
var BackCards6x6 = ["baby1.jpg", "ball1.jpg", "birds1.jpg", "c1.jpg", "cake1.jpg", "car1.jpg", "chair1.jpg", "chick1.jpg"
    , "fish1.jpg", "hors1.jpg", "Js1.jpg", "monkey1.jpg", "see1.jpg", "ship1.jpg", "shoes1.jpg",
    "sun1.jpg", "tree1.jpg", "water1.jpg"];
var Val6x6 = [];
for (var i = 0; i <= 18; i++)
    Val6x6.push(i);

for (var i = 0; i < BackCards6x6.length; i++) {
    for (var j = 0; j < 2; j++) {
        data6x6.push({ img: BackCards6x6[i], value: Val6x6[i] });
    }
}
////////////
var frontCards = "Images/frontImageCards.jpg";
var winner = 0;
var a;
var b;
var c = 0;
var counter = 0;
var newLine = "<br/>";
var arrId = [];
var img;
var array = [];
var div;
var oneChoice;
var secondChoice;
var oneElem;
var secondElem;
var elemOneChoice;
var elemSecondChoice;
var selectNum = 0;
var p;
var game;



function changeImg(selectNum) {
    var backImg;
    // סיבוב חדש הופכים את כל הקלפים
    if (oneChoice != secondChoice && counter == 2) {
        var sound3 = document.createElement('audio');
        sound3.id = 'bgSound';
        sound3.src = 'mis.mp3';
        sound3.type = 'audio/mp3';
        sound3.autoplay = true;
        document.getElementById('DivGame').appendChild(sound3);

        Thread.sleep(50);
        var myNode1 = document.getElementById(oneElem);
        var myNode2 = document.getElementById(secondElem);
        while (myNode1.firstChild || myNode2.firstChild) {
            myNode1.removeChild(myNode1.firstChild);
            myNode2.removeChild(myNode2.firstChild);
        }

        document.getElementById(oneElem).appendChild(a);
        document.getElementById(secondElem).appendChild(b);
        counter = 0;
    }


    if (counter == 0) {
        if (c == 0) {
            gameTimer();
            c++;
        }
        var sound4 = document.createElement('audio');
        sound4.id = 'bgSound';
        sound4.src = 'loopGame.mp3';
        sound4.type = 'audio/mp3';
        sound4.autoplay = true;
        document.getElementById('DivGame').appendChild(sound4);


        a = arrId[selectNum];
        backImg = document.createElement("IMG");
        backImg.style.width = "120px";
        backImg.style.height = "107px";
        backImg.src = "Images/" + array[selectNum].img;
        var m = document.getElementById("myDiv" + selectNum);
        while (m.firstChild) {
            m.removeChild(m.firstChild);
        }
        document.getElementById("myDiv" + selectNum).appendChild(backImg);
        oneElem = "myDiv" + selectNum;
        oneChoice = array[selectNum].value;
        elemOneChoice = backImg;
    }
    if (counter == 1) {
        b = arrId[selectNum];
        backImg = document.createElement("IMG");
        backImg.style.width = "120px";
        backImg.style.height = "107px";
        backImg.src = "Images/" + array[selectNum].img;
        var n = document.getElementById("myDiv" + selectNum);
        while (n.firstChild) {
            n.removeChild(n.firstChild);
        }
        document.getElementById("myDiv" + selectNum).appendChild(backImg);
        secondElem = "myDiv" + selectNum;
        secondChoice = array[selectNum].value;
        elemSecondChoice = backImg;
    }

    if (oneChoice == secondChoice && counter == 1) {
        var sound = document.createElement('audio');
        sound.id = 'bgSound';
        sound.src = 'winSound.mp3';
        sound.type = 'audio/mp3';
        sound.autoplay = true;
        document.getElementById('DivGame').appendChild(sound);
        counter = -1;
        if (winner == 7 && game == 0) {
            c = 0;
            clearInterval(p);
            for (var z = 0; z < 5; z++) {
                setTimeout(doSetTimeout(), 500);
            }
            var sound1 = document.createElement('audio');
            sound1.id = 'bgSound';
            sound1.src = 'winner.mp3';
            sound1.type = 'audio/mp3';
            sound1.autoplay = true;
            document.getElementById('DivGame').appendChild(sound1);
        }
        if (winner == 17 && game == 1) {
            document.getElementById('DivGame').style.backgroundColor = "red";
            c = 0;
            clearInterval(p);
        }
        winner++;
    }
    counter++;
}

//set time out
function doSetTimeout() {
    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256))
        + ',' + (Math.floor(Math.random() * 256)) + ')';

    $('body').css("background", hue);
}

//random color
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
    document.body.style.background = bgColor;
};


//delay
var Thread = {
    sleep: function (ms) {
        var start = Date.now();

        while (true) {
            var clock = (Date.now() - start);
            if (clock >= ms) break;
        }

    }
};


function funcfrontCards() {
    document.body.style.background = "";
    clearDiv();
    document.getElementById('DivGame').style.backgroundColor = "";
    game = 0;
    shuffle(data4x4);
    for (let i = 0; i < 16; i++) {
        div = document.getElementById('DivGame').appendChild(document.createElement("DIV"));
        div.id = "myDiv" + i;
        div.className = "MyDiv";
        div.style.width = "125px";
        div.style.height = "115px";

        img = document.createElement("IMG");
        img.style.width = "120px";
        img.style.height = "107px";
        img.src = frontCards;
        img.alt = "Flash and JS are not enemies!";
        arrId[i] = img;
        arrId[i].addEventListener('click', function () { changeImg(i); });
        div.appendChild(arrId[i]);

        if ((i + 1) % 4 == 0) {
            document.getElementById('DivGame').appendChild(document.createElement("BR"));
        }
    }
}
//on page load call func 
funcfrontCards();

function clearDiv() {
    var div = document.getElementById('DivGame');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

//btn game 4x4
document.getElementById('4x4').onclick = function gameA() {
    document.body.style.background = "";
    clearDiv();
    document.getElementById('DivGame').style.backgroundColor = "";
    game = 0;
    funcfrontCards();
}

//btn game 6x6
document.getElementById('6x6').onclick = function gameB() {
    document.body.style.background = "";
    clearDiv();
    document.getElementById('DivGame').style.backgroundColor = "";
    shuffle(data6x6);
    game = 1;
    for (let i = 0; i < 36; i++) {
        div = document.getElementById('DivGame').appendChild(document.createElement("DIV"));
        div.id = "myDiv" + i;
        div.className = "MyDiv";
        div.style.width = "125px";
        div.style.height = "115px";

        img = document.createElement("IMG");
        img.style.width = "120px";
        img.style.height = "107px";
        img.src = frontCards;
        img.alt = "Flash and JS are not enemies!";
        arrId[i] = img;
        arrId[i].addEventListener('click', function () { changeImg(i); });
        div.appendChild(arrId[i]);

        if ((i + 1) % 6 == 0) {
            document.getElementById('DivGame').appendChild(document.createElement("BR"));
        }
    }
}

function shuffle(arr) {
    array = arr;
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
}

function gameTimer() {
    var sec = 0;
    function pad(val) { return val > 9 ? val : "0" + val; }
    p = setInterval(function () {
        document.getElementById("seconds").innerHTML = pad(++sec % 60);
        document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
    }, 1000);
}

//reset
function resetBtn() {
    document.location.reload();
}