module.exports = () => {
  const now = new Date();
  let y = now.getFullYear();
  let m = String(now.getMonth() + 1).padStart(2, "0");
  let d = String(now.getDate()).padStart(2, "0");
  let hhmmss = String(now).split(" ")[4].split(":").join("");
  return `${y}${m}${d}${hhmmss}`;
};
