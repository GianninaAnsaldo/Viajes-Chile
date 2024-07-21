//tooltip y alerta de correo enviado
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    $("#EnviarCorreo").click(function () {
        alert("El correo fue enviado correctamente...");
    });
});

//Se añade subrayado al hacer click en links de secciones
$(document).ready(function () {
    $('.navbar-nav .nav-link').click(function () {
        $('.navbar-nav .nav-link').removeClass('active');
        $(this).addClass('active');
    });
});

//aparecer y desaparecer p de cards haciendo click
$(document).ready(function () {
    $("h5").click(function () {
        $(".p-card").toggle();
    });
});

//cambia color del párrafo al hacer doble click
$(document).ready(function () {
    $("#p-plane").on("dblclick", function () {
        $(this).css("color", "darkgray");
    });
});

$(document).ready(function () {
    $("#p-mountain").on("dblclick", function () {
        $(this).css("color", "darkgray");
    });
});

$(document).ready(function () {
    $("#p-route").on("dblclick", function () {
        $(this).css("color", "darkgray");
    });
});