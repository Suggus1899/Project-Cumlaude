import Admin from '../schemas/AdminSchema';

export const createAdmin = async (data: any) => {
  return await Admin.create(data);
};

export const getAdminById = async (id: string) => {
  return await Admin.findById(id);
};

export const updateAdmin = async (id: string, data: any) => {
  return await Admin.findByIdAndUpdate(id, data, { new: true });
};

export const deleteAdmin = async (id: string) => {
  return await Admin.findByIdAndDelete(id);
};
