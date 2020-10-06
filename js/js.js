var svgCircle = document.getElementById("svgCircle");
var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
var step3 = document.getElementById("step3");
var step4 = document.getElementById("step4");
var step5 = document.getElementById("step5");
var main = document.getElementById("main");
var cajaUser = document.getElementById("cajaUser");








main.style.backgroundImage = "url(images/angular.png)";

/**Evento de los puntos del circulo */
step1.addEventListener('click', () => {

    svgCircle.style.strokeDashoffset = "1004";
    main.style.backgroundImage = "url(images/bannerorbi.jpg)";
    cajaUser.style.top = "-350px";


});

step2.addEventListener('click', () => {

    svgCircle.style.strokeDashoffset = "753";
    main.style.backgroundImage = "url(images/bannerkelfry.jpg)";
    cajaUser.style.top = "-800px";



});
step3.addEventListener('click', () => {

    svgCircle.style.strokeDashoffset = "502";
    main.style.backgroundImage = "url(images/banner2.png)";
    cajaUser.style.top = "-1250px";


});
step4.addEventListener('click', () => {

    svgCircle.style.strokeDashoffset = "251";
    main.style.backgroundImage = "url(images/bannermiguel.jpg)";
    cajaUser.style.top = "-1700px";


});
step5.addEventListener('click', () => {

    svgCircle.style.strokeDashoffset = "0";
    main.style.backgroundImage = "url(images/angular.png)";
    cajaUser.style.top = "100px";

});