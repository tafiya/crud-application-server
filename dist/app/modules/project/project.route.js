"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRoutes = void 0;
const express_1 = __importDefault(require("express"));
const project_controller_1 = require("./project.controller");
const validateRequest_1 = require("../../middleware/validateRequest");
const project_validation_1 = require("./project.validation");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.validateRequest)(project_validation_1.projectValidationSchema.createValidationSchema), project_controller_1.projectControllers.createProject);
//  Get all Project
router.get('/', project_controller_1.projectControllers.getAllProjects);
//  Get a Specific Project
router.get('/:_id', project_controller_1.projectControllers.getSpecificProject);
// Update a Project
router.put('/:_id', project_controller_1.projectControllers.updateProject);
// Delete a Project
router.delete('/:_id', project_controller_1.projectControllers.deleteProject);
exports.projectRoutes = router;
