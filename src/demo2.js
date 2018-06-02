const devices = require('puppeteer/DeviceDescriptors')
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: true
    })

    const page = await browser.newPage()
    await page.emulate(devices['iPhone X'])

    await page.goto('http://www.baidu.com')
    await page.screenshot({
        path: 'c:/temp/baidu_iphone_X.png'
    })
})()