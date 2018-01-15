#!/usr/bin/env node

const path = require("path");
const parseRPA = require("../lib/parse-rpa.js");

let args = require("minimist")(process.argv.slice(2));

let usageString = "Usage: rpa-parse <filename> [<output dir>] [--auto-ext|--force-ext=<ext>]";

if (args._.length === 0 || args.h || args.help) {
  console.log(usageString);
} else if (args._.length >= 1) {
  var targetFileName, outputDirname;

  if (path.isAbsolute(args._[0])) {
    targetFileName = args._[0];
  } else {
    targetFileName = path.join(process.cwd(), args._[0])
  }

  if (args._[1]) {
    if (path.isAbsolute(args._[1])) {
      outputDirname = args._[1];
    } else {
      outputDirname = path.join(process.cwd(), args._[1])
    }
  } else {
    outputDirname = process.cwd();
  }

  parseRPA(targetFileName, outputDirname, {
    autoExt: args["auto-ext"],
    forceExt: args["force-ext"]
  });
}
