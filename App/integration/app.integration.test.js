const path = require('path')
const puppeteer = require('puppeteer')

jest.setTimeout(8000)

async function takeScreenshot (title) {
  await page.screenshot({ path: `../screenshots/${title}.png` })
}

describe('app', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3000')
  })

  it('should display a react logo', async () => {
    await expect(page).toMatch('React')

    await takeScreenshot('logo-test')
  })

  it('should match a button with a "Get Started" text inside', async () => {
    await expect(page).toMatchElement('.App-button', { text: 'Get Started' })

    await takeScreenshot('button-input-test')
  })

  it('should match a input with a "textInput" name then fill it with text', async () => {
    await expect(page).toFill('input[name="textInput"]', 'James')

    await takeScreenshot('text-input-test')
  })

  it('should match a form with a "myForm" name then fill its controls', async () => {
    await expect(page).toFillForm('form[name="testForm"]', {
      testOne: 'James',
      testTwo: 'Bond',
    })
    
    await takeScreenshot('form-test')
  })

  it('should match a select with a "testSelect" name then select the specified option', async () => {
    await expect(page).toSelect('select[name="testSelect"]', 'Second Value')

    await takeScreenshot('select-input-test')
  })

  it('should match a File Input with a "App-inputFile" class then fill it with a local file', async () => {
    await expect(page).toUploadFile(
      '.App-inputFile',
      path.join(__dirname, 'jest.config.js'),
    )
    
    await takeScreenshot('file-input-test')
  })

  it('should increment the counter value when the increment button is clicked', async () => {
    const demoButton = await page.$('#demobutton')
    const initialCount = await page.$eval('#counter', e => parseInt(e.innerHTML))
    const expectedCount = initialCount + 1

    await demoButton.click()

    const newCount = await page.$eval('#counter', e => parseInt(e.innerHTML))

    await expect(newCount).toBe(expectedCount)
  })
})
