import Student from '../schemas/StudentSchema';

export const createStudent = async (data: any) => {
  return await Student.create(data);
};

export const getStudentById = async (id: string) => {
  return await Student.findById(id);
};

export const updateStudent = async (id: string, data: any) => {
  return await Student.findByIdAndUpdate(id, data, { new: true });
};

export const deleteStudent = async (id: string) => {
  return await Student.findByIdAndDelete(id);
};
