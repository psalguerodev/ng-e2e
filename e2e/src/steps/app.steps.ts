import { expect } from 'chai';
import { Before, Given, Then, When } from 'cucumber';
import { AppPage } from '../pages/app.po';


let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given(/^I am on the home page$/, async () => {
  await page.navigateTo();
});

When(/^I do nothing$/, () => {});

Then(/^I should see the title$/, async () => {
  expect(await page.getTitleText()).to.equal('Technologies');
});

Given(/^I am on the charts page$/, async () => {
  await page.navigateTo();
});

Then(/^I should see the browser title$/, async () => {
  expect(await page.getHeadTitleText()).to.equal('Technologies');
});


