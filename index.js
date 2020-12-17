import fs from "fs/promises";
import marked from "marked";
import mustache from "mustache";

const readJSONFile = async (file) => {
	const content = await fs.readFile(file, "utf8");
	return JSON.parse(content);
};

const extendPractice = async (language, id) => {
	const content = await fs.readFile(`./src/${id}/${language}.md`, "utf8");
	const [title, ...body] = content.split("\n");
	const practice = {
		body: body.join("\n").trim(),
		id,
		title: title.trim().replace(/^# /u, ""),
	};
	return {
		...practice,
		bodyHTML: marked(practice.body),
		titleHTML: marked(practice.title)
			.trim()
			.replace(/^<p>(.*?)<\/p>$/u, "$1"),
	};
};

const extendSection = async (language, extradata, section, index) => {
	const practices = await Promise.all(
		section.practices.map(extendPractice.bind(null, language))
	);
	return {
		...section,
		...extradata.sections[index],
		practices,
	};
};

const build = async (src, data, dest) => {
	const template = await fs.readFile(src, "utf8");
	const rendered = mustache.render(template, data);
	await fs.writeFile(dest, rendered);
};

const generate = async (data, language) => {
	const extradata = await readJSONFile(`./src/${language.code}.json`);
	const sections = await Promise.all(
		data.sections.map(extendSection.bind(null, language.code, extradata))
	);
	const extended = {
		...data,
		...extradata,
		language,
		sections,
	};
	await Promise.all([
		build("./src/md.mustache", extended, `./README${language.ext}.md`),
		build("./src/html.mustache", extended, `./docs/index${language.ext}.html`),
	]);
};

const main = async () => {
	const data = await readJSONFile("./src/data.json");
	await Promise.all(data.languages.map(generate.bind(null, data)));
};

main().catch((e) => {
	console.trace(e);
	process.exitCode = 1;
});
