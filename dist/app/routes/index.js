"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const project_route_1 = require("../modules/project/project.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/project',
        route: project_route_1.projectRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
