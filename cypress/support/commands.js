const selectors = {
    page_body: '[data-elementor-device-mode="desktop"]',
}

Cypress.Commands.add("checkPageIsUp", () => {
    cy.get(selectors.page_body).should('be.visible')
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

    Cypress.Commands.add('vapeCards', (component, linkList, lengthOfCards) => {
        cy.get(component).should('be.visible')
        cy.get(linkList).should('be.visible').and('have.length', lengthOfCards)
        })

   
      
    
   
