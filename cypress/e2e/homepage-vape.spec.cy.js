const categoriasLinks = '[data-id="4c77c3f0"] li a'
const categoriasBlock = '[data-id="7d56741f"] .elementor-container'
const carruselBlock = '[class="elementor-widget-container"] [class="elementor-swiper"] [class="elementor-slides-wrapper elementor-main-swiper swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"]'
const carruelLinks = '[class="elementor-widget-container"] [class="elementor-swiper"] [class="elementor-slides-wrapper elementor-main-swiper swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"] a'
const ofertasFlashComponent = '[data-id="382ba534"]'
const ofertasFlashList = '[data-id="48414a8"] .elementor-widget-container .woocommerce.columns-4 ul li'

context('Lavaporeria Page Components Tests', () => {
  beforeEach(()=>{
    cy.visit('')
    cy.checkHomepageIsUp()
  })

describe('Cateorias List ', () => {
  it('Check Status of Categorias Links & hrefs', () => {
    cy.checkStructureOfLinks(categoriasBlock, categoriasLinks)
    cy.checkStatusCodeOfLinks(categoriasLinks)
  })
})

describe('Carrousel', () => {
  it('Check Functionality of Carousel & Links', () => {
 cy.checkCarrousel()
 cy.checkStructureOfLinks(carruselBlock,carruelLinks)
  })
})

describe('Three Banner',() => {
  it('Check Banners prescence and copy', () => {
  cy.threeBannersPresenceAndCopy('a.elementor-flip-box__button' , 'PRINCIPIANTE')
  cy.threeBannersPresenceAndCopy('a.elementor-flip-box__button' , 'EXPERTO')
  cy.threeBannersPresenceAndCopy('a.elementor-flip-box__button' , 'CBD-ERIA')
})
})

describe('Ofertas Flash', () => {
it('Check presence and buttons functionality',() => {
cy.vapeCards(ofertasFlashComponent, ofertasFlashList, 2)
cy.checkStructureOfLinks('[data-id="382ba534"]','[data-id="48414a8"] .elementor-widget-container .woocommerce.columns-4 ul li a')
cy.checkStatusCodeOfLinks('[data-id="48414a8"] .elementor-widget-container .woocommerce.columns-4 ul li a')
})
})

describe('Pagination',() => {
  it('Check pagination component',() => {
  cy.PaginationHomepage(10)
  cy.checkStatusCodeOfLinks('.woocommerce-pagination .page-numbers li a')
})
})
})