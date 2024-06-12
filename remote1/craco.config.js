const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

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
    configure: {
      output: {
        publicPath: "auto",
      },
    },
  },
};
