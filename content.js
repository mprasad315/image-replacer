//Get the current URL
//function getCurrentTabUrl(callback) {
//	var queryInfo = { active: true, currentWindow: true };
//}

//chrome.tabs.query(queryInfo, (tabs) => {
//	var tab = tabs[0];
//	var url = tab.url;
//	console.assert(typeof url == 'string', 'tab.url should be a string');

//	callback(url);
//});

//Change all the pictures
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
	if(msg.command && (msg.command == "change_pictures")) {
		var x = document.images;
		for (i = 0; i < x.length; i++) {
			document.images[i].src = "https://imgur.com/a/S5cZr";
			document.images[i].srcset = "https://i.imgur.com/qWfdfga.jpg";
		}
	}
})
