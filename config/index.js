const conf = {
	//webpack
	webpack: {
		contextPath: "./app",
		entry: "./index.js",
		venders: ["react", "react-dom"],
		outputPath: "./dist",
		publicPath: "/",
		htmlTitle: "Moka",
		htmlTemplate: "./index.html",
		port: 3000
	}
};

module.exports = conf;