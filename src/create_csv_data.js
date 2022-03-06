const normalize = (str) => `"${str.replaceAll('"', "'")}"`;

module.exports = (datas) => {
  let csvData = "";
  const header = [
    "asin",
    "title",
    "author",
    "publisher",
    "publication_date",
    "purchase_date",
  ];
  csvData += header.join() + "\n";

  datas.forEach((data) => {
    const {
      ASIN: asin,
      title: { "#text": titleText },
      authors: {
        author: { "#text": authorText },
      },
      publishers: { publisher },
      publication_date,
      purchase_date,
    } = data;

    csvData +=
      [asin, titleText, authorText, publisher, publication_date, purchase_date]
        .map((e) => normalize(e))
        .join(",") + "\n";
  });
  return csvData;
};
