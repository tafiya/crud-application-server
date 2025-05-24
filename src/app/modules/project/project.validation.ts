import { z } from 'zod';

// Zod schema for product validation
export const createValidationSchema =z.object({body:z.object({
  title: z.string().trim(),
  project: z.string().optional(),
  status: z.string().trim(),
  imgURL: z.string().optional(), // default: ''
  description: z.string().trim(),
  isDeleted: z.boolean().optional().default(false), // default: false
})}) ;
// TypeScript inference for the validated schema
export const projectValidationSchema = { createValidationSchema };
