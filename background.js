chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "getCreds")
		sendResponse({
			username: localStorage["username"],
			password: localStorage["password"]
		});
	else
		sendResponse({}); // snub them.
});