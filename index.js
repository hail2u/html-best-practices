const fs = require("fs");
const mustache = require("mustache");

const languages = ["en", "ja", "ko", "tr"];

const template = fs.readFileSync("./src/template.mustache", "utf8");
const data = JSON.parse(fs.readFileSync("./src/data.json", "utf8"));

languages.forEach((language) => {
	const extradata = JSON.parse(fs.readFileSync(`./src/${language}.json`, "utf8"));
	const rendered = mustache.render(template, {
		...data,
		...extradata,
		sections: data.sections.map((section, i) => {
			return {
				...section,
				...extradata.sections[i],
				practices: section.practices.map((practice) => {
					const [title, ...body] = fs.readFileSync(`./src/${practice}/${language}.md`, "utf8").split("\n");
					return {
						body: body.join("\n").trim(),
						id: practice,
						title: title.trim().replace(/^# /, "")
					}
				})
			}
		})
	});
	fs.writeFileSync(`README${language === "en" ? "" : `.${language}`}.md`, rendered);
});
