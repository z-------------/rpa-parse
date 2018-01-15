module.exports = function(buffer, delimiter) {
  let result = [];
  var bufferSliced = buffer;

  if (!Buffer.isBuffer(delimiter)) {
    delimiter = Buffer.from(delimiter);
  }

  while (bufferSliced.indexOf(delimiter) !== -1) {
    let end = bufferSliced.indexOf(delimiter);
    result.push(bufferSliced.slice(0, end));
    bufferSliced = bufferSliced.slice(end + delimiter.length);
  }

  return result;
};
