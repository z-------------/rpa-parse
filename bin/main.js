#!/usr/bin/env node

const path = require("path");
const parseRPA = require("../lib/parse-rpa.js");

if (process.argv.length === 2 || process.argv[2] === "-h" || process.argv[2] === "--help") {
  console.log("Usage: rpa-parse <filename> [<output dir>]");
} else {
  var targetFileName, outputDirname;

  if (path.isAbsolute(process.argv[2])) {
    targetFileName = process.argv[2];
  } else {
    targetFileName = path.join(process.cwd(), process.argv[2])
  }

  if (process.argv[3]) {
    if (path.isAbsolute(process.argv[3])) {
      outputDirname = process.argv[3];
    } else {
      outputDirname = path.join(process.cwd(), process.argv[3])
    }
  } else {
    outputDirname = process.cwd();
  }

  parseRPA(targetFileName, outputDirname);
}
