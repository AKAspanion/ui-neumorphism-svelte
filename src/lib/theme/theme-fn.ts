import { getContext } from 'svelte';
import { themeContextKey, type themeStore } from './ThemeProvider.svelte';

export const getTheme = () => {
	return getContext<typeof themeStore>(themeContextKey);
};

export const toggleDarkTheme = () => {
	return getTheme().update(({ dark }) => ({ dark: !dark }));
};
