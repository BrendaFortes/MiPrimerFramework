const { and } = require("ajv/dist/compile/codegen");

const {I} = inject();

Given('Estoy en la pagina principal', () => {
    I.amOnPage('https://es.wikipedia.org/wiki/Wikipedia:Portada')
})

When('Selecciono barra de busqueda', () => {
    I.waitForElement('//input[@aria-label="Buscar en Wikipedia"]', 5)
    I.click('//input[@aria-label="Buscar en Wikipedia"]')
})

When('Escribo el nombre del articulo', () => {
    I.fillField('//input[@aria-label="Buscar en Wikipedia"]', "automatizacion de pruebas")
    I.wait(5)
})

When('Selecciono el articulo presentado', () => {
    I.click('//span[@class="cdx-search-result-title"]')
    I.wait(3)
})

Then('Veo el ultimo tema del articulo', () => {
    I.scrollTo('[id="Pruebas_de_Interfaz_de_Usuario"]')
    I.wait(3)
    I.seeElement('[id="Pruebas_de_Interfaz_de_Usuario"]')
})