module.exports = () => {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const hhmmss = String(now).split(" ")[4].split(":").join("");
  return `${y}${m}${d}${hhmmss}`;
};
