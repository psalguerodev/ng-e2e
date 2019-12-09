import { browser, by, element } from 'protractor';

export class ChartPage {

  navigateTo(): Promise<any> {
    return browser.get(`${browser.baseUrl}/charts`) as Promise<any>;
  }

  async getTextTitle(): Promise<string> {
    await browser.sleep(3000);
    return element(by.css('app-chart h3')).getText() as Promise<string>;
  }
}
