var LOAD_DATA_TYPE = Math.floor(Math.random() * 4);

function loadScriptSync(src) {
    var s = document.createElement('script');
    s.src = src;
    s.type = "text/javascript";
    s.async = false;
    document.getElementsByTagName('head')[0].appendChild(s);
    console.log('Loaded script data from: '+src)
}

let current_url = new URL(window.location.href);
let script_type = current_url.searchParams.get("script_type")
console.log(script_type)
if (script_type !== null) {
    console.log("Loading custom script "+script_type)
    if (script_type === "dry") {
        LOAD_DATA_TYPE = LOG_DATA_DRY
    }
    else if (script_type === "nohumor") {
        LOAD_DATA_TYPE = LOG_DATA_NOHUMOR
    }
    else if (script_type === "nosnark") {
        LOAD_DATA_TYPE = LOG_DATA_NOSNARK
    }
    else if (script_type === "original") {
        LOAD_DATA_TYPE = LOG_DATA_NORMAL
    }
    else {
        console.log("Invalid script_type "+script_type)
    }
}
if (LOAD_DATA_TYPE == LOG_DATA_DRY) {
    loadScriptSync('src/scenes/data_dry.js')
}
else if (LOAD_DATA_TYPE == LOG_DATA_NOHUMOR) {
    loadScriptSync('src/scenes/data_nohumor.js')
}
else if (LOAD_DATA_TYPE == LOG_DATA_NOSNARK) {
    loadScriptSync('src/scenes/data_nosnark.js')
}
else if (LOAD_DATA_TYPE == LOG_DATA_NORMAL) {
    loadScriptSync('src/scenes/data.js')
}

