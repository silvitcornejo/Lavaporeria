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
})




