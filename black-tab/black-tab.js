// Function to create a new tab with a black background
function createBlackTab() {
    chrome.tabs.create({ url: chrome.runtime.getURL('black-tab.html') });
  }
  
  // Listiner for icon extension click
  chrome.action.onClicked.addListener(tab => {
    // Call the function to create a new tab with a black background
    createBlackTab();
  });
  