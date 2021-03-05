const path = require('path')
const fs = require('fs')
const target = require(
  `${path.join(process.cwd(), 'assets/index.js')}`
)
const puppeteer = require('puppeteer')

async function getCardData(page, url, tableSelecotr) {
  let data = []
  const trSelector = `${tableSelecotr} > tbody > tr`

  await page.goto(url)
  const trs = await page.$$(trSelector)

  for (const tr of trs) {
    let datum = []
    datum = await tr.$$eval('td', tds => {
      return tds.map((td) => td.textContent)
    })

    if (datum[2] === '(旧)雑賀孫市') {
      continue
    }

    const units = datum[16].split('/').map(unit => unit.replace(/\.+/, ''))

    data.push({
      id: parseInt(datum[0],10),
      rarity: datum[1],
      jobType: datum[17],
      illustrator: datum[1] === '天' ? '直良有祐' : '',
      description: '',
      name: datum[2].replace(/\(.+\)/,''),  // 織田信長(新)の(新)を除く
      cost: parseInt(datum[3], 10),
      capacity: parseInt(datum[4], 10),
      yari: datum[5].replace('.',''),
      yumi: datum[6].replace('.',''),
      kiba: datum[7].replace('.',''),
      heiki: datum[8].replace('.',''),
      attack: parseInt(datum[9], 10),
      defence: parseInt(datum[10], 10),
      intelligence: parseInt(datum[11], 10),
      attackGrowth: parseInt(datum[12], 10),
      defenceGrowth: parseInt(datum[13], 10),
      intGrowth: parseInt(datum[14], 10),
      skill: {
        name: datum[15].split('：')[1],
        type: datum[15].split('：')[0],
      },
      unitSkill: {
        name: units
      }
    })
  }
  return data
}

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  for (const url in target.url.project) {
    data = await getCardData(page, target.url.project[url], target.tableSelector[url])
    try {
      fs.writeFileSync(
      path.join(process.cwd(), `assets/generated/${url}.json`),
        JSON.stringify(data, undefined, 2),
        'utf-8'
      )
      console.log(`CardData for ${url} was successfully generated.`)
    } catch (error) {
      console.log('Error occurred...')
      console.log(error.message)
    }
  }
  await browser.close()
})()
