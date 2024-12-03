context('Lavaporeria Page Components Tests', () => {
    beforeEach(()=>{
      cy.visit('/comprar-kits-para-vapear/13698/')
      cy.checkPageIsUp()
    })

    describe('Color options',()=>{
        it('Check Añadir al carrito status',()=>{
        cy.dropdownFilter('[class="value"] [id="pa_color"]','azul')
        })
    })
})