import * as esbuild from "esbuild"

await esbuild.build({
  entryPoints: ["src/index.ts"],
  outfile: "lib/index.js",
  drop: ["console", "debugger"],
  minify: true,
  treeShaking: true,
  platform: "neutral",
  bundle: true,
  target: "ESNext",
})
