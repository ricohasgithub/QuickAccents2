
// Function to get the current tab
async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

function injectedFunction_egrave () {
    let input = document.createElement('textarea');
    document.body.appendChild(input);
    input.value = "è";
    input.focus();
    input.select();
    document.execCommand("copy");
    input.remove();
}

// Listen for hotkey shortcut command
chrome.commands.onCommand.addListener((e_grave) => {
   
    // Callback to wait for chrome to get the current tab and then pass the tab into the injection script for copying to clipboard
    getCurrentTab().then(function (tab) {
        console.log("hello");
        console.log(tab);
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: injectedFunction_egrave
        });
    });

});