import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo(): Promise<any> {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText(): Promise<string> {
    return element(by.id('title')).getText() as Promise<string>;
  }

  getHeadTitleText(): Promise<string> {
    return browser.getTitle() as Promise<string>;
  }
}
