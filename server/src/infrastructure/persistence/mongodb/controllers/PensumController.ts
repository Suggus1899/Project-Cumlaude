import Pensum from '../schemas/PensumSchema';

export const createPensum = async (data: any) => {
  return await Pensum.create(data);
};

export const getPensumById = async (id: string) => {
  return await Pensum.findById(id);
};

export const updatePensum = async (id: string, data: any) => {
  return await Pensum.findByIdAndUpdate(id, data, { new: true });
};

export const deletePensum = async (id: string) => {
  return await Pensum.findByIdAndDelete(id);
};

export const getAllPensums = async () => {
  return await Pensum.find();
};
