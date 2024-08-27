from usuario import Usuario


class Recepcionista(Usuario):
    def __init__(self, id: int, rol: str, email: str, contrasena: str, nombre: str, cedula: str, registro_diario: bool):
        super().__init__(id, rol, email, contrasena, nombre, cedula)
        self.registro_diario = registro_diario
    
    def _registrar_ingreso_paciente():
        return str