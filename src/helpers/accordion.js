module.exports = function() {
	const json = JSON.parse(this.accordion);
	let html = "";
	json.items.forEach( (e,index) => {
		html += `
		<div class="card-header" id="heading${index}">
			<h2 class="mb-0">
				<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
					${e.title}
				</button>
			</h2>
		</div>

		<div id="collapse${index}" class="collapse" aria-labelledby="heading${index}">
			<div class="card-body">
				${e.text}
			</div>
		</div>
		`;
	});
	return html;
};
