
// Listen for hotkey shortcut command
chrome.commands.onCommand.addListener((e_grave) => {
    console.log("Hello world!");
    chrome.runtime.sendMessage({
        type: 'copy',
        text: 'some text to copy'
    });
});