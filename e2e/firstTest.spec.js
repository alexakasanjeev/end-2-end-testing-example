/* global device, element, by */

describe('Login Screen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  test('Should Login Successfully', async () => {
    await element(by.id('email-field')).typeText('sanjeev@gmail.com');
    await element(by.id('password-field')).typeText('password');
    await element(by.id('login-btn')).tap();
    await expect(element(by.id('dashboard-text'))).toBeVisible();
  });
});
