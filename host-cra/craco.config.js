const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

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
        shared: {
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      }),
    ],
  },
  configure: {
    output: {
      publicPath: "auto",
    },
  },
};
