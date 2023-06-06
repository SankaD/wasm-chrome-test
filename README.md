# wasm-chrome-test
test project for testing chrome memory usage for wasm-pack created files

## Recreating the issue

If we generate the wasm related js files with wasm-pack directly, no memory leak happens.

1. wasm-pack build --target web
2. uncomment the required lines in index.html

But if we generate the files using webpack config file, there is a memory growth visible.

1. webpack --config webpack.config.js
2. uncomment the required lines in index.html
