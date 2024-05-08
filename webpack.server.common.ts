import path from "path";

import { Configuration } from "webpack";
import nodeExternals from "webpack-node-externals";

const webpackServerCommonConfig: Configuration = {
  entry: "./src/index.ts",
  mode: "development",
  target: "node",
  externals: [nodeExternals()],
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
  },
  module: {
    rules: [
      {
        test: /(\.tsx|\.ts)$/,
        use: ["ts-loader"],
      },
    ],
  },
};

export default webpackServerCommonConfig;
