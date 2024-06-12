const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  devServer: {
    port: 6001,
  },
  webpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "hostCra",
        remotes: {
          remote1: "remote1@http://localhost:6002/remoteEntry.js",
        },
        shared: ["react", "react-dom"],
      }),
    ],
  },
  configure: {
    output: {
      publicPath: "auto",
    },
  },
};
