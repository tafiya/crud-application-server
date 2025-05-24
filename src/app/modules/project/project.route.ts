import express from 'express';
import { projectControllers } from './project.controller';
import { validateRequest } from '../../middleware/validateRequest';
import { projectValidationSchema } from './project.validation';


const router = express.Router();


router.post(
  '/',
  
  validateRequest(projectValidationSchema.createValidationSchema),
  projectControllers.createProject,
);
//  Get all Project
router.get('/', projectControllers.getAllProjects);
//  Get a Specific Project
router.get('/:_id', projectControllers.getSpecificProject);
// Update a Project
router.put('/:_id',  projectControllers.updateProject);
// Delete a Project
router.delete('/:_id', projectControllers.deleteProject);
export const projectRoutes = router;
