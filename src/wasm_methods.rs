use wasm_bindgen::prelude::*;
use log::{debug, error, info, trace, warn, Level};
use crate::methods::{get_one_async_m, get_one_m, Struct1};

#[wasm_bindgen]
pub fn init(){
    console_log::init_with_level(Level::Trace).unwrap();
}
#[wasm_bindgen]
pub async fn get_one_async() -> js_sys::JsString {
    info!("get_one_async");
    get_one_async_m().await.into()
}

#[wasm_bindgen]
pub fn get_one() -> js_sys::JsString {
    info!("get_one");
    get_one_m().into()
}

#[wasm_bindgen]
pub async fn get_none_async() {
    info!("get_none_async");
}

#[wasm_bindgen]
pub fn get_none() {
    info!("get_none");
}

#[wasm_bindgen]
pub fn get_struct()->WasmStruct1{
    WasmStruct1{ value: Struct1 { member1: 0 } }
}

#[wasm_bindgen]
pub async fn get_struct_async()->WasmStruct1{
    WasmStruct1{ value: Struct1 { member1: 0 } }
}

#[wasm_bindgen]
pub struct WasmStruct1{
    value:Struct1,
}

#[wasm_bindgen]
impl WasmStruct1{
    pub async fn test_async()->js_sys::JsString{
        get_one_async_m().await.into()
    }
    pub fn test_sync()->js_sys::JsString{
        get_one().into()
    }
}
