import { SnapToTranslatePage } from './app.po';

describe('snap-to-translate App', function() {
  let page: SnapToTranslatePage;

  beforeEach(() => {
    page = new SnapToTranslatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
