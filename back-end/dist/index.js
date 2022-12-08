"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var StudentRoutes_1 = __importDefault(require("./src/routes/Student/StudentRoutes"));
dotenv_1.default.config();
var app = (0, express_1.default)();
var port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.use(express_1.default.json());
app.use('/student', StudentRoutes_1.default);
app.get('/', function (req, res, next) {
    res.status(200).json({
        data: 'Hello'
    });
});
app.listen(port, function () { return console.log("Server is running on port ".concat(port)); });
//# sourceMappingURL=index.js.map