import { EnterpriseTestUiPage } from './app.po';

describe('enterprise-test-ui App', () => {
  let page: EnterpriseTestUiPage;

  beforeEach(() => {
    page = new EnterpriseTestUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
