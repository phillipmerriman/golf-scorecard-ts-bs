import { test, expect } from '@playwright/test';

test('it has a dropdown for number of players', async ({ page }) => {
    await page.goto('/new-game');
    const playerCount = page.getByLabel('How Many Players?');
    await playerCount.click();
    await page.selectOption('#chooseNumberOfPlayers', '2');
    const selectedCount = await page.$eval(
        '#chooseNumberOfPlayers',
        (element) => element.value,
    );
    expect(selectedCount).toContain('2');
});

test('Clicking the Continue button displays the name input form', async ({
    page,
}) => {
    await page.goto('/new-game');
    const playerCount = page.getByLabel('How Many Players?');
    await playerCount.click();
    await page.selectOption('#chooseNumberOfPlayers', '3');
    const continueButton = page.getByRole('button', { name: 'Continue' });
    await continueButton.click();
    const namesForm = page.getByTestId('name-input-form');
    const numberOfChildren = await namesForm.evaluate((element) => {
        return element.querySelectorAll('div').length;
    });
    expect(numberOfChildren).toBe(3);
});
