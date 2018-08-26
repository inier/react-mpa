module.exports = {
  plugins: [
    require("precss"),
    require("postcss-cssnext"),
    require("postcss-import"),
    require("css-mqpacker"),
    require("autoprefixer")({ browsers: ["last 5 versions"]}) 
  ]
};
