import { categoriaVapeSelectors } from '../support/pageobject/categoria-vape'

context('Lavaporeria Page Components Tests', () => {
    beforeEach(()=>{
      cy.visit('/comprar-liquidos-para-vapear/')
      cy.checkPageIsUp()
    })

describe('Product Cards',()=>{
  it('Check amount of cards at first instance',() => {
   cy.vapeCards(categoriaVapeSelectors.productComponent,categoriaVapeSelectors.productsList,16)
  cy.checkStructureOfLinks(categoriaVapeSelectors.productComponent,categoriaVapeSelectors.productLinks)
  })
})  

describe('Search Bar',() => {
  //Extra note --> Error Handling:Add assertions to check for empty or error states, especially for search and pagination.//
it('Search for a random product and check results',() => {
cy.checkSearchBarFunctionality('Charlie',2)

  it('Search for a non-existent product', () => {
    cy.checkSearchBarFunctionality('zzzzzzzz', 0)
})
})
})

describe('Dropdown Filtering',() => {
it('Select a random option and check outcome',() =>{
  cy.dropdownFilter('[class="woocommerce-ordering"] select','popularity')
  })
  })

describe('Pagination', () => {
  it('Check pagination component', () => {
    cy.paginationCategories(10)
    // Assert that pagination exists
    cy.get('.pagination').should('exist')
    })
  })
      })
