const selectors = {
    content: '#content', 
    page_content: '[class="page-content"]',
}

Cypress.Commands.add("checkHomepageIsUp", () => {
    cy.get(selectors.content).should('be.visible')
    cy.get(selectors.page_content).should('be.visible')
})

Cypress.Commands.add('checkCategoriasIsUp',() => {
  cy.get('[data-elementor-type="product-archive"]').should('be.visible')
})


Cypress.Commands.add("checkStructureOfLinks", (component, hrefLinks) => {
    cy.get(component).should('be.visible')
    cy.get(hrefLinks).each(($links) => {
    cy.wrap($links).should('have.attr', 'href')
    const href = $links.prop('href')
    if (href) {
    expect(href).to.match(/^https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}(\/\S*)?$/)}})
   })


   Cypress.Commands.add('checkStatusCodeOfLinks', (selector) => {
    cy.get(selector).then(($links) => {
        const randomIndex = Cypress._.random(0, $links.length - 1);
        const randomLink = $links[randomIndex];
        const href = randomLink.href;
        cy.log('HERE WE PICK A RANDOM LINK AND WE CHECK THE STATUS CODE')
        cy.request(href).its('status').should('eq', 200);
    })
})

    Cypress.Commands.add('vapeCards', (ofertasFlashComponent, ofertasFlashList, lengthOfCards) => {
        cy.get(ofertasFlashComponent).should('be.visible')
        cy.get(ofertasFlashList).should('be.visible').and('have.length', lengthOfCards)
        })

   
      
    
   
