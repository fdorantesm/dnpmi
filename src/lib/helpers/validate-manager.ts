import { Managers } from "../constants/managers";

export function validateManager(manager: string): boolean {
  const managers = Object.keys(Managers).map((v) => v.toLocaleLowerCase());
  return managers.some((item) => item === manager);
}
