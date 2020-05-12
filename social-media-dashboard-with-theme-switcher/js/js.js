/* onclick, o valor checked o alguna validación del toggle

document.querySelector("html").style.setProperty('--mi-color', "#f00");

*/

function changeTheme() {
    let checkBox = document.getElementById('theme')
    let html = document.querySelector("html")

    console.log(checkBox.checked)

    if (!checkBox.checked) {
        html.style.setProperty('--clr-bg-page', "hsl(0, 0%, 100%)");
        html.style.setProperty('--clr-bg-top-pattern', "hsl(225, 100%, 98%)");
        html.style.setProperty('--clr-bg-card', "hsl(227, 47%, 96%)");
        html.style.setProperty('--clr-desatured-text', "hsl(228, 12%, 44%)");
        html.style.setProperty('--clr-text', "hsl(230, 17%, 14%)");
        html.style.setProperty('--clr-toggle', "hsl(230, 22%, 74%)");
    } else {
        html.style.setProperty('--clr-bg-page', "hsl(230, 17%, 14%)");
        html.style.setProperty('--clr-bg-top-pattern', "hsl(232, 19%, 15%)");
        html.style.setProperty('--clr-bg-card', "hsl(228, 28%, 20%)");
        html.style.setProperty('--clr-desatured-text', "hsl(228, 34%, 66%)");
        html.style.setProperty('--clr-text', "hsl(0, 0%, 100%)");
        html.style.setProperty('--clr-toggle', "linear-gradient(to right, hsl(146, 68%, 55%), hsl(210, 78%, 56%))");
    }

}