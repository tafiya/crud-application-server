"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectValidationSchema = exports.createValidationSchema = void 0;
const zod_1 = require("zod");
// Zod schema for product validation
exports.createValidationSchema = zod_1.z.object({ body: zod_1.z.object({
        title: zod_1.z.string().trim(),
        project: zod_1.z.string().optional(),
        status: zod_1.z.string().trim(),
        imgURL: zod_1.z.string().optional(), // default: ''
        description: zod_1.z.string().trim(),
        isDeleted: zod_1.z.boolean().optional().default(false), // default: false
    }) });
// TypeScript inference for the validated schema
exports.projectValidationSchema = { createValidationSchema: exports.createValidationSchema };
