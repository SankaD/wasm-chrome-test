import init, {
    initSync,
    get_one,
    get_one_async,
    get_struct_async,
    get_struct,
    get_none,
    get_none_async,
    init as init2
} from './pkg/wasm_chrome_test.js';

(() => {
    init(undefined)
        .then((s) => {
            console.log("wasm", s);
            init2();
        })
        .then(s => {
            setInterval(async () => {
                let s = await get_struct_async()
                console.log("s : ", s);
            }, 100);
        });
})()
