import { AdminSystemPage } from './app.po';

describe('admin-system App', function() {
  let page: AdminSystemPage;

  beforeEach(() => {
    page = new AdminSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
