// process.traceDeprecation = true;
var webpack = require('webpack');

module.exports = {
	entry: "./src/script.js",
	output: {
		path: __dirname + '/public/build/',
		publicPath: "build/",
		filename: "bundle.js"
	},
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules|public)/,
              use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react'],
                        plugins: ['syntax-jsx']
                    }
                }
              ]
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|public)/,
                use: [                
                    'style-loader',
                    'css-loader',
                    'autoprefixer-loader'             
                ]
            },
            {
                test: /\.gif$/,
                loader: "url-loader?limit=10000&mimetype=image/gif"
            },
            {
                test: /\.jpg$/,
                loader: "url-loader?limit=10000&mimetype=image/jpg"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            },
            {
                test: /\.svg/,
                loader: "url-loader?limit=26000&mimetype=image/svg+xml"
            },
            {
                test: /\.jsx$/,                
                exclude: /(node_modules|public)/,
                use: [   
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react'],
                            plugins: ['syntax-jsx']
                        }
                    }               
                ]
            }
        ]
    }
}