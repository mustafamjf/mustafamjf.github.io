import { chromium, devices } from 'playwright-core'

const browser = await chromium.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: true,
})

const sites = [
  ['autoparts965', 'https://autoparts965.com/'],
  ['lareva', 'https://www.larevaonline.com/'],
]

for (const [name, url] of sites) {
  for (const device of [
    { name: 'desktop', context: { viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 } },
    { name: 'mobile', context: { ...devices['iPhone 13'] } },
  ]) {
    const page = await browser.newPage(device.context)

    await page.goto(url, { waitUntil: 'networkidle', timeout: 60_000 })
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight) {
        window.scrollTo(0, y)
        await new Promise(resolve => setTimeout(resolve, 180))
      }
      window.scrollTo(0, 0)
    })
    await page.waitForTimeout(1200)
    await page.screenshot({
      path: `public/projects/${name}-${device.name}.png`,
      fullPage: true,
      animations: 'disabled',
    })
    await page.close()
    console.log(`Captured ${name} — ${device.name}`)
  }
}

await browser.close()
