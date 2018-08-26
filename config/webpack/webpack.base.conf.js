const webpackFile = require("./webpack.file.conf"); // 一些路径配置
const entry = require("./webpack.entry.conf");

const newEntry = {};
for (let name in entry) {
  newEntry[name] = entry[name][0];
}

let config = {
  entry: newEntry,
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css", ".pcss"]
  }
};

module.exports = config;
