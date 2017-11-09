$(document).ready(function() {
    function MIAjax(request, parametros, ejecucion) {
        $.ajax({
// la URL para la petición
            url: request,
            // la información a enviar
            // (también es posible utilizar una cadena de datos)
            data: parametros,
            // especifica si será una petición POST o GET
            type: 'POST',
            // el tipo de información que se espera de respuesta
            dataType: 'html',
            // código a ejecutar si la petición es satisfactoria;
            // la respuesta es pasada como argumento a la función
            success: function(datos) {
                ejecucion(datos);
            },
            // código a ejecutar si la petición falla;
            // son pasados como argumentos a la función
            // el objeto de la petición en crudo y código de estatus de la petición
            error: function(xhr, status) {
                alert('Disculpe, existió un problema');
            },
            // código a ejecutar sin importar si la petición falló o no
            complete: function(xhr, status) {
                //  alert('Petición realizada');
            }
        });
    }
    function traerboca() {
        var request = "modulos/partesBocas.html";
        var parametros = "acceso=false";
        var ejecucion = function(datos) {
            $("#contenido").html(datos);
        };
        MIAjax(request, parametros, ejecucion);
    }
    traerboca();

    $("#Ojos").click(function() {
        var request = "modulos/partesOjos.html";
        var parametros = "acceso=false";
        var ejecucion = function(datos) {
            document.getElementById("contenido").innerHTML = datos;
        };
        MIAjax(request, parametros, ejecucion);
    });
    $("#Boca").click(function() {
        var request = "modulos/partesBocas.html";
        var parametros = "acceso=false";
        var ejecucion = function(datos) {
            document.getElementById("contenido").innerHTML = datos;
        };
        MIAjax(request, parametros, ejecucion);
    });
    $("#Pelo").click(function() {
        var request = "modulos/partesPelo.html";
        var parametros = "acceso=false";
        var ejecucion = function(datos) {
            document.getElementById("contenido").innerHTML = datos;
        };
        MIAjax(request, parametros, ejecucion);
    });

});
