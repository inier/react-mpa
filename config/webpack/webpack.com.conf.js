let titleFun = function(chunkName, title) {
  let titleDef = "多页面";
  if (chunkName.indexOf("index") !== -1) {
    return titleDef;
  } else {
    return titleDef + "_" + title;
  }
};

module.exports = {
  titleFun: titleFun
};
