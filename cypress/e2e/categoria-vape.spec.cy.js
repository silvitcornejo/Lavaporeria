const productsList = '[class="products elementor-grid columns-4"] li'
const productComponent = '[class="products elementor-grid columns-4"]'
const productLinks = '[class="products elementor-grid columns-4"] a'


context('Lavaporeria Page Components Tests', () => {
    beforeEach(()=>{
      cy.visit('/comprar-liquidos-para-vapear/')
      cy.checkPageIsUp()
    })

describe('Product Cards',()=>{
  it('Check amount of cards at first instance',() => {
   cy.vapeCards(productComponent,productsList,16)
  cy.checkStructureOfLinks(productComponent,productLinks)
  })
})  

describe('Search Bar',() => {
it('Search for a random product and check results',() => {
cy.checkSearchBarFunctionality('Charlie',2)
})
})

describe('Dropdown Filtering',() => {
it('Select a random option and check outcome',() =>{
  cy.dropdownFilter('[class="woocommerce-ordering"] select','popularity')
  })
  })

describe('Pagination',() => {
    it('Check pagination component',() => {
    cy.paginationCategories(10)
  })
})
})