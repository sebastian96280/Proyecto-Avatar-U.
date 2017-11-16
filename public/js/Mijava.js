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
            $("#azul").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/azul.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#negro").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/negro.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#blanco").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/blanco.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#cafe").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/cafe.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#cafeoscuro").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/cafeoscuro.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#gris").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/gris.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#grisclaro").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/grisclaro.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#grisclaro").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/grisclaro.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#lila").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/lila.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#morado").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/morado.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#moradoclaro").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/moradoclaro.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#rosado").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/rosado.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#rojo").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/rojo.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#verde1").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/verde1.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#verde2").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/verde2.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
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
            $("#azul").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/azul.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#negro").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/negro.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#blanco").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/blanco.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#cafe").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/cafe.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#cafeoscuro").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/cafeoscuro.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#gris").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/gris.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#grisclaro").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/grisclaro.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#grisclaro").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/grisclaro.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#lila").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/lila.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#morado").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/morado.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#moradoclaro").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/moradoclaro.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#rosado").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/rosado.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#rojo").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/rojo.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#verde1").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/verde1.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#verde2").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/bocas/verde2.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
        };
        MIAjax(request, parametros, ejecucion);
    });
    $("#Pelo").click(function() {
        var request = "modulos/partesPelo.html";
        var parametros = "acceso=false";
        var ejecucion = function(datos) {
            document.getElementById("contenido").innerHTML = datos;
            $("#negro").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/pelo/negro.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresPelo").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#azul").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/pelo/azul.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresPelo").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#blanco").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/pelo/blanco.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresPelo").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#cafe").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/pelo/cafe.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresPelo").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#cafeoscuro").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/pelo/cafeoscuro.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresPelo").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#gris").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/pelo/gris.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresPelo").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#grisclaro").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/pelo/grisclaro.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresPelo").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#lila").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/pelo/lila.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresPelo").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#morado").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/pelo/morado.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresPelo").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#moradoclaro").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/pelo/moradoclaro.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresPelo").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#rosado").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/pelo/rosado.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresPelo").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#rojo").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/pelo/rojo.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresPelo").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#verde1").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/pelo/verde1.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresPelo").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#verde2").click(function() {
            console.log("estoy aqui")
            var request = "modulos/Colores/pelo/verde2.html";
            var parametros = "acceso=false";
            var ejecucion = function(datos) {
                document.getElementById("coloresPelo").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
        };
        MIAjax(request, parametros, ejecucion);
    });

});
function inicioImagenB(id){
    var imagen = document.getElementById(id).src;
    document.getElementById("img3").src=imagen;
}
function inicioImagenO(id){
    var imagen = document.getElementById(id).src;
    document.getElementById("img2").src=imagen;
}
function inicioImagenP(id){
    var imagen = document.getElementById(id).src;
    document.getElementById("img4").src=imagen;
}

