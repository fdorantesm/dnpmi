import { join } from "path";
import { readdirSync } from "fs";
import { execSync } from "child_process";
import { PromisePool } from "@supercharge/promise-pool";

import { validateManager } from "../helpers/validate-manager";
import { log } from "../helpers/console";

export async function install(manager: string, node: string) {
  if (!validateManager(manager)) {
    log("red", "ERROR", `${manager} is not a recognized package manager`);
    process.exit(1);
  }

  const projects = readdirSync(node, { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .map((dir) => join(node, dir.name));

  await PromisePool.for(projects)
    .withConcurrency(10)
    .process(async (project) => {
      try {
        if (!readdirSync(project).includes("package.json")) {
          log("yellow", "SKIP", `${project}/package.json missing`);
          return;
        } else {
          process.chdir(project);

          log("green", "INSTALL", `${project}`);
          execSync(`${manager} install`, {
            stdio: "ignore",
          });
        }
      } catch (error) {
        log("red", "ERROR", `Couldn't install dependencies in ${project}`);
      }
    });

  log(
    "green",
    "FINISHED",
    `Installed node packages in ${projects.length} projects`
  );
}
