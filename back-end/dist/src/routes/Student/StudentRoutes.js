"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import * as cors from 'cors'
var StudentController_1 = require("../../controllers/Student/StudentController");
var StudentRoute = express_1.default.Router();
StudentRoute.get('/', StudentController_1.getAllStudents);
StudentRoute.post('/', StudentController_1.addStudent);
StudentRoute.put('/', StudentController_1.updateStudent);
StudentRoute.delete('/:Id', StudentController_1.deleteStudent);
// StudentRoute.options('*', cors(options))
exports.default = StudentRoute;
//# sourceMappingURL=StudentRoutes.js.map