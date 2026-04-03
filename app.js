/* Site-wide: shared footer. Sync HTML always renders; fetch may refresh from includes/footer.html. */
(function () {
	var mount = document.getElementById("site-footer-root");
	if (!mount) return;

	/* Keep in sync with includes/footer.html */
	var FOOTER_HTML =
		'<div class="container-xl">' +
		'<div class="site-footer__inner">' +
		'<p class="site-footer__text">' +
		"© 2019 dannyteo.github.io All rights reserved." +
		"</p>" +
		'<p class="site-footer__extra">' +
		'Software Project: <a href="https://teoyongsong.github.io/" target="_blank" rel="noopener noreferrer">teoyongsong.github.io</a>' +
		"</p>" +
		"</div>" +
		"</div>";

	function inject(html) {
		mount.innerHTML = html.trim();
	}

	/* Always show footer immediately (fetch can fail, hang, or use a wrong relative URL). */
	inject(FOOTER_HTML);

	function scriptBase() {
		var s = document.currentScript;
		if (!s || !s.src || s.src.indexOf("app.js") === -1) {
			var list = document.querySelectorAll('script[src*="app.js"]');
			s = list.length ? list[list.length - 1] : null;
		}
		if (!s || !s.src) return "";
		return s.src.replace(/[^/]+$/, "");
	}

	var base = scriptBase();
	var url = base + "includes/footer.html";

	fetch(url, { credentials: "same-origin" })
		.then(function (r) {
			if (!r.ok) return "";
			return r.text();
		})
		.then(function (html) {
			if (html && html.trim()) inject(html);
		})
		.catch(function () {});
})();
