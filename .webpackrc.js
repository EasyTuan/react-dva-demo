let pxtorem = require("postcss-pxtorem");
let autoprefixer = require("autoprefixer");
let path = require("path");
const BUILD_ENV = process.env.BUILD_ENV;
const PRO_URL = "https://static-rs.msparis.com/activity/";
const TEST_URL = "";
const DEV_URL = "";

// 开发时的配置
const developmentConfig = {
  devtool: "#source-map",
  disableCSSModules: true,
  disableCSSSourceMap: true,
  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 75,
      propWhiteList: []
    }),
    autoprefixer({
      browsers: [">1%", "last 4 versions", "Firefox ESR", "not ie < 9"]
    })
  ],
  extraBabelPlugins: [
    "dva-hmr",
    ["import", { libraryName: "antd-mobile", style: true }] //按需加载antd-mobile样式文件
  ]
};
// 打包时的配置
const productionConfig = {
  disableCSSModules: true,
  disableCSSSourceMap: true,
  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 75,
      propWhiteList: []
    }),
    autoprefixer({
      browsers: [">1%", "last 4 versions", "Firefox ESR", "not ie < 9"]
    })
  ],
  extraBabelPlugins: [
    ["import", { libraryName: "antd-mobile", style: true }] //按需加载antd-mobile样式文件
  ],
  hash: true,
  // "publicPath":"http://static-r.msparis.com/activity/",
  // note by coco:roadhog只支持2种npm命令，且NODE_ENV只有dev&pro，因此选用第三个变量来区分dev，test，pro
  publicPath:
    BUILD_ENV === "pro" ? PRO_URL : BUILD_ENV === "test" ? TEST_URL : DEV_URL,
  html: {
    template: "./src/entry.ejs",
    inject: true,
    minify: {
      ignoreCustomComments: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      collapseWhitespace: true
    }
  }
};

export default {
  entry: "src/index.js",
  hash: false,
  theme: {
    hd: "2px"
  },
  alias: {
    "@": path.resolve(__dirname, "src/")
  },
  env: {
    development: developmentConfig,
    production: productionConfig
  }
};
