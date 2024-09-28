console.log('This is a popup!');

document.getElementById('start-session').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'startTimer'});
});