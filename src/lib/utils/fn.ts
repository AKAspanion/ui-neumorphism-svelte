export const callCallback = <F, D>(callback: F, data: D) => {
	if (callback && typeof callback === 'function') {
		callback(data);
	}
};

export const normalize = (
	value?: string | number | object | null | unknown,
	fallback = ''
): string =>
	value === '' || value === undefined || value === null || typeof value === 'object'
		? fallback
		: String(value);
