from usuario import Usuario


class Administrador(Usuario):
    def __init__(self, id: int, rol: str, email: str, contrasena: str, nombre: str, cedula: str, registro_diario: bool):
        super().__init__(id, rol, email, contrasena, nombre, cedula)
        self.id = id
        self.registro_diario = registro_diario
    
    def crear_registro():
        return str
        
    def eliminar_registro():
        return str

    def cancela_cita():
        return str

    def escribe_historial_clinico():
        return str
        
    def registrar_ingreso_paciente():
        return str