module.exports = {
    presets: [
        "@babel/preset-env",
        ["@babel/preset-react", { runtime: "automatic" }],
    ],
    plugins: ["react-hot-loader/babel", "@babel/plugin-syntax-async-generators"]

};

[]