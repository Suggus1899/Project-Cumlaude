export const pensumData = {
  pensumId: 5,
  carrera: 'Ingeniería en Informática',
  semestres: [
    {
      numero: 1,
      materias: [
        { codigo: 'IC1222', nombre: 'Fundamentos de la Informática', horasTeoricas: 0, horasPracticas: 2, horasSemanales: 2, unidadesCredito: 3, prelaciones: [] },
        { codigo: 'DP0001', nombre: 'Deporte', horasTeoricas: 0, horasPracticas: 2, horasSemanales: 2, unidadesCredito: 2, prelaciones: [] },
        { codigo: 'IM1421', nombre: 'Matemática I', horasTeoricas: 0, horasPracticas: 6, horasSemanales: 6, unidadesCredito: 5, prelaciones: [] },
        { codigo: 'IM1223', nombre: 'Lógica Matemática', horasTeoricas: 0, horasPracticas: 5, horasSemanales: 5, unidadesCredito: 3, prelaciones: [] },
        { codigo: 'FC0001', nombre: 'Formación Constitucional', horasTeoricas: 0, horasPracticas: 65, horasSemanales: 65, unidadesCredito: 2, prelaciones: [] },
        { codigo: 'IH1124', nombre: 'Lenguaje y Comunicación', horasTeoricas: 0, horasPracticas: 3, horasSemanales: 3, unidadesCredito: 2, prelaciones: [] },
        { codigo: 'IH1125', nombre: 'Inglés I', horasTeoricas: 0, horasPracticas: 4, horasSemanales: 4, unidadesCredito: 2, prelaciones: [] },
        { codigo: 'EC005', nombre: 'Economía Digital', horasTeoricas: 20, horasPracticas: 20, horasSemanales: 40, unidadesCredito: 2, prelaciones: [] }
      ]
    },
    {
      numero: 2,
      materias: [
        { codigo: 'IM2421', nombre: 'Matemática II', horasTeoricas: 0, horasPracticas: 11, horasSemanales: 11, unidadesCredito: 5, prelaciones: ['IM1421'] },
        { codigo: 'IH2124', nombre: 'Problemática Científica Tecnológica', horasTeoricas: 0, horasPracticas: 9, horasSemanales: 9, unidadesCredito: 2, prelaciones: [] },
        { codigo: 'IB2322', nombre: 'Física I', horasTeoricas: 0, horasPracticas: 7, horasSemanales: 7, unidadesCredito: 4, prelaciones: ['IM1421'] },
        { codigo: 'IME320', nombre: 'Electiva I (Conducta Humana)', horasTeoricas: 0, horasPracticas: 55, horasSemanales: 55, unidadesCredito: 2, prelaciones: [] },
        { codigo: 'IC2323', nombre: 'Algoritmos I', horasTeoricas: 0, horasPracticas: 8, horasSemanales: 8, unidadesCredito: 3, prelaciones: ['IM1223'] },
        { codigo: 'AC0001', nombre: 'Arte y Cultura', horasTeoricas: 0, horasPracticas: 2, horasSemanales: 2, unidadesCredito: 2, prelaciones: ['FC0001'] },
        { codigo: 'IH2125', nombre: 'Inglés II', horasTeoricas: 0, horasPracticas: 10, horasSemanales: 10, unidadesCredito: 2, prelaciones: ['IH1125'] }
      ]
    },
    {
      numero: 3,
      materias: [
        { codigo: 'IC3323', nombre: 'Algoritmos II', horasTeoricas: 0, horasPracticas: 14, horasSemanales: 14, unidadesCredito: 3, prelaciones: ['IC2323'] },
        { codigo: 'IME520', nombre: 'Electiva II (Legislación Informática)', horasTeoricas: 0, horasPracticas: 57, horasSemanales: 57, unidadesCredito: 2, prelaciones: ['IME320'] },
        { codigo: 'IC3244', nombre: 'Programación I', horasTeoricas: 0, horasPracticas: 13, horasSemanales: 13, unidadesCredito: 4, prelaciones: ['IC2323'] },
        { codigo: 'IM3421', nombre: 'Matemática III', horasTeoricas: 0, horasPracticas: 16, horasSemanales: 16, unidadesCredito: 5, prelaciones: ['IM2421'] },
        { codigo: 'IB3322', nombre: 'Física II', horasTeoricas: 0, horasPracticas: 12, horasSemanales: 12, unidadesCredito: 4, prelaciones: ['IB2322'] },
        { codigo: 'IH3125', nombre: 'Metodología y Técnicas de Investigación', horasTeoricas: 0, horasPracticas: 15, horasSemanales: 15, unidadesCredito: 2, prelaciones: [] }
      ]
    },
    {
      numero: 4,
      materias: [
        { codigo: 'IM5421', nombre: 'Probabilidades y Estadística', horasTeoricas: 0, horasPracticas: 20, horasSemanales: 20, unidadesCredito: 3, prelaciones: ['IM3421'] },
        { codigo: 'IM4421', nombre: 'Matemática IV', horasTeoricas: 0, horasPracticas: 19, horasSemanales: 19, unidadesCredito: 5, prelaciones: ['IM3421'] },
        { codigo: 'IC4244', nombre: 'Programación II', horasTeoricas: 0, horasPracticas: 17, horasSemanales: 17, unidadesCredito: 4, prelaciones: ['IC3323'] },
        { codigo: 'IME720', nombre: 'Electiva III (Mantenimiento del Computador)', horasTeoricas: 0, horasPracticas: 21, horasSemanales: 21, unidadesCredito: 2, prelaciones: ['IME520'] },
        { codigo: 'IM4323', nombre: 'Estructuras Discretas I', horasTeoricas: 0, horasPracticas: 18, horasSemanales: 18, unidadesCredito: 4, prelaciones: ['IC3323'] },
        { codigo: 'IS4225', nombre: 'Base de Datos', horasTeoricas: 0, horasPracticas: 22, horasSemanales: 22, unidadesCredito: 3, prelaciones: ['IC3244'] }
      ]
    },
    {
      numero: 5,
      materias: [
        { codigo: 'IS5205', nombre: 'Teoría de Sistemas', horasTeoricas: 0, horasPracticas: 28, horasSemanales: 28, unidadesCredito: 2, prelaciones: [] },
        { codigo: 'IM5221', nombre: 'Álgebra Booleana', horasTeoricas: 0, horasPracticas: 25, horasSemanales: 25, unidadesCredito: 3, prelaciones: ['IM4323'] },
        { codigo: 'IM5323', nombre: 'Estructuras Discretas II', horasTeoricas: 0, horasPracticas: 26, horasSemanales: 26, unidadesCredito: 4, prelaciones: ['IM4323'] },
        { codigo: 'IC5244', nombre: 'Programación III', horasTeoricas: 0, horasPracticas: 23, horasSemanales: 23, unidadesCredito: 4, prelaciones: ['IC4244'] },
        { codigo: 'IMEIV', nombre: 'Electiva IV (Teleinformática)', horasTeoricas: 0, horasPracticas: 27, horasSemanales: 27, unidadesCredito: 2, prelaciones: ['IME720'] },
        { codigo: 'IC5422', nombre: 'Organización del Computador', horasTeoricas: 0, horasPracticas: 24, horasSemanales: 24, unidadesCredito: 5, prelaciones: ['IB3322'] }
      ]
    },
    {
      numero: 6,
      materias: [
        { codigo: 'ID6241', nombre: 'Investigación de Operaciones', horasTeoricas: 0, horasPracticas: 31, horasSemanales: 31, unidadesCredito: 4, prelaciones: ['IM5421'] },
        { codigo: 'IC6322', nombre: 'Arquitectura del Computador', horasTeoricas: 0, horasPracticas: 29, horasSemanales: 29, unidadesCredito: 4, prelaciones: ['IC5422'] },
        { codigo: 'IS6425', nombre: 'Sistemas de Información I', horasTeoricas: 0, horasPracticas: 33, horasSemanales: 33, unidadesCredito: 5, prelaciones: ['IS5205'] },
        { codigo: 'IM6243', nombre: 'Métodos Numéricos', horasTeoricas: 0, horasPracticas: 32, horasSemanales: 32, unidadesCredito: 4, prelaciones: ['IM5323'] },
        { codigo: 'ID6124', nombre: 'Ingeniería Económica', horasTeoricas: 0, horasPracticas: 30, horasSemanales: 30, unidadesCredito: 2, prelaciones: [] },
        { codigo: 'IMEV', nombre: 'Electiva V', horasTeoricas: 0, horasPracticas: 59, horasSemanales: 59, unidadesCredito: 2, prelaciones: ['IMEIV'] }
      ]
    },
    {
      numero: 7,
      materias: [
        { codigo: 'ID7323', nombre: 'Organización y Gestión Empresa', horasTeoricas: 0, horasPracticas: 36, horasSemanales: 36, unidadesCredito: 4, prelaciones: [] },
        { codigo: 'IS7244', nombre: 'Traductores e Intérpretes', horasTeoricas: 0, horasPracticas: 37, horasSemanales: 37, unidadesCredito: 4, prelaciones: ['IM5323'] },
        { codigo: 'IC7322', nombre: 'Sistemas Operativos', horasTeoricas: 0, horasPracticas: 34, horasSemanales: 34, unidadesCredito: 4, prelaciones: ['IC6322'] },
        { codigo: 'IS7324', nombre: 'Sistemas de Información II', horasTeoricas: 0, horasPracticas: 38, horasSemanales: 38, unidadesCredito: 5, prelaciones: ['IS6425'] },
        { codigo: 'ID7322', nombre: 'Control de Proyectos', horasTeoricas: 0, horasPracticas: 35, horasSemanales: 35, unidadesCredito: 4, prelaciones: [] }
      ]
    },
    {
      numero: 8,
      materias: [
        { codigo: 'EA', nombre: 'Electiva de Área I', horasTeoricas: 0, horasPracticas: 39, horasSemanales: 39, unidadesCredito: 4, prelaciones: [] },
        { codigo: 'ID8082', nombre: 'Pasantía', horasTeoricas: 0, horasPracticas: 40, horasSemanales: 40, unidadesCredito: 4, prelaciones: ['ID7322'] },
        { codigo: 'IS8243', nombre: 'Lenguaje de Programación', horasTeoricas: 0, horasPracticas: 41, horasSemanales: 41, unidadesCredito: 4, prelaciones: ['IS7244'] },
        { codigo: 'IS8424', nombre: 'Sistemas de Información III', horasTeoricas: 0, horasPracticas: 42, horasSemanales: 42, unidadesCredito: 5, prelaciones: ['IS7324'] },
        { codigo: 'IT8241', nombre: 'Redes', horasTeoricas: 0, horasPracticas: 43, horasSemanales: 43, unidadesCredito: 4, prelaciones: ['IC7322'] }
      ]
    },
    {
      numero: 9,
      materias: [
        { codigo: 'EL9325', nombre: 'Electiva Libre I', horasTeoricas: 0, horasPracticas: 1, horasSemanales: 1, unidadesCredito: 4, prelaciones: [] },
        { codigo: 'IT9241', nombre: 'Sistemas Distribuidos', horasTeoricas: 0, horasPracticas: 46, horasSemanales: 46, unidadesCredito: 4, prelaciones: ['IT8241'] },
        { codigo: 'EA9244', nombre: 'Electiva de Área II', horasTeoricas: 0, horasPracticas: 44, horasSemanales: 44, unidadesCredito: 4, prelaciones: ['EA'] },
        { codigo: 'IH9202', nombre: 'Ética Profesional', horasTeoricas: 0, horasPracticas: 45, horasSemanales: 45, unidadesCredito: 2, prelaciones: ['IS7324'] },
        { codigo: 'PG9083', nombre: 'Proyecto de Grado I', horasTeoricas: 0, horasPracticas: 47, horasSemanales: 47, unidadesCredito: 4, prelaciones: [] }
      ]
    },
    {
      numero: 10,
      materias: [
        { codigo: 'EA0244', nombre: 'Electiva de Área III', horasTeoricas: 0, horasPracticas: 48, horasSemanales: 48, unidadesCredito: 4, prelaciones: ['EA9244'] },
        { codigo: 'EL', nombre: 'Electiva Libre II', horasTeoricas: 0, horasPracticas: 49, horasSemanales: 49, unidadesCredito: 3, prelaciones: [] },
        { codigo: 'PG0083', nombre: 'Proyecto de Grado II', horasTeoricas: 0, horasPracticas: 52, horasSemanales: 52, unidadesCredito: 4, prelaciones: ['PG9083'] },
        { codigo: 'IS0222', nombre: 'Informática Educativa', horasTeoricas: 0, horasPracticas: 51, horasSemanales: 51, unidadesCredito: 3, prelaciones: [] },
        { codigo: 'ID0221', nombre: 'Gerencia de Proyecto', horasTeoricas: 0, horasPracticas: 50, horasSemanales: 50, unidadesCredito: 3, prelaciones: ['ID8082'] }
      ]
    }
  ]
};
