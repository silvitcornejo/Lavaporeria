context('Lavaporeria Page Components Tests', () => {
    beforeEach(()=>{
      cy.visit('/comprar-kits-para-vapear/13698/')
      cy.checkPageIsUp()
    })

    describe('Color options',()=>{
        it('Check Añadir al carrito status',()=>{
          cy.get('.single_add_to_cart_button').should('have.class','disabled')
        cy.dropdownFilter('[class="value"] [id="pa_color"]','azul')
        cy.get('.single_add_to_cart_button').should('not.have.class', 'disabled')
        })
    })
})