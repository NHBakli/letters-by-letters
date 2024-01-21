"use strict";
const container = document.querySelector(".letter");
let word = "Bienvenue à tous !";
let wordArray = word.split('');
function animateText() {
    function printLetters(index) {
        if (index < wordArray.length) {
            container.textContent += wordArray[index];
            setTimeout(() => {
                printLetters(index + 1);
            }, 100); // ajustez la durée de l'écriture selon vos besoins
        }
        else {
            setTimeout(() => {
                deleteLetters(wordArray.length - 1);
            }, 800); // attendez un moment avant de commencer la suppression
        }
    }
    function deleteLetters(index) {
        var _a;
        if (index >= 0) {
            container.textContent = ((_a = container.textContent) === null || _a === void 0 ? void 0 : _a.slice(0, -1)) || '';
            setTimeout(() => {
                deleteLetters(index - 1);
            }, 100); // ajustez la durée de la suppression selon vos besoins
        }
        else {
            setTimeout(() => {
                animateText();
            }, 800); // attendez un moment avant de recommencer l'animation
        }
    }
    printLetters(0);
}
animateText();
