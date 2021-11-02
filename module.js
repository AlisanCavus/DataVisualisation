export function addScript() {   
    const SCRIPT = document.createElement('script');
    SCRIPT.src = "./main.js";
    SCRIPT.async = true;
    document.body.appendChild(SCRIPT);
}