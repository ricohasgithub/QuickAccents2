
console.log("INJECTING SCRIPT");
document.body.style.backgroundColor = 'orange';

// Listen for hotkey shortcut command
chrome.runtime.onMessage.addListener(function(message) {
    console.log("COPY REQUEST RECEIVED");
    if (message && message.type == 'copy') {
        let input = document.createElement('textarea');
        document.body.appendChild(input);
        input.value = message.text;
        input.focus();
        input.select();
        document.execCommand("copy");
        input.remove();
    }
});