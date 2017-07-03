import { WwdCalendarPrototypePage } from './app.po';

describe('wwd-calendar-prototype App', () => {
  let page: WwdCalendarPrototypePage;

  beforeEach(() => {
    page = new WwdCalendarPrototypePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
