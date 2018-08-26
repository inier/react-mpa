const entryBuild = require("../entry/entry");
const webpackFile = require("./webpack.file.conf"); // 路径配置
let entry = {};
entryBuild.map(data => {
  entry[data.name] = [`./${webpackFile.entry}/${data.name}.js`, data.title];
});

module.exports = entry;
