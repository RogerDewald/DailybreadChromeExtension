console.log("Content script loaded");

async function extractTableData() {
    const yo = await fetch("https://ccodailybread.vercel.app/api/upload")
    const howdy = await yo.text()
    return howdy
}

chrome.runtime.onMessage.addListener((message, _, sendResponse) => {
    if (message.action === "fetchData") {
        const data = extractTableData();
        sendResponse({ data });
    }
});
