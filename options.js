window.addEventListener("load", function() {
	var form = document.forms["settings"],
		done = document.getElementById("done");

	form.username.value = localStorage["username"];
	form.password.value = localStorage["password"];

	form.addEventListener("submit", function(e) {
		e.preventDefault();
		e.stopPropagation();
		localStorage["username"] = form.username.value;
		localStorage["password"] = form.password.value;

		done.innerHTML = "Yo, I changed your settings for ya bro";
		
		window.setTimeout(function() {
			done.innerHTML	= "";
		}, 1500);

		return false;
	});
});