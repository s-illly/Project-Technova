chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'startTimer') {
        setTimeout(() => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.scripting.executeScript({
                    target: { tabID: tab[0].id },
                    func: openPopup,
                });
            });
        }, 5000);
    }
});

function openPopup() {
    alert('This is the automatic popup!');
}