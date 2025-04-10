const { and } = require("ajv/dist/compile/codegen");

const {I} = inject();

Given('Estoy en la pagina principal', () => {
    I.amOnPage('https://www.inmotionhosting.com/')
})

When('Voy a la pagina de log in', () => {
    I.waitForElement('//a[text()="Login"]', 5)
    I.click('//a[text()="Login"]')
})

When('Escribo el nombre de usuario y contraseña', () => {
    I.fillField('[placeholder="email address"]', 'brenda@mail.com')
    I.fillField('[placeholder="password"]', "testpassword")
    I.wait(5)
})

Then('Veo el boton de log in', () => {
    I.wait(3)
    I.seeElement('(//button[text()="Log In"])[1]')
})