"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectControllers = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const project_service_1 = require("./project.service");
// create a Project
const createProject = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_service_1.projectServices.createProjectIntoDb(req.body);
    (0, sendResponse_1.default)(res, {
        message: 'Project is created successfully',
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        data: result,
    });
}));
// get all Project.
const getAllProjects = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_service_1.projectServices.getAllProjectsFromDB();
    (0, sendResponse_1.default)(res, {
        message: 'Projects fetched successfully',
        statusCode: http_status_codes_1.StatusCodes.OK,
        data: result,
    });
}));
//  Get a Specific Project
const getSpecificProject = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    const result = yield project_service_1.projectServices.getSpecificProjectFromDB(_id);
    (0, sendResponse_1.default)(res, {
        message: 'Project fetched successfully',
        statusCode: http_status_codes_1.StatusCodes.OK,
        data: result,
    });
}));
// update a Project
const updateProject = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    const result = yield project_service_1.projectServices.updateProjectIntoDB(_id, req.body);
    (0, sendResponse_1.default)(res, {
        message: 'Project is updated successfully',
        statusCode: http_status_codes_1.StatusCodes.OK,
        data: result,
    });
}));
// Delete a Project
const deleteProject = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    yield project_service_1.projectServices.deleteSpecificProjectFromDB(_id);
    (0, sendResponse_1.default)(res, {
        message: 'Project is  deleted successfully',
        statusCode: http_status_codes_1.StatusCodes.OK,
    });
}));
exports.projectControllers = {
    createProject,
    getAllProjects,
    getSpecificProject,
    updateProject,
    deleteProject,
};
