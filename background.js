
// Function to get the current tab
async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    console.log("tab");
    console.log(tab.id)
    return tab;
}

// Listen for hotkey shortcut command
chrome.commands.onCommand.addListener((e_grave) => {
    console.log("Hello world!");
    chrome.runtime.sendMessage({
        type: 'copy',
        text: 'ayyyyy'
    });
    getCurrentTab(function() {
        console.log(tab.id);
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['inject.js']
        });
    });
});