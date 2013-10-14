(function() {
	var last_attempt = localStorage["last_attempt"];
	if(last_attempt && last_attempt !== "" && Date.now() - last_attempt < 15000) return;
		
	var creds = chrome.runtime.sendMessage("getCreds", login);

	function login(creds) {
		localStorage["last_attempt"] = Date.now();
		var form = document.forms["fm1"];
		form.username.value = creds.username;
		form.password.value = creds.password;
		HTMLFormElement.prototype.submit.call(form);
	}
})();