import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl + '/charts') as Promise<any>;
  }

  getTitleText() {
    return element(by.id('title')).getText() as Promise<string>;
  }
}
