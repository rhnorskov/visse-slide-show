const rules = require("./webpack.rules");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

rules.push({
	test: /\.css$/,
	use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

module.exports = {
	module: {
		rules,
	},
	plugins: [new ForkTsCheckerWebpackPlugin()],
	resolve: {
		plugins: [new TsconfigPathsPlugin()],
		extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
	},
};
