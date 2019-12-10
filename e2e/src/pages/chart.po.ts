import { browser, by, element } from 'protractor';

export class ChartPage {

  navigateTo(): Promise<any> {
    browser.sleep(2000)
    return browser.get(`${browser.baseUrl}/charts`) as Promise<any>;
  }

  async getTextTitle(): Promise<string> {
    browser.sleep(3000)
    return element(by.css('app-chart h3')).getText() as Promise<string>;
  }
}
