import { DemoworkplacePage } from './app.po';

describe('demoworkplace App', () => {
  let page: DemoworkplacePage;

  beforeEach(() => {
    page = new DemoworkplacePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
