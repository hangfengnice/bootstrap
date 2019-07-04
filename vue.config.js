const path = require("path");
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  devServer: {
    open: true,

    proxy: {
      "/api": {
        target: "http://localhost:8080/",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src/assets/resetCss"))
      .set("common", resolve("src/common"));
  },
  publicPath: "./"
};
