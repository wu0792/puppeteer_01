const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: true
    })

    const page = await browser.newPage()

    await page.goto('http://www.baidu.com')
    await page.screenshot({
        path: 'c:/temp/baidu.png'
    })
})()