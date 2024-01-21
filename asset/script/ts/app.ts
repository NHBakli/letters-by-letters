const container = document.querySelector(".letter") as HTMLParagraphElement;

let word: string = "Bienvenue à tous !";
let wordArray: string[] = word.split('');

function animateText(): void {
    function printLetters(index: number): void {
        if (index < wordArray.length) {
            container.textContent += wordArray[index];
            setTimeout(() => {
                printLetters(index + 1);
            }, 100); // ajustez la durée de l'écriture selon vos besoins
        } else {
            setTimeout(() => {
                deleteLetters(wordArray.length - 1);
            }, 800); // attendez un moment avant de commencer la suppression
        }
    }

    function deleteLetters(index: number): void {
        if (index >= 0) {
            container.textContent = container.textContent?.slice(0, -1) || '';
            setTimeout(() => {
                deleteLetters(index - 1);
            }, 100); // ajustez la durée de la suppression selon vos besoins
        } else {
            setTimeout(() => {
                animateText();
            }, 800); // attendez un moment avant de recommencer l'animation
        }
    }

    printLetters(0);
}
animateText();
