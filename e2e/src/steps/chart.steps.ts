import { expect } from 'chai';
import { Before, Given, Then, When } from 'cucumber';
import { ChartPage } from '../pages/chart.po';

let page: ChartPage;

Before(() => {
  page = new ChartPage();
});

Given(/^I am on the chart page$/, async () => {
  await page.navigateTo();
});

When(/^I do see the graphics$/, async () => {});

Then(/^I should see the title of chart page$/, async () => {
  expect(await page.getTextTitle()).to.equal('Frontend');
});
