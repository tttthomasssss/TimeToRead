//safari.application.activeBrowserWindow.activeTab.page.dispatchMessage("execute", "engage");
window.addEventListener("load", onDocLoad);

function onDocLoad()
{
	var wordCount = document.body.innerText.replace(/<(?:.|\n)*?>/gm, "").match(/\S+/g).length;

	msg = new Object();

	msg.wordCount = wordCount;
	msg.estimatedTime = Math.max(Math.floor(wordCount / 250), 1);

    safari.self.tab.dispatchMessage("estimatedTime", msg);
}
