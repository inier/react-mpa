module.exports = {    
    plugins: [
        require("precss"), //sass解析
        require("postcss-cssnext"), //css新特性支持
        require("postcss-import"), // 文件名引入
        require("postcss-easy-import")({ prefix: "_", extensions: [".css", ".pcss"] }), // 文件名引入加前缀, 类sass引入
        require("cssnano")(), // 合并相同css规则
        require("css-mqpacker"), // 合并相同的media queries
        require("autoprefixer")({
            // 自动补全前缀（例：-webkit-transfrom，-moz-transfrom)
            browsers: [">0%", "last 4 versions", "Firefox ESR", "not ie < 8"]
        })
    ]
};
