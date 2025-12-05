(function () {
	"use strict";

	startHighlighting();
})();

function highlight() {
	document.querySelectorAll("div.p-rich_text_block pre > div").forEach((block) => {
		if(block.querySelector("span.highlight-thing-iamalreadyhighlighted")) {
			return;
		}else {
			hljs.highlightElement(block);
			const span = document.createElement("span");
			span.className = "highlight-thing-iamalreadyhighlighted";
			span.style.display = "none";
			block.append(span);
		}
	});
}

function startHighlighting() {
	highlight();

	const observer = new MutationObserver(() => {
		highlight();
	});

	observer.observe(document.body, {
		childList: true,
		subtree: true
	});
}

