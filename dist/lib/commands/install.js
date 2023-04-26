"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.install = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
const child_process_1 = require("child_process");
const promise_pool_1 = require("@supercharge/promise-pool");
const validate_manager_1 = require("../helpers/validate-manager");
const console_1 = require("../helpers/console");
function install(manager, node) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(0, validate_manager_1.validateManager)(manager)) {
            (0, console_1.log)("red", "ERROR", `${manager} is not a recognized package manager`);
            process.exit(1);
        }
        const projects = (0, fs_1.readdirSync)(node, { withFileTypes: true })
            .filter((dir) => dir.isDirectory())
            .map((dir) => (0, path_1.join)(node, dir.name));
        yield promise_pool_1.PromisePool.for(projects)
            .withConcurrency(10)
            .process((project) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!(0, fs_1.readdirSync)(project).includes("package.json")) {
                    (0, console_1.log)("yellow", "SKIP", `${project}/package.json missing`);
                    return;
                }
                else {
                    process.chdir(project);
                    (0, console_1.log)("green", "INSTALL", `${project}`);
                    (0, child_process_1.execSync)(`${manager} install`, {
                        stdio: "ignore",
                    });
                }
            }
            catch (error) {
                (0, console_1.log)("red", "ERROR", `Couldn't install dependencies in ${project}`);
            }
        }));
        (0, console_1.log)("green", "FINISHED", `Installed node packages in ${projects.length} projects`);
    });
}
exports.install = install;
//# sourceMappingURL=install.js.map