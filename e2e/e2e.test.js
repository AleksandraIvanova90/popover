import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout

describe('tooltip', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false, // чтобы показывать реальный браузер
      slowMo: 100,
      // devtools: true, // чтобы видеть инструменты разработчика
    });
    page = await browser.newPage(); // браузер открывает страницу
  });
  // закрывает браузер
  afterAll(async () => {
    await browser.close();
  });

  test('tooltip show on page', async () => {
    await page.goto('http://localhost:9000');
    await page.waitForSelector('.container');
    const button = await page.$('.btn');
    await button.mouseenter();
    await page.waitForSelector('.tooltip');
    await button.mouseleave();
    await page.waitForSelector('.tooltip') == null;
  });
});
