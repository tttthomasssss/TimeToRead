safari.self.addEventListener("message", handleMessage, false);

function handleMessage(msg) {

	if (msg.name == "kickstartMyHeart") {

		var wordCount = document.body.innerText.replace(/<(?:.|\n)*?>/gm, "").match(/\S+/g).length;
		//var wordCount = document.body.innerText.match(/\S+/g).length;

		msg = new Object();

		msg.wordCount = wordCount;
		msg.estimatedTime = Math.max(Math.floor(wordCount / 250), 1);

    	safari.self.tab.dispatchMessage("estimatedTime", msg);
	}
}
