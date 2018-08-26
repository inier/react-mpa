const fs = require("fs");
const path = require("path");
const rimraf = require("rimraf");

const webpackFile = require("../webpack/webpack.file.conf"); // 一些路径配置

//定义entryBuild
const entryBuildPath = path.resolve(__dirname, `../../${webpackFile.entry}`);

//删除entryBuild
rimraf.sync(entryBuildPath);

//创建entryBuild
fs.mkdirSync(entryBuildPath);

//定义入口文件内容
const entryContent = data => `
import React from 'react';
import ReactDOM from 'react-dom';
import PageContent from "../${webpackFile.src}/${webpackFile.pages}/${data.path}";

ReactDOM.render([        
        <PageContent key="page"/>        
    ],
    document.getElementById('root')
);
`;

// 从源码的页面目录获取entrys
// const pagesPath = path.resolve(
//     __dirname,
//     `../../${webpackFile.src}/${webpackFile.pages}`
//   );
// let entrys = [];
// const files = fs.readdirSync(pagesPath);

// files.forEach(function(item, index) {
//   let stat = fs.lstatSync(pagesPath + item);
//   if (stat.isDirectory() === true) {
//     entrys.push(item);
//   }
// });

// console.log(entrys);

/*生成webpack entry 入口文件*/
const entrys = require("./entry");
entrys.map(data => {
  fs.writeFile(
    entryBuildPath + "/" + data.name + ".js",
    entryContent(data),
    "utf8",
    function(err) {
      if (err) {
        return console.log(err);
      }
    }
  );
});
