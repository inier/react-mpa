const fs = require("fs");
const rimraf = require("rimraf");
const webpackFile = require("./webpack.file.conf");
const webpackComConf = require("./webpack.com.conf");

/*删除开发目录*/
rimraf.sync(webpackFile.dev);
/*创建开发目录*/
fs.mkdirSync(webpackFile.dev);

/*生成HTML*/
let htmlCont = fs.readFileSync("./public/index.html", "utf-8");
let scriptInsert = `
<script type=text/javascript src=js/manifest.js></script>
<script type=text/javascript src=js/vendor.js></script>
<script type=text/javascript src=js/common.js></script>
<script type=text/javascript src=js/key.js></script>
`;
htmlCont = htmlCont.replace("</body>", scriptInsert + "</body>");

const entryBuild = require("../entry/entry");
entryBuild.map(data => {
  fs.writeFile(
    webpackFile.dev + "/" + data.name + ".html",
    htmlCont
      .replace("js/key.js", "js/" + data.name + ".js")
      .replace(
        "<%= htmlWebpackPlugin.options.title %>",
        webpackComConf.titleFun(data.name, data.title)
      ),
    "utf8",
    function(err) {
      if (err) {
        return console.log(err);
      }
    }
  );
});
