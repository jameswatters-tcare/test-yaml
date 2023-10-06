import { expect, test } from '@playwright/test';


test('index page has expected h1', async ({ page }, testInfo) => {
	console.log("Project name from test");
	console.log(testInfo.project.name.toUpperCase());
	await page.goto('/');
	// await expect(page.getByRole('heading', { name: 'Welcome to SvelteKit' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Hello world!' })).toBeVisible();
});
