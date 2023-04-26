#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const install_1 = require("./lib/commands/install");
const program = new commander_1.Command();
program.option("-d, --dir <directory>");
program.option("-p, --packageManager <packageManager>");
program.parse(process.argv);
const options = program.opts();
const directory = options.dir || ".";
const manager = options.packageManager || "npm";
(0, install_1.install)(manager, directory);
//# sourceMappingURL=index.js.map