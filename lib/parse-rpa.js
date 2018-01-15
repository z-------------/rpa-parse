const fs = require("fs");
const path = require("path");
const fileType = require("file-type");
const bufferSplit = require("./buffer-split.js");

const delimiter = "Made with Ren'Py.";

module.exports = function(filename, outputDirname, autoExt) {
  let sourceName = path.parse(filename).name;

  if (!fs.existsSync(outputDirname)) {
    fs.mkdirSync(outputDirname);
  }

  fs.readFile(filename, (err, data) => {
    if (err) throw err;

    dataArr = bufferSplit(data, Buffer.from(delimiter));

    for (let i = 1, l = dataArr.length; i < l; i++) {
      var outputSuffix = "";
      if (autoExt) {
        outputSuffix  = "." + fileType(dataArr[i]).ext;
      }
      let outputPath = path.join(outputDirname, sourceName + "_" + i.toString() + outputSuffix);
      fs.writeFile(outputPath, Buffer.from(dataArr[i]), (err) => {
        if (err) {
          console.log(`Error writing file '${outputPath}'\n`, err);
        } else {
          console.log(`Wrote file '${outputPath}'`);
        }
      })
    }
  });
};
