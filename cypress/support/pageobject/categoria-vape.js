const selectors = {
    searchBar: '[id="woocommerce-product-search-field-0"]',
    buscarButton : '[class="woocommerce-product-search"] button',
    productsList : '[class="products elementor-grid columns-4"] li',
    dropdownFilter : '[class="woocommerce-ordering"] select'
}


Cypress.Commands.add('checkSearchBarFunctionality', (inputSearch, resultsNumber) =>{
cy.get(selectors.searchBar).type(inputSearch)
cy.get(selectors.buscarButton).click()
cy.get(selectors.productsList).should('have.length', resultsNumber)
})


Cypress.Commands.add('paginationCategories', (numberOfPagination) => {
    cy.get('[class="woocommerce-pagination"]').should('be.visible')
      cy.get('.woocommerce-pagination .page-numbers').should('be.visible').and('have.length', numberOfPagination)
        .then((paginationNumbers) => {
          const paginationArray = Array.from(paginationNumbers).filter(
            (el) => !el.classList.contains('dots'))
          const randomIndex = Math.floor(Math.random() * paginationArray.length);
          const randomPage = paginationArray[randomIndex]
          cy.wrap(randomPage).click();
          const randomPageNumber = randomPage.textContent
          if (randomPageNumber !== '1') {
            cy.url().should('include', `/page/${randomPageNumber}`)
          cy.get('.woocommerce-pagination .page-numbers.current')
            .should('have.text', randomPageNumber)
 } })
        
})

Cypress.Commands.add('dropdownFilter',() => {
  cy.get(selectors.dropdownFilter).should('be.visible')
  cy.get('select').select('popularity')
})