import { CarouselCliPage } from './app.po';

describe('carousel-cli App', function() {
  let page: CarouselCliPage;

  beforeEach(() => {
    page = new CarouselCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
