import { expect } from 'chai';
import { Before, Given, Then, When } from 'cucumber';
import { ChartPage } from '../pages/chart.po';

let page: ChartPage;

Before(() => {
  page = new ChartPage();
});

Given(/^I am on the chart page$/, { timeout: 10000 }, async () => {
  await page.navigateTo();
});

When(/^I do see the graphics$/, async () => {});

Then(/^I should see the title of chart page$/, { timeout: 10000 } , async () => {
  expect(await page.getTextTitle()).to.equal('Frontend');
});
