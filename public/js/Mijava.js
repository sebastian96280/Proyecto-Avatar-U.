$(document).ready(function() {
    function MIAjax(request, parametros, ejecucion) {
        $.ajax({
// la URL para la petición
            url: request,
            // la información a enviar
            // (también es posible utilizar una cadena de datos)
            datos : parametros,
            // especifica si será una petición POST o GET
            type: 'GET',
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
        var request = "traerBocas";
        var parametros = "";
        var ejecucion = function(datos) {
            $("#contenido").html(datos);
            $("#azul").click(function() {
            var request = "traerBocasAzul";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#negro").click(function() {
            var request = "traerBocasNegro";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#blanco").click(function() {
            var request = "traerBocasBlanco";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#cafe").click(function() {
            var request = "traerBocasCafe";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#cafeoscuro").click(function() {
            var request = "traerBocasCafeOscuro";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#gris").click(function() {
            var request = "traerBocasGris";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#grisclaro").click(function() {
            var request = "traerBocasGrisClaro";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#lila").click(function() {
            var request = "traerBocasLila";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#morado").click(function() {
            var request = "traerBocasMorado";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#moradoclaro").click(function() {
            var request = "traerBocasMoradoClaro";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#rosado").click(function() {
            var request = "traerBocasRosado";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#rojo").click(function() {
            var request = "traerBocasRojo";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#verde1").click(function() {
            var request = "traerBocasVerde1";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#verde2").click(function() {
            var request = "traerBocasVerde2";
            var parametros = "";
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
        var request = "traerOjos";
        var parametros = "";
        var ejecucion = function(datos) {
            document.getElementById("contenido").innerHTML = datos;
        };
        MIAjax(request, parametros, ejecucion);
    });
    $("#Boca").click(function() {
        var request = "traerBocas";
        var parametros = "";
        var ejecucion = function(datos) {
            document.getElementById("contenido").innerHTML = datos;
            $("#azul").click(function() {
            var request = "traerBocasAzul";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#negro").click(function() {
            var request = "traerBocasNegro";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#blanco").click(function() {
            var request = "traerBocasBlanco";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#cafe").click(function() {
            var request = "traerBocasCafe";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#cafeoscuro").click(function() {
            var request = "traerBocasCafeOscuro";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#gris").click(function() {
            var request = "traerBocasGris";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#grisclaro").click(function() {
            var request = "traerBocasGrisClaro";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#lila").click(function() {
            var request = "traerBocasLila";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#morado").click(function() {
            var request = "traerBocasMorado";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#moradoclaro").click(function() {
            var request = "traerBocasMoradoClaro";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#rosado").click(function() {
            var request = "traerBocasRosado";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#rojo").click(function() {
            var request = "traerBocasRojo";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#verde1").click(function() {
            var request = "traerBocasVerde1";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
            $("#verde2").click(function() {
            var request = "traerBocasVerde2";
            var parametros = "";
            var ejecucion = function(datos) {
                document.getElementById("coloresBoca").innerHTML = datos;
                };
                MIAjax(request, parametros, ejecucion);
            });
        };
        MIAjax(request, parametros, ejecucion);
    });
    $("#Pelo").click(function() {
        var request = "traerPelo";
        var parametros = "hola";
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
    $("#Guardar").click(function () {
        var nombrePersonaje = $("#nombre").val();
        var imagenBoca = $("#img3").attr('src');
        var imagenOjos = $("#img2").attr('src');
        var imagenPelo = $("#img4").attr('src');
        var request = "guardaPersonaje?parametros="+nombrePersonaje+","+ imagenOjos+","+imagenBoca+","+imagenPelo;
        var parametros = "";
        $("#nombre").val("")
        $("#img3").attr('src','static/view/avatar/trasparente/bocaT.png');
        $("#img2").attr('src','static/view/avatar/trasparente/ojos.png');
        $("#img4").attr('src','static/view/avatar/trasparente/peloT.png');
        alert("El personaje : "+nombrePersonaje+" ,a sido guardado")
        location.reload();
        var ejecucion = function(datos) {
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

$.ajax({
    url: 'crearListaPersonaje',
    dataType: 'text',
    }).done(successFunction);

function successFunction(data) {
    var allRows = data.split(/\r?\n|\r/);
    var table = '<table>';
    for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
        if (singleRow === 0) {
            table += '<thead>';
            table += '<tr>';
        } else {
            table += '<tr>';
        }
        var rowCells = allRows[singleRow].split(',');
        for (var rowCell = 0; rowCell < 1; rowCell++) {
            if (singleRow === 0) {
                table += '<th>';
                table += rowCells[rowCell];
                table += '</th>';
            } else {
                table += '<td>';
                table += rowCells[rowCell];
                table += '</td>';
            }
        }
        if (singleRow === 0) {
            table += '</tr>';
            table += '</thead>';
            table += '<tbody>';
        } else {
            table += '</tr>';
        }
    }
    table += '</tbody>';
    table += '</table>';
    $('table').append(table);
}
function buscarPersonaje(){
    $.ajax({
    url: 'buscarPersonaje',
    dataType: 'text',
    }).done(successFunction2);
}
function successFunction2(data) {
    var nombre = document.getElementById('nombreABuscar').value;
    var seEncontro= false
    var allRows = data.split(/\r?\n|\r/);
    for (var singleRow = 1; singleRow < allRows.length; singleRow++) {
        var rowCells = allRows[singleRow].split(',');
        for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
            if (nombre == rowCells[rowCell]){
                var imagenO = rowCells[1];
                var imagenB = rowCells[2];
                var imagenP = rowCells[3];
                seEncontro = true
                break
            }
        }
    }
    if (seEncontro){
        document.getElementById("img3").src=imagenB;
        document.getElementById("img2").src=imagenO;
        document.getElementById("img4").src=imagenP;
    }else{
        alert("no se encontro el personaje : "+nombre)
    }
}




