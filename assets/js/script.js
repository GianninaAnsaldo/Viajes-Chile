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

//Cambio color al hacer doble click
$(document).ready(function () {
    $("#ingredientes").on("dblclick", function () {
        $(this).css("color", "cyan");
    });
});

$(document).ready(function () {
    $("#preparacion").on("dblclick", function () {
        $(this).css("color", "red");
    });
});