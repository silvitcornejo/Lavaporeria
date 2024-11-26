const selectors = {
    carrusel : '[class="elementor-widget-container"] [class="elementor-swiper"] [class="elementor-slides-wrapper elementor-main-swiper swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"]',
    chevronCarrusel : '.eicon-chevron-right'
}


Cypress.Commands.add('checkCarrousel', () => {
cy.get(selectors.carrusel).should('be.visible')
cy.get(selectors.chevronCarrusel).each(($chevron) => {
cy.wrap($chevron).click({force:true})
    })
})

Cypress.Commands.add('threeBannersPresenceAndCopy', (buttons, text) => {
cy.get('[class="elementor-section elementor-top-section elementor-element elementor-element-7363ebbd elementor-section-content-middle elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default"]')
.should('be.visible').each(($button) => {
    cy.wrap($button).find(buttons).contains(text)
})

Cypress.Commands.add('PaginationHomepage', (numberOfPagination) => {
    cy.get('[class="woocommerce-pagination"]').should('be.visible')
      cy.get('.woocommerce-pagination .page-numbers').should('be.visible').and('have.length', numberOfPagination)
        .then((paginationNumbers) => {
          const paginationArray = Array.from(paginationNumbers).filter(
            (el) => !el.classList.contains('dots'));
          const randomIndex = Math.floor(Math.random() * paginationArray.length);
          const randomPage = paginationArray[randomIndex];
          cy.wrap(randomPage).click();
          const randomPageNumber = randomPage.textContent;
          if (randomPageNumber !== '1') {
            cy.url().should('include', `product-page=${randomPageNumber}`)
          cy.get('.woocommerce-pagination .page-numbers.current')
            .should('have.text', randomPageNumber)
 } })
        
})
})




