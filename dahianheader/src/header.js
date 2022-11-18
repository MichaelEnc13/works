let nav = document.querySelector("#nav_side");
let overlay = document.querySelector(".overlay");
let toggle = document.querySelector(".nav__side__toggle,.nav__side__toggle--side");
let backImg = document.querySelector("#header_back");

//muestra la barra y el overlay
toggle.addEventListener("click", (e) => {
    nav.classList.toggle("show_nav")
    overlay.classList.toggle("overlay_show")
})

//Cierra la navegación al hacer click en el overlay
overlay.addEventListener("click", (e) => {
    nav.classList.toggle("show_nav")
    overlay.classList.toggle("overlay_show")
})

/* 
Se ocultan los hotspot no clicados
 */

function hide_no_selected(element) {
    document.querySelector(".hotspot--1").style.visibility = "hidden"
    document.querySelector(".hotspot--2").style.visibility = "hidden"
    document.querySelector(".hotspot--3").style.visibility = "hidden"
    document.querySelector(".hotspot--4").style.visibility = "hidden"
    document.querySelector(".social").style.visibility = "hidden"
    if (element != null) {

        document.querySelector(`.${element}`).style.visibility = "visible"
    }
}
//Se muestran lo elementos tooltis
//al hacer click en el hotspot

function show_tooltip(element) {



    hide_no_selected(element)

    /* Se evita que se muestren los elementos que no se necesitan */
    document.querySelector(".hotspot__tooltips__1").style.display = "none"
    document.querySelector(".hotspot__tooltips__2").style.display = "none"
    document.querySelector(".hotspot__tooltips__3").style.display = "none"
    document.querySelector(".hotspot__tooltips__4").style.display = "none"
    document.querySelector(".header_text").style.display = "none"
        /* Vista de los Hotspots */

    /* Verificar las posiciones */
    var posY;
    var posX;
    if (element) { //se valida la existencia del elemento clicado
        posY = document.querySelector(`.${element}`).offsetTop
        posX = document.querySelector(`.${element}`).offsetLeft
        var data = document.querySelector(`.${element}`).dataset.tooltip
        var tooltip = document.querySelector(`.${data}`)
        if (tooltip) {
            tooltip.style.top = `${posY + 20}px`
            tooltip.style.left = `${posX - 150}px`
            tooltip.style.display = "block";
        }

    }

}


document.addEventListener("click", (e) => {
    var element = e.target.parentElement.classList[1];

    show_tooltip(element);
    // console.log(element);


    switch (element) { //Selector del hotspot y manipulador de la acción de la imagen de fondo
        case "hotspot--1":
            backImg.classList.add("header_back_1")
            backImg.classList.remove("header_back_2")
            backImg.classList.remove("header_back_3")
            backImg.classList.remove("header_back_4")


            break;
        case "hotspot--2":
            backImg.classList.add("header_back_2")
            backImg.classList.remove("header_back_1")
            backImg.classList.remove("header_back_3")
            backImg.classList.remove("header_back_4")

            break;
        case "hotspot--3":
            backImg.classList.add("header_back_3")
            backImg.classList.remove("header_back_1")
            backImg.classList.remove("header_back_2")
            backImg.classList.remove("header_back_4")

            break;
        case "hotspot--4":
            backImg.classList.add("header_back_4")
            backImg.classList.remove("header_back_1")
            backImg.classList.remove("header_back_2")
            backImg.classList.remove("header_back_3")

            break;

        default:
            //Se retornan todos los elementos a su estilo original
            backImg.classList.remove("header_back_1")
            backImg.classList.remove("header_back_2")
            backImg.classList.remove("header_back_3")
            backImg.classList.remove("header_back_4")
            document.querySelector(`.hotspot__tooltips`).style.display = "none";
            document.querySelector(".header_text").style.display = "block"
            document.querySelector(".hotspot--1").style.visibility = "visible"
            document.querySelector(".hotspot--2").style.visibility = "visible"
            document.querySelector(".hotspot--3").style.visibility = "visible"
            document.querySelector(".hotspot--4").style.visibility = "visible"
            document.querySelector(".social").style.visibility = "visible"

            break;
    }

})