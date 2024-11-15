context('Lavaporeria Page Components Tests', () => {
  beforeEach(()=>{
    cy.visit('')
    cy.checkSiteIsUp()
  })

  const categoriasLinks = '[data-id="4c77c3f0"] li a'


describe('Check Cateorias List Links', () => {
  it('Check Status of Categorias Links & hrefs', () => {
    cy.checkStructureOfLinks()
    cy.checkStatusCodeOfLinks(categoriasLinks)
  })
})
})
