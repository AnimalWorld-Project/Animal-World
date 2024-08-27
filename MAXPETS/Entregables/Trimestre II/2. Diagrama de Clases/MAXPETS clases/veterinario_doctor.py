from usuario import Usuario


class Veterinario_Doctor(Usuario):
    def __init__(self, id: int, rol: str, email: str, contrasena: str, nombre: str, cedula: str, registroDiario: bool, cargo: str):
        super().__init__(id, rol, email, contrasena, nombre, cedula)
        self.registroDiario = registroDiario
        self.cargo = cargo
    
    def escribe_historial_clinico():
        return str