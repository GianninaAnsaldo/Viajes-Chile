//tooltip y alerta
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    $("#EnviarCorreo").click(function () {
        alert("El correo fue enviado correctamente...");
    });
});

//Cambio color al hacer click
$(document).ready(function () {
    $("#inicio").on("click", function () {
        $(this).css("color", "black");
    });
});

$(document).ready(function () {
    $("QuienesSomos").on("click", function () {
        $(this).css("color", "cyan");
    });
});