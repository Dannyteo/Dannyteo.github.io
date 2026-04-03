/* Site-wide: shared footer from includes/footer.html (single source of truth). */
(function () {
	var mount = document.getElementById("site-footer-root");
	if (!mount) return;

	function inject(html) {
		mount.innerHTML = html.trim();
	}

	var script = document.currentScript;
	var base = script ? script.src.replace(/[^/]+$/, "") : "";
	var url = base + "includes/footer.html";

	fetch(url, { credentials: "same-origin" })
		.then(function (r) {
			if (!r.ok) throw new Error("footer fetch failed");
			return r.text();
		})
		.then(inject)
		.catch(function () {
			// Fallback when fetch is unavailable (e.g. file://) — keep in sync with includes/footer.html
			inject(
				'<div class="container-xl">' +
					'<div class="site-footer__inner">' +
					'<p class="site-footer__text">' +
					'<a href="mailto:teo_yongsong@yahoo.com.sg">dannyteo@27svs.com</a>' +
					"</p>" +
					'<p class="site-footer__extra">' +
					'<a href="https://teoyongsong.github.io/" target="_blank" rel="noopener noreferrer">Software development projects · teoyongsong.github.io</a>' +
					"</p>" +
					"</div>" +
					"</div>"
			);
		});
})();
