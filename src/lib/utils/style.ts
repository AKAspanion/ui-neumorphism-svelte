function createParser(matcher: RegExp, replacer: (v: string) => string) {
	const regex = RegExp(matcher, 'g');
	return (str: string) => {
		if (typeof str !== 'string') {
			throw new TypeError(`expected an argument of type string, but got ${typeof str}`);
		}

		if (!str.match(regex)) {
			return str;
		}

		return str.replace(regex, replacer);
	};
}

const camelToKebab = createParser(/[A-Z]/, (match: string) => `-${match.toLowerCase()}`);

export const objToString = (
	styleObj: Record<string, number | string | null>,
	parser = camelToKebab
) => {
	if (!styleObj || typeof styleObj !== 'object' || Array.isArray(styleObj)) {
		throw new TypeError(`expected an argument of type object, but got ${typeof styleObj}`);
	}
	const lines = Object.keys(styleObj).map(
		(property) => `${parser(property)}: ${styleObj[property]};`
	);
	return lines.join('\n');
};

export const styleToString = objToString;
