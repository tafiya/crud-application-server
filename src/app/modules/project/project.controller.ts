import { StatusCodes } from 'http-status-codes';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { projectServices } from './project.service';

// create a Project

const createProject = catchAsync(async (req, res) => {
  const result = await projectServices.createProjectIntoDb(req.body);
  sendResponse(res, {
    message: 'Project is created successfully',
    statusCode: StatusCodes.CREATED,
    data: result,
  });
});

// get all Project.
const getAllProjects = catchAsync(async (req, res) => {
  const result = await projectServices.getAllProjectsFromDB();
  sendResponse(res, {
    message: 'Projects fetched successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});
//  Get a Specific Project
const getSpecificProject = catchAsync(async (req, res) => {
  const { _id } = req.params;

  const result = await projectServices.getSpecificProjectFromDB(_id);
  sendResponse(res, {
    message: 'Project fetched successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});
// update a Project
const updateProject = catchAsync(async (req, res) => {
  const { _id } = req.params;
  const result = await projectServices.updateProjectIntoDB(_id, req.body);
  sendResponse(res, {
    message: 'Project is updated successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

// Delete a Project
const deleteProject = catchAsync(async (req, res) => {
  const { _id } = req.params;
  await projectServices.deleteSpecificProjectFromDB(_id);
  sendResponse(res, {
    message: 'Project is  deleted successfully',
    statusCode: StatusCodes.OK,
  });
});

export const projectControllers = {
  createProject,
  getAllProjects,
  getSpecificProject,
  updateProject,
  deleteProject,
};
