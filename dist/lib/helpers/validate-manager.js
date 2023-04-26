"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateManager = void 0;
const managers_1 = require("../constants/managers");
function validateManager(manager) {
    const managers = Object.keys(managers_1.Managers).map((v) => v.toLocaleLowerCase());
    return managers.some((item) => item === manager);
}
exports.validateManager = validateManager;
//# sourceMappingURL=validate-manager.js.map