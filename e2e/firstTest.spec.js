/**
 * ============================================================================
 *                                   (/^▽^)/
 *                             Write your Test here!
 * ============================================================================
 */

test('Test Login Flow', async () => {
	await device.reloadReactNative();
	await expect(element(by.id('email'))).toBeVisible();

	await element(by.id('email')).typeText('sanjeev@gmail.com');
	await element(by.id('password')).typeText('password');
	await element(by.text('LOGIN')).tap();

	await expect(element(by.id('welcome'))).toBeVisible();
	await expect(element(by.id('email'))).toNotExist();
});