import { StatusCodes } from 'http-status-codes';

import AppError from '../../errors/AppError';
import { Project } from './project.model';
import { TProject } from './project.interface';
const createProjectIntoDb = async (payload: TProject) => {
  const result = await Project.create(payload);
  return result;
};

const getAllProjectsFromDB = async () => {
  const result = await Project.find();

 
  return result;
};
const getSpecificProjectFromDB = async (ProjectId: string) => {
  const result = await Project.findById(ProjectId);
  if (result == null) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Project is not exist');
  }
  return result;
};
const updateProjectIntoDB = async (
  ProjectId: string,
  payload: Partial<TProject>,
) => {
  const isProjectExists = await Project.findById(ProjectId);
  if (!isProjectExists) {
    throw new AppError(StatusCodes.NOT_FOUND, 'This Project is not found !');
  }
  const result = await Project.findByIdAndUpdate(ProjectId, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deleteSpecificProjectFromDB = async (ProjectId: string) => {
  const isProjectExists = await Project.findById(ProjectId);
  if (!isProjectExists) {
    throw new AppError(StatusCodes.NOT_FOUND, 'This Project is not found !');
  }
  const result = await Project.findByIdAndUpdate(
    ProjectId,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

export const projectServices = {
  createProjectIntoDb,
  getAllProjectsFromDB,
  getSpecificProjectFromDB,
  updateProjectIntoDB,
  deleteSpecificProjectFromDB,
};
