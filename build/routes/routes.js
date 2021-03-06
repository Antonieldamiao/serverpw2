"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const administratorctrl_1 = __importDefault(require("../controllers/administratorctrl"));
const contactctrl_1 = __importDefault(require("../controllers/contactctrl"));
const userctrl_1 = __importDefault(require("../controllers/userctrl"));
const routes = (0, express_1.Router)();
/* ROUTES USER */
routes.post('/user/add', userctrl_1.default.add);
routes.delete('/user/delete/:id', userctrl_1.default.delete);
routes.post('/user/login', userctrl_1.default.login);
routes.get('/user/validate/:id', userctrl_1.default.validateAccount);
routes.get('/user/list', userctrl_1.default.list);
/* ROUTES CONTACTS */
routes.post('/contact/add', contactctrl_1.default.add);
routes.post('/contact/search', contactctrl_1.default.search);
routes.post('/contact/list', contactctrl_1.default.list);
routes.put('/contact/update', contactctrl_1.default.update);
routes.delete('/contact/delete/:id', contactctrl_1.default.delete);
/* ROUTES ADMINISTRATOR */
routes.post('/administrator/login', administratorctrl_1.default.login);
routes.post('/administrator/add', administratorctrl_1.default.add);
routes.put('/administrator/update', administratorctrl_1.default.update);
exports.default = routes;
