const fs = require("fs");
const path = require("path");
const iconv = require("iconv-lite");

// Supported Encodings list
// https://github.com/ashtuchkin/iconv-lite/wiki/Supported-Encodings
module.exports = (outputpath, data, charset) => {
  const list = fs.readFileSync(
    path.resolve(__dirname, "encodings_list.json"),
    "utf8"
  );

  list.includes(charset);
  if (list.includes(charset)) {
    fs.writeFile(outputpath, iconv.encode(data, charset), (err) => {
      if (err) throw err;
    });
  } else {
    console.log("This charset is not supported.");
  }
};
