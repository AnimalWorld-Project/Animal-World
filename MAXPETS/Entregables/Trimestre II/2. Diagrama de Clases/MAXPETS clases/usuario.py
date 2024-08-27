class Usuario:
    def __init__(self, id: int, rol: str, email: str, contrasena: str, nombre: str, cedula: str):
        self.id = id
        self.rol = rol
        self.email = email
        self._contrasena = contrasena
        self.nombre = nombre
        self._cedula = cedula
    
    def ingresoSistema(self):
        return str

    def _visualiza_historial_clinico(self):
        return str

    def _visualiza_datos_de_mascota(self):
        return str

    def _programa_cita(self):
        return str