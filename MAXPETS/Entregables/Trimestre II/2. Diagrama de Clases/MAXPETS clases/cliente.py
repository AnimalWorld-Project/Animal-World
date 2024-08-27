from usuario import Usuario


class Cliente(Usuario):
    def __init__(self, id: int, rol: str, email: str, contrasena: str, nombre: str, cedula: str):
        super().__init__(id, rol, email, contrasena, nombre, cedula)
        self.id = id
    
    def cancela_cita():
        return str