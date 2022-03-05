const fs = require("fs");
const path = require("path");
const FastXMLParser = require("fast-xml-parser");
const exportCsv = require("./export_csv");
const dateFormatter = require("./date_formatter");
const createCsvData = require("./create_csv_data");

// Constants
const dateTime = dateFormatter();
const FILE_NAME = `kindle-${dateTime}.csv`;
const OUTPUT_PATH = path.resolve(__dirname, `../output/${FILE_NAME}`);
const XML_PATH = path.resolve(__dirname, "KindleSyncMetadataCache.xml");
const CHARSET = !!process.argv[2] ? process.argv[2] : "utf8";

const main = () => {
  const text = fs.readFileSync(XML_PATH);
  const parser = new FastXMLParser.XMLParser({ ignoreAttributes: false });
  const output = parser.parse(text);
  let purchasedData = output.response.add_update_list.meta_data.filter(
    (e) => !!e.purchase_date
  );
  const csvData = createCsvData(purchasedData);
  exportCsv(OUTPUT_PATH, csvData, CHARSET);
};

main();
