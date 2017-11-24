import cherrypy
import os


class CreaTuAvatar(object):
    @cherrypy.expose

    def index(self):
        return open('public/index.html')

    @cherrypy.expose
    def guardaPersonaje(self,parametros=""):

        # Como abrir un archivo (nombre, permiso)
        archivo = open("archivo.csv", "a")
        archivo.write("\n"+str(parametros))
        archivo.close()

    @cherrypy.expose
    def crearListaPersonaje(self):
        return open("archivo.csv")

    @cherrypy.expose
    def buscarPersonaje(self):
        return open("archivo.csv")

    """Servicio Web"""
    @cherrypy.expose
    def traerBocas (self):
        return open('public/modulos/partesBocas.html')

    @cherrypy.expose
    def traerBocasAzul (self):
        return open('public/modulos/Colores/bocas/azul.html')

    @cherrypy.expose
    def traerBocasNegro(self):
        return open('public/modulos/Colores/bocas/negro.html')

    @cherrypy.expose
    def traerBocasBlanco(self):
        return open('public/modulos/Colores/bocas/blanco.html')

    @cherrypy.expose
    def traerBocasCafe(self):
        return open('public/modulos/Colores/bocas/cafe.html')

    @cherrypy.expose
    def traerBocasCafeOscuro(self):
        return open('public/modulos/Colores/bocas/cafeoscuro.html')

    @cherrypy.expose
    def traerBocasGris(self):
        return open('public/modulos/Colores/bocas/gris.html')

    @cherrypy.expose
    def traerBocasGrisClaro(self):
        return open('public/modulos/Colores/bocas/grisclaro.html')

    @cherrypy.expose
    def traerBocasLila(self):
        return open('public/modulos/Colores/bocas/lila.html')

    @cherrypy.expose
    def traerBocasMorado(self):
        return open('public/modulos/Colores/bocas/morado.html')

    @cherrypy.expose
    def traerBocasMoradoClaro(self):
        return open('public/modulos/Colores/bocas/moradoclaro.html')

    @cherrypy.expose
    def traerBocasRosado(self):
        return open('public/modulos/Colores/bocas/rosado.html')

    @cherrypy.expose
    def traerBocasRojo(self):
        return open('public/modulos/Colores/bocas/rojo.html')

    @cherrypy.expose
    def traerBocasVerde1(self):
        return open('public/modulos/Colores/bocas/verde1.html')

    @cherrypy.expose
    def traerBocasVerde2(self):
        return open('public/modulos/Colores/bocas/verde2.html')

    @cherrypy.expose
    def traerOjos(self):
        return open('public/modulos/partesOjos.html')

    @cherrypy.expose
    def traerPelo(self):
        return open('public/modulos/partesPelo.html')

    @cherrypy.expose
    def traerBocasVerde2(self):
        return open('public/modulos/Colores/bocas/verde2.html')

    @cherrypy.expose
    def traerBocasVerde2(self):
        return open('public/modulos/Colores/bocas/verde2.html')

    @cherrypy.expose
    def traerBocasVerde2(self):
        return open('public/modulos/Colores/bocas/verde2.html')

pagina = CreaTuAvatar()

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
    cherrypy.quickstart(pagina, '/', conf)
