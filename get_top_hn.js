const http = require("https");

module.exports = (count = 10) => {

	count--

	let options = {
		"method": "GET",
		"hostname": "hacker-news.firebaseio.com",
		"port": null,
		"path": "/v0/newstories.json?print=pretty",
		"headers": {}
	};

	return new Promise((resolve, rejects) => {

		let req = http.request(options, function (res) {
			let chunks = [];

			res.on("data", function (data) {
				chunks.push(data);
			});

			res.on("end", function () {

				let top_hn_ids = Buffer.concat(chunks);
				let top_hns = [];

				for (let i = 0; i <= count; i++) {

					let options = {
						"method": "GET",
						"hostname": "hacker-news.firebaseio.com",
						"port": null,
						"path": `/v0/item/${top_hn_ids[i]}.json?print=pretty`,
						"headers": {}
					};

					let req = http.request(options, function (res) {

						let chunks = [];

						res.on("data", function (data) {
							chunks.push(data);
						});

						res.on("end", function () {
							top_hns.push(JSON.parse(Buffer.concat(chunks).toString()));
							if (i === count) resolve(top_hns);
						});

						res.on("error", function (e) {
							console.log(e)
						});

					});

					req.write("{}");
					req.end();
				};
			});

			res.on("error", function (e) {
				console.log(e);
				rejects(e);
			});

		});

		req.write("{}");
		req.end();

	});

};