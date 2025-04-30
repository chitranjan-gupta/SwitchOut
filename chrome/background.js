chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "openInNormalWindow",
    title: "Open Link in Normal Window",
    contexts: ["link", "image", "audio", "video"]
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "openInNormalWindow") {
	  console.log(info)
    const url = info.linkUrl || info.srcUrl;
    // Get all normal (non-incognito) windows
    const normalWindows = await chrome.windows.getAll({ populate: false, windowTypes: ["normal"] });
    
    if (normalWindows.length > 0) {
      // Use the first normal window
      chrome.tabs.create({
        url: url,
        windowId: normalWindows[0].id
      });
    } else {
      // If no normal windows are open, create one
      chrome.windows.create({
        url: url,
        incognito: false
      });
    }
  }
});

chrome.action.onClicked.addListener(async (tab) => {
	const normalWindows = await chrome.windows.getAll({ populate: false, windowTypes: ["normal"] });
    console.log(tab)
    if (normalWindows.length > 0) {
      // Use the first normal window
      chrome.tabs.create({
        url: tab.url,
        windowId: normalWindows[0].id
      });
    } else {
      // If no normal windows are open, create one
      chrome.windows.create({
        url: tab.url,
        incognito: false
      });
    }
});