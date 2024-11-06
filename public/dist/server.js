"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoute_1 = __importDefault(require("./routers/userRoute"));
const emailRouter_1 = __importDefault(require("./routers/emailRouter"));
const passwordRouter_1 = __importDefault(require("./routers/passwordRouter"));
const dotenv_1 = __importDefault(require("dotenv"));
const allowedOrigins_1 = require("./config/allowedOrigins");
const cors_1 = __importDefault(require("cors"));
const path = require('path');
dotenv_1.default.config();
// Ensure the path is correct
// import k from 
const PORT = process.env.PORT || 10010;
const app = (0, express_1.default)();
// app.use(cors());
app.use((0, cors_1.default)({ origin: allowedOrigins_1.allowedOrigins }));
app.use(express_1.default.json());
app.post(process.env.TYPE_APP_SING_PATH || '/api.signup', userRoute_1.default);
app.post(process.env.TYPE_APP_LOG_PATH || '/api.login', userRoute_1.default);
app.post(process.env.TYPE_APP_EMAIL_PATH || '/api.login', emailRouter_1.default);
app.post('/api.password', passwordRouter_1.default);
app.post('/api.change.password', passwordRouter_1.default);
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
