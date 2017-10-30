import  cherrypy,os


class CreatuAvatar(object):
    @cherrypy.expose

    def index(self):
        html="""
<!DOCTYPE html>
<html lang="en" >
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">
<title>CREA TU PROPIO AVATAR</title>
<link rel="stylesheet" type="text/css" href="static/css/style.css">
<!--icono pestaña-->
<link rel="shortcut icon" type="image/x-icon" href="static/view/icono.ico">

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
            <img src="static/view/avatar/avatarSencilloxcf.png">
        </div>
        <div class="nombreAvatar">
            <input type="text" name="Nombre del Avatar" placeholder="Nombre del Avatar">
        </div>
        <div class="caracteristicas1">
            <img src="static/view/control caracteristicas/flechaiz.png" id="flechaiz">
            <img src="static/view/control caracteristicas/pelo.png">
            <img src="static/view/avatar/boca.png">
            <img src="static/view/control caracteristicas/ojos.png">
            <img src="static/view/control caracteristicas/flechade.png" id="flechade">
        </div>
        <div class="caracteristicas2">
            <img src="static/view/control caracteristicas/flechaiz.png" id="flechaiz">
            <img src="static/view/control caracteristicas/cabeza.png">
            <img src="static/view/control caracteristicas/torzo.png">
            <img src="static/view/control caracteristicas/piernas.png">
            <img src="static/view/control caracteristicas/flechade.png" id="flechade">
        </div>
        
    </div>
    <div class="cajas">
        <div class="partes">
            <img src="static/view/avatar/boca.png">
            <img src="static/view/avatar/boca2.png">
            <img src="static/view/avatar/boca3.png">
            <img src="static/view/avatar/boca4.png">
            <img src="static/view/avatar/boca5.png">
            <img src="static/view/avatar/boca6.png">
            <img src="static/view/avatar/boca7.png">
            <img src="static/view/avatar/boca8.png">
            <img src="static/view/avatar/boca9.png">
        </div>
        <div class="colores">
            <img src="static/view/colores/negro.png">
            <img src="static/view/colores/azul.png">
            <img src="static/view/colores/blanco.png">
            <img src="static/view/colores/cafe.png">
            <img src="static/view/colores/cafeoscuro.png">
            <img src="static/view/colores/gris.png">				
            <img src="static/view/colores/grisclaro.png">
            <img src="static/view/colores/lila.png">
            <img src="static/view/colores/morado.png">
            <img src="static/view/colores/moradoclaro.png">
            <img src="static/view/colores/rosado.png">
            <img src="static/view/colores/rojo.png">
            <img src="static/view/colores/verde1.png">
            <img src="static/view/colores/verde2.png">
                            
        </div>
        
    </div>
    <div class="cajas">
        <div class="dataBase">
            <h2>Avatar's Creados<h2>
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
        <h2>comentarios<h2>
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
