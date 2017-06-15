import { SportJSFrontendPage } from './app.po';

describe('sport-js-frontend App', () => {
  let page: SportJSFrontendPage;

  beforeEach(() => {
    page = new SportJSFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to sp!!');
  });
});
