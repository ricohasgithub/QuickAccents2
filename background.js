
// Listen for hotkey shortcut command
chrome.commands.onCommand.addListener((e_grave) => {
    console.log("Hello world!");
    navigator.permissions.query({ name: 'clipboard-write' }).then(result => {
        if (result.state === 'granted') {
            let blob = new Blob(['hello'], {type: 'text/plain'});
            let item = new ClipboardItem({'text/plain': blob});
            navigator.clipboard.write([item]).then(function() {
              console.log("Copied to clipboard successfully!");
            }, function(error) {
              console.error("unable to write to clipboard. Error:");
              console.log(error);
            });
        } else {
            console.log("clipboard-permissoin not granted: " + result);
        }
    });
});