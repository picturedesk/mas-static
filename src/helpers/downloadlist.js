module.exports = function() {
	const json = JSON.parse(this.downloadlist);
	let html = "<ul>";
	json.items.forEach( (e) => {
		html += `<li class="icon-${e.type}"><a href="${e.link}">${e.text}</a></li>`;
	});
	html += "</ul>";
	return html;
};
