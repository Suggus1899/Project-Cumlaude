import Teacher from '../schemas/TeacherSchema';

export const createTeacher = async (data: any) => {
  return await Teacher.create(data);
};

export const getTeacherById = async (id: string) => {
  return await Teacher.findById(id);
};

export const updateTeacher = async (id: string, data: any) => {
  return await Teacher.findByIdAndUpdate(id, data, { new: true });
};

export const deleteTeacher = async (id: string) => {
  return await Teacher.findByIdAndDelete(id);
};
