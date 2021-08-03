
// Function to get the current tab
async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    console.log("tab");
    console.log(tab.id)
    return tab;
}

function injectedFunction () {
    console.log("INJECTING SCRIPT");
    document.body.style.backgroundColor = 'orange';
    let input = document.createElement('textarea');
    document.body.appendChild(input);
    input.value = "text to be copied";
    input.focus();
    input.select();
    document.execCommand("copy");
    input.remove();
}

// Listen for hotkey shortcut command
chrome.commands.onCommand.addListener((e_grave) => {

    console.log("Hello world!");
    chrome.runtime.sendMessage({
        type: 'copy',
        text: 'ayyyyy'
    });
    
    // Callback to wait for chrome to get the current tab and then pass the tab into the injection script for copying to clipboard
    getCurrentTab(function() {
        console.log(tab.id);
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: injectedFunction
        });
    });

});