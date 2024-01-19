// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cs(classObj: { [k: string]: any }): string {
	return Object.entries(classObj)
		.filter(([name, value]) => name !== '' && value)
		.map(([name]) => name)
		.join(' ');
}

export const getClasses = (classNames: string) => {
	return classNames
		.replace(/^\s+|\s+$/g, '')
		.split(/\s+/)
		.map((cl) => cl.trim())
		.join(' ')
		.trim();
};

export const classes = getClasses;
