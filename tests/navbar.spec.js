import { test, expect } from '@playwright/test';

test('it has a Home link', async ({ page }) => {
    await page.goto('/');
    const homeLink = page.getByRole('link', { name: 'Home' });
    await homeLink.click();
    expect(page).toHaveURL('/');
});
