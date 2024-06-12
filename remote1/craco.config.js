const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  devServer: {
    port: 6002,
  },
  webpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "remote1",
        filename: "remoteEntry.js",
        exposes: {
          "./AppR1": "./src/App",
        },
        shared: ["react", "react-dom"],
      }),
    ],
    configure: {
      output: {
        publicPath: "auto",
      },
    },
  },
};
