const selectors = {
    content: '#content', 
    page_content: '[class="page-content"]',
    categoriasBlock : '[data-id="7d56741f"] .elementor-container',
    categoriasLinks : '[data-id="4c77c3f0"] li a'
}

Cypress.Commands.add("checkSiteIsUp", () => {
    cy.get(selectors.content).should('be.visible')
    cy.get(selectors.page_content).should('be.visible')
})


Cypress.Commands.add("checkStructureOfLinks", () => {
    cy.get(selectors.categoriasBlock).should('be.visible')
    cy.get(selectors.categoriasLinks).each(($links) => {
    cy.wrap($links).should('have.attr', 'href')
    const href = $links.prop('href')
    if (href) {
    expect(href).to.match(/^https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}(\/\S*)?$/)}})
   })


   Cypress.Commands.add('checkStatusCodeOfLinks', (randomlink) => {
    cy.get(randomlink).then(($links) => {
        const randomIndex = Cypress._.random(0, $links.length - 1);
        const randomLink = $links[randomIndex];
        const href = randomLink.href;
        cy.log('HERE WE PICK A RANDOM LINK AND WE CHECK THE STATUS CODE')
        cy.request(href).its('status').should('eq', 200);
    })
})
    
   
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })