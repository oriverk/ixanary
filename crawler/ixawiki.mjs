const urls = [
  {
    name: 'toppage',
    url: 'http://www.ixawiki.com/index.php'
  },
  {
    name: 'ten',
    url: 'http://www.ixawiki.com/index.php?Busho%2F%C9%F0%BE%AD%A5%AB%A1%BC%A5%C9%B0%EC%CD%F7%28%C5%B7%29'
  },
  {
    name: 'kiwame',
    url: 'http://www.ixawiki.com/index.php?Busho%2F%C9%F0%BE%AD%A5%AB%A1%BC%A5%C9%B0%EC%CD%F7%28%B6%CB%29'
  },
  {
    name: 'toku',
    url: 'http://www.ixawiki.com/index.php?Busho%2F%C9%F0%BE%AD%A5%AB%A1%BC%A5%C9%B0%EC%CD%F7%28%C6%C3%29'
  },
  {
    name: 'jou',
    url: 'http://www.ixawiki.com/index.php?Busho%2F%C9%F0%BE%AD%A5%AB%A1%BC%A5%C9%B0%EC%CD%F7%28%BE%E5%29'
  },
  {
    name: 'jo',
    url: 'http://www.ixawiki.com/index.php?Busho%2F%C9%F0%BE%AD%A5%AB%A1%BC%A5%C9%B0%EC%CD%F7%28%BD%F8%29'
  },
  {
    name: 'othrers',
    url: 'http://www.ixawiki.com/index.php?Busho%2F%C9%F0%BE%AD%A5%AB%A1%BC%A5%C9%B0%EC%CD%F7%28%C2%BE%29'
  },
]

// const puppeteer = require('puppeteer');
  import puppeteer from 'puppeteer';


(async () => {
  const browser = await puppeteer.launch();
  // const options = {
  //   headless: false, // ヘッドレスをオフに
  //   slowMo: 100  // 動作を遅く
  // };
  // const browser = await puppeteer.launch(options);
  const page = await browser.newPage();

  for (let i of urls) {
    console.log(`${i.name} starts`)
    await page.goto(i.url)
    const title = await page.title()
    console.log('title is ', title)
    // await page.screenshot({ path: `assets/${i.name}.png` })
    console.log(`${i.name} finished`)
  }

  await browser.close(); 
})();
