window.addEventListener("load", sidenVises);


"use strict";
let points = 0;
let life = 1;
let time = 30;
let elementNr = 0;
let elementNrOld = 0;


function sidenVises() {
    console.log("sidenVises");
    //nulstil alting
    //NOTE: Ved ikke endnu

    //-> showStart (den her er vigtig fordi den kalder på funktionen nedenunder aka går videre)
    showStart();
}

function showStart() {
    console.log("showStart");
    //vis startskærm
    document.querySelector("#start").classList.remove("hide");
    //vis start knap
    document.querySelector("#playbutton").classList.remove("hide");
    //start animation på start-knap
    document.querySelector("#playbutton").classList.add("pulse");
    //vis settings knap
    document.querySelector("#settingsbutton").classList.remove("hide");
    //start animation på ur
    document.querySelector("#clock").classList.add("pulse");


}
//klik på start-knap
document.querySelector("#playbutton").addEventListener("click", hideStart);
//klik på settings knap
document.querySelector("#settingsbutton").addEventListener("click", showSettings);


function showSettings() {
    console.log("showSettings");
    document.querySelector("#settings").classList.remove("hide");

    document.querySelector("#toggle1").addEventListener("click", clickMusic);

    document.querySelector("#toggle2").addEventListener("click", clickEffects);

    document.querySelector("#back").addEventListener("click", clickBack);
    //næste linje sørger for den ikke bliver vist
    //document.querySelector("#settings").classList.add("hide");

}

function clickMusic() {
    console.log("clickMusic");
    document.querySelector("#toggle1").classList.add("hide");
    document.querySelector("#toggleon1").classList.remove("hide");
    document.querySelector("#toggleon1").classList.remove("hide");
    document.querySelector("#toggleon1").addEventListener("click", clickMusicBack);
    //skal slå musik til og fra
}

function clickEffects() {
    console.log("clickEffects");
    document.querySelector("#toggle2").classList.add("hide");
    document.querySelector("#toggleon2").classList.remove("hide");
    document.querySelector("#toggleon2").addEventListener("click", clickEffectsBack);
    //skal slå effects til og fra

}

function clickMusicBack() {
    console.log("clickMusic");
    document.querySelector("#toggle1").classList.remove("hide");
    document.querySelector("#toggleon1").classList.add("hide");
    document.querySelector("#toggleon1").removeEventListener("click", clickMusicBack);
    //skal slå musik til og fra
}

function clickEffectsBack() {
    console.log("clickEffects");
    document.querySelector("#toggle2").classList.remove("hide");
    document.querySelector("#toggleon2").classList.add("hide");
    document.querySelector("#toggleon2").removeEventListener("click", clickEffectsBack);
    //skal slå effects til og fra

}

function clickBack() {
    console.log("clickBack");
    document.querySelector("#settings").classList.add("hide");
    //går ud af settings
}

function hideStart() {
    console.log("hideStart");
    //stop animation på start-knap
    document.querySelector("#playbutton").classList.remove("pulse");
    //fade startskærm ud
    document.querySelector("#start").classList.add("startscreen_rotate");

    document.querySelector("#start").addEventListener("animationend", startGame);
    //når fade-animationen er færdig -> startGame
}


function startGame() {
    console.log("startGame");
    //skjul startskærm
    //vis spilskærm
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#element1").addEventListener("click", clickPhone);
    document.querySelector("#element2").addEventListener("click", clickBooks);
    document.querySelector("#element3").addEventListener("click", clickCoffee);
    document.querySelector("#element4").addEventListener("click", clickSleep);
    nytElement();


}


function nytElement() {
    console.log("viPrøver");

    document.querySelector("#element1").classList = "hide";
    document.querySelector("#element2").classList = "hide";
    document.querySelector("#element3").classList = "hide";
    document.querySelector("#element4").classList = "hide";

    if (elementNr == elementNrOld) {
        elementNr = Math.floor((Math.random() * 4) + 1);
    }



    document.querySelector("#element" + elementNr).classList = "show";
    document.querySelector("#element" + elementNr).addEventListener("animationend", nytElement);
    elementNrOld = elementNr;
}

