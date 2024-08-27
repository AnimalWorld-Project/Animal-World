from datetime import datetime


class Cita:
    def __init__(self, id_cita: int, fecha_hora: datetime, motivo: str, paciente: str, doctor: str):
        self.id_cita = id_cita
        self.fecha_hora = fecha_hora
        self.motivo = motivo
        self.paciente = paciente
        self.doctor = doctor
    
    def informacion():
        return str