module.exports = {
	makers: [
		{
			name: "@electron-forge/maker-squirrel",
		},
		{
			name: "@electron-forge/maker-zip",
			platforms: ["darwin"],
		},
		{
			name: "@electron-forge/maker-deb",
		},
		{
			name: "@electron-forge/maker-rpm",
		},
	],
	publishers: [
		{
			name: "@electron-forge/publisher-github",
			config: {
				repository: {
					owner: "rhnorskov",
					name: "visse-slide-show",
				},
			},
		},
	],
	plugins: [
		[
			"@electron-forge/plugin-webpack",
			{
				mainConfig: "./webpack.main.config.js",
				renderer: {
					config: "./webpack.renderer.config.js",
					entryPoints: [
						{
							html: "./src/index.html",
							js: "./src/renderer.tsx",
							name: "main_window",
						},
					],
				},
			},
		],
	],
};