//function nytElement2() {
//    console.log("viPrøverIgen");
//
//    document.querySelector("#element1").classList = "hide";
//    document.querySelector("#element2").classList = "hide";
//    document.querySelector("#element3").classList = "hide";
//    document.querySelector("#element4").classList = "hide";
//
//    elementNr2 = Math.floor((Math.random() * 4) + 1);
//
//    document.querySelector("#element" + elementNr2).classList = "show";
//    document.querySelector("#element" + elementNr2).addEventListener("animationend", nytElement);
//}









//document.querySelector("#element" + elementNr).removeEventListener("animationend", nytElement);'

//if (elementNr == elementNrOld) {
//document.querySelector("#element" + elementNrOld).classList.add("hide");

//document.querySelector(elementNr).classList = "hide";
//elementNr = Math.floor((Math.random() * 4) + 1);


//console.log("nytElement og elementnr er " + elementNr);

// elementNr = Math.floor((Math.random() * 4) + 1);
//console.log("nytElement og elementnr er " + elementNr);

//document.querySelector("#element" + elementNr).classList = "show";
//document.querySelector("#element" + elementNr).addEventListener("animationend", hideEverything);

//elementNrOld = elementNr;


//console.log("hej");




function hideEverything() {
    document.querySelector("#element1").classList = "hide";
    document.querySelector("#element2").classList = "hide";
    document.querySelector("#element3").classList = "hide";
    document.querySelector("#element4").classList = "hide";
    nytElement();
}


function clickPhone() {
    console.log("clickPhone");
    points--;
    document.querySelector("#element1").classList.add("click_out");
    document.querySelector("#element1").addEventListener("animationend", clickPhoneOut);

}

function clickPhoneOut() {
    console.log("clickPhoneOut");
    points--;

    document.querySelector("#element1").classList.add("hide");
    document.querySelector("#element1").removeEventListener("animationend", clickPhoneOut);
    nytElement();
}

function clickBooks() {
    points++;
    console.log("clickBooks");
    document.querySelector("#element2").classList.add("click_out");
    document.querySelector("#element2").addEventListener("animationend", clickBooksOut);
}

function clickBooksOut() {
    console.log("clickBooksOut");

    document.querySelector("#element2").classList.add("hide");
    document.querySelector("#element2").removeEventListener("animationend", clickBooksOut);
    nytElement();
}

function clickCoffee() {
    points += 2;
    console.log("clickCoffee");
    document.querySelector("#element3").classList.add("click_out");
    document.querySelector("#element3").addEventListener("animationend", clickCoffeeOut);
}

function clickCoffeeOut() {
    console.log("clickCoffeeOut");
    document.querySelector("#element3").removeEventListener("animationend", clickCoffeeOut);
    document.querySelector("#element3").classList.add("hide");
    nytElement();
}

function clickSleep() {
    life--;
    console.log("clickSleep");
    document.querySelector("#element4").classList.add("click_out");
    document.querySelector("#element4").addEventListener("animationend", clickSleepOut);

}

function clickSleepOut() {
    console.log("clickSleepOut");
    document.querySelector("#element4").classList.add("hide");
    document.querySelector("#element4").removeEventListener("animationend", clickSleepOut);
    gameOver1();
}

function gameStatus() {
    console.log("gameStatus");
    if (points => 10) {
        levelComplete();
    } else if (life == 0) {
        gameOver1();
    } else if (time == 0) {
        gameOver2();
    }
}

function levelComplete() {
    document.querySelector("#levelcomplete").classList.remove("hide");
}

function gameOver1() {
    console.log("gameOver1");
    document.querySelector("#gameover1").classList.remove("hide");
}

function gameOver2() {
    console.log("gameOver1");
    document.querySelector("#gameover2").classList.remove("hide");
}
