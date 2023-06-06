# wasm-chrome-test
test project for testing chrome memory usage for wasm-pack created files

## Recreating the issue

if we generate the wasm related js files with wasm-pack directly, no memory leak happens.
But if we generate the files using webpack config file, there is a memory growth visible.
