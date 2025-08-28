import { useMemo } from 'react';
import { CSVLink } from 'react-csv';

type Student = {
  id: string;
  name: string;
};

type Enrollment = {
  studentName: string;
  subjectName: string;
  semester: string;
  status: string;
};

type Subject = {
  id: string;
  name: string;
};

interface DashboardProps {
  students: Student[];
  enrollments: Enrollment[];
  subjects: Subject[];
}

const Dashboard: React.FC<DashboardProps> = ({ students, enrollments, subjects }) => {
  // Memoize data for performance
  const csvData = useMemo(() => {
    return enrollments.map((e: Enrollment) => ({
      student: e.studentName,
      subject: e.subjectName,
      semester: e.semester,
      status: e.status,
    }));
  }, [enrollments]);

  return (
    <div>
      <h2>Panel Administrativo</h2>
      <section>
        <h3>Estadísticas</h3>
        <ul>
          <li>Total estudiantes: {students.length}</li>
          <li>Total inscripciones: {enrollments.length}</li>
          <li>Total materias: {subjects.length}</li>
        </ul>
      </section>
      <section>
        <h3>Exportar Inscripciones</h3>
        <CSVLink data={csvData} filename={"inscripciones.csv"}>
          Exportar a CSV
        </CSVLink>
      </section>
      {/* Filtros y tablas pueden agregarse aquí */}
    </div>
  );
};

export default Dashboard;
