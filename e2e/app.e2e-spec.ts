import { AclBuilderPage } from './app.po';

describe('acl-builder App', () => {
  let page: AclBuilderPage;

  beforeEach(() => {
    page = new AclBuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
