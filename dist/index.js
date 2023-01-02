"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main_1 = __importDefault(require("./routes/main"));
const app = (0, express_1.default)();
app.use(main_1.default);
app.get('/', (request, response) => {
    return response.json({
        message: 'olá mundo'
    });
});
app.listen(3000, () => console.log('Hello world!!'));
