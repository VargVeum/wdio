import LoginPage from '../pageobjects/login.page.js'
import 'dotenv/config'

// beforeEach(() => {
//     client.sessionStorage('DELETE');
// });
describe('My Login application', () => {    
    it('#negative scenario: login with invalid login', async () => {
        await LoginPage.visitUrl(process.env.BASE_QA_URL)
        await LoginPage.fillEmailInput('test')
        await LoginPage.fillPasswordInput(process.env.PASSWORD)

        const elem = await $('button[type="submit"]')
        await expect(elem).toBeDisabled()
    })
    it('#negative scenario: login with invalid password', async () => {
        await LoginPage.visitUrl(process.env.BASE_QA_URL)
        await LoginPage.fillEmailInput(process.env.EMAIL)
        await LoginPage.fillPasswordInput('test')
        await LoginPage.clickSubmitButton() 

        const error = await $('mat-error')
        await expect(error).toHaveText('Invalid password.')
    })
    it('#negative scenario: login with empty form', async () => {
        await LoginPage.visitUrl(process.env.BASE_QA_URL)
        await LoginPage.fillEmailInput('')
        await LoginPage.fillPasswordInput('')

        const elem = await $('button[type="submit"]')
        await expect(elem).toBeDisabled()
    })
    it('#positive scenario: should login with valid credentials', async () => {
        await LoginPage.visitUrl(process.env.BASE_QA_URL)
        await LoginPage.fillEmailInput(process.env.EMAIL)
        await LoginPage.fillPasswordInput(process.env.PASSWORD)
        await LoginPage.clickSubmitButton()        

        await expect(browser).toHaveTitleContaining('Zuum Carrier')
        await expect(browser).toHaveUrlContaining('load-management/shipments')
    })
})

