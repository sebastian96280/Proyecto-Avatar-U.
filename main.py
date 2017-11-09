import  cherrypy,os


class CreatuAvatar(object):
    @cherrypy.expose

    def index(self):
        html="""
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>CREA TU PROPIO AVATAR</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">

        <!--icono pestaña-->
        <link rel="shortcut icon" type="image/x-icon" href="static/view/icono.ico">
        <!--carrusel imagenes-->
        <link rel="stylesheet" type="text/css" href="static/css/style.css">
        <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">-->
        <script src="static/js/jquery.min.js" ></script>
        <script src="static/js/bootstrap.min.js" ></script>
        <script src="static/js/Mijava.js" ></script>



    </head>
    <body class="home">
        <header>
            <nav>
                <div>
                    <h1>CREA TU PROPIO AVATAR</h1>
                </div>
            </nav>
        </header>
        <div id="contenedor">
            <div class="cajas">
                <div class="avatar">
                    <img src="static/view/avatar/avatarSencilloxcf.png" id="img1" >
                    <div id="">
                        <img src="static/view/avatar/partesOjos/ojos09.png" id="img2" style="max-width:100%;">
                        <img src="static/view/avatar/partesBoca/boca9.png" id="img3">
                        <img src="static/view/avatar/partesPelo/pelo09.png" id="img4">
                    </div>

                </div>
                <div class="nombreAvatar">
                    <input type="text" name="Nombre del Avatar" placeholder="Nombre del Avatar">
                </div>
                <div class="caracteristicas1">
                    <div id="myCarousel" class="carousel slide" >
                        <!-- Indicators -->
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" ></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>

                        <!-- Wrapper for slides -->
                        <div class="carousel-inner">

                            <div class="item active">
                                <img src="static/view/control caracteristicas/pelo.png" alt="Los Angeles" id="Pelo" >
                                <div class="carousel-caption">

                                </div>
                            </div>

                            <div class="item">
                                <img src="static/view/control caracteristicas/boca.png" alt="Chicago" id="Boca">
                                <div class="carousel-caption">
                                </div>
                            </div>
                            <div class="item">
                                <img src="static/view/control caracteristicas/ojos.png" alt="New York" id="Ojos">
                                <div class="carousel-caption">
                                </div>
                            </div> <!-- Left and right controls -->
                            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="caracteristicas2">
                    <div id="myCarouse2" class="carousel slide" >
                        <!-- Indicators -->
                        <ol class="carousel-indicators">
                            <li data-target="#myCarouse2" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarouse2" data-slide-to="1"></li>
                            <li data-target="#myCarouse2" data-slide-to="2"></li>
                        </ol>

                        <!-- Wrapper for slides -->
                        <div class="carousel-inner" style="position: relative;">

                            <div class="item active" >
                                <img src="static/view/control caracteristicas/pelo.png" alt="" >
                            </div>

                            <div class="item">
                                <!--href="javascript:void(0)" id="Ciudades1"-->
                                <img src="static/view/control caracteristicas/cabeza.png" alt="" >
                            </div>

                            <div class="item">
                                <img src="static/view/control caracteristicas/ojos.png" alt="" >
                            </div>


                            <!-- Left and right controls -->
                            <a class="left carousel-control" href="#myCarouse2" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="right carousel-control" href="#myCarouse2" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>


                <!--
                            <div class="caracteristicas1">
                                    <img src="view/control caracteristicas/flechaiz.png">
                                    <img src="view/control caracteristicas/pelo.png">
                                    <img src="view/avatar/boca.png">
                                    <img src="view/control caracteristicas/ojos.png">
                                    <img src="view/control caracteristicas/flechade.png" >
                            </div>
                            <div class="caracteristicas2">
                                    <img src="view/control caracteristicas/flechaiz.png" >
                                    <img src="view/control caracteristicas/cabeza.png">
                                    <img src="view/control caracteristicas/torzo.png">
                                    <img src="view/control caracteristicas/piernas.png">
                                    <img src="view/control caracteristicas/flechade.png" >
                            </div>-->
            </div>


            <div class="cajas" id="contenido">

            </div>
            <div class="cajas">
                <div class="dataBase">
                    <h2>Avatar's Creados</h2>
                    <ul>
                        <li>luz</li>
                        <li>jonathan</li>
                        <li>jose</li>
                        <li>Heidi</li>
                        <li>lorena</li>
                        <li>Ivon</li>
                        <li>Miguel</li>
                        <li>Sebastian</li>
                        <li>Andres</li>
                        <li>Jhoan</li>

                    </ul>
                </div>
                <h2>comentarios</h2>
                <div class="comment">

                    <input type="text" name="comentario" placeholder="Deja un comentario">
                </div>
            </div>
        </div>

        <div id="pieDePagina">
            <div>
                <button>GUARDAR Y DESCARGAR</button>
            </div>
            <div>
                <button>COMPARTIR</button>
            </div>
            <div>
                <button>ENVIAR</button>
            </div>

        </div>

    </body>
</html>
"""
        return  html

if __name__ == '__main__':
    conf = {
        '/': {
            'tools.sessions.on': True,
            'tools.staticdir.root': os.path.abspath(os.getcwd())
        },
        '/static': {
            'tools.staticdir.on': True,
            'tools.staticdir.dir': './public'
        }
    }
    cherrypy.config.update({'server.socket_host': '127.0.0.1', })
    cherrypy.config.update({'server.socket_port': int(os.environ.get('PORT', '5000')), })
    cherrypy.quickstart(CreatuAvatar(), '/', conf)
