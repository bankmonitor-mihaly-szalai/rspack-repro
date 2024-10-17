import { CopyRspackPlugin } from "@rspack/core";

/**
 * @type {import('webpack').Configuration | import('@rspack/cli').Configuration}
 */
const config = {
  entry: {
    main: "./src/index",
  },
  plugins: [new CopyRspackPlugin({ patterns: [ "*.txt"]})],
};

export default config;
