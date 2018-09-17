chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.sendMessage(tab.id, {
		command: "change_pictures"
	},
	function(msg) {
		console.log("result message:", msg);
	});
});
