#!/usr/bin/env -S deno run --allow-read --allow-write
import { resolve } from "@std/path";
import { buildCatalog, ensureLibrary } from "./lib.ts";

const out = Deno.args[0] ?? "./library";
const libraryDir = resolve(out);

ensureLibrary(libraryDir);
const catalog = await buildCatalog(libraryDir, null);
console.log(`Rebuilt catalog.json with ${catalog.videos.length} video(s).`);
