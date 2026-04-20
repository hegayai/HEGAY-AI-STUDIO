import { randomUUID } from "crypto";

export const sleep = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const generateId = () => randomUUID();
