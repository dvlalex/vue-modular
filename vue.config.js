const isDev = process.env.NODE_ENV === "development"

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "assets",
  productionSourceMap: isDev,

  configureWebpack: {
    optimization: {
      runtimeChunk: "single"
    }
  },

  chainWebpack: config => {
    config.optimization.splitChunks({
      chunks: "all",
      cacheGroups: {
        vendors: {
          name: "vendors",
          test: /[\\/]node_modules[\\/]/,
          chunks: "initial",
          priority: -10,
          reuseExistingChunk: true,
          // minChunks: 1
        },

        common: {
          name: "common",
          chunks: "initial",
          priority: -20,
          reuseExistingChunk: true,
          // minChunks: 1
        }
      }
    })
  },

  pages: {
    dashboard: {
      entry: "src/dashboard/index.js",
      filename: "dashboard/index.html",
      title: "DEMO - dashboard",
      chunks: ["runtime", "vendors", "common", "dashboard"]
    },
    landing: {
      entry: "src/landing/index.js",
      filename: "index.html",
      title: "DEMO - landing",
      chunks: ["runtime", "vendors", "common", "landing"]
    }
  },

  devServer: {
    disableHostCheck: true,
    historyApiFallback: {
      rewrites: [
        { from: /^\/dashboard\/?.*/, to: "/dashboard/index.html" },

        { from: /./, to: "/index.html" }
      ]
    }
  }
}
