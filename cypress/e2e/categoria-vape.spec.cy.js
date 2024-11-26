context('Lavaporeria Page Components Tests', () => {
    beforeEach(()=>{
      cy.visit('/comprar-liquidos-para-vapear/')
      cy.checkCategoriasIsUp()
    })

describe('Search Bar',() => {
it('Search for a random product and check results',() => {
cy.checkSearchBarFunctionality('Charlie',2)
})
})

describe('Pagination',() => {
    it('Check pagination component',() => {
    cy.PaginationCategories(10)
  })
  })
})
   