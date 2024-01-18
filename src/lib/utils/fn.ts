export const callCallback = <F, D>(callback: F, data: D) => {
	if (callback && typeof callback === 'function') {
		callback(data);
	}
};
