#!/usr/bin/env node
import { Command } from "commander";
import { install } from "./lib/commands/install";

const program = new Command();

program.option("-d, --dir <directory>");
program.option("-p, --packageManager <packageManager>");

program.parse(process.argv);

const options = program.opts();

const directory = options.dir || ".";
const manager = options.packageManager || "npm";

install(manager, directory);
