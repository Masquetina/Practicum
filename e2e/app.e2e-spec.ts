import { PraktikumPage } from './app.po';

describe('praktikum App', function() {
  let page: PraktikumPage;

  beforeEach(() => {
    page = new PraktikumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
