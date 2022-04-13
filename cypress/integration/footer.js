/// <reference types="cypress"/>






export class footer{

footertop()
{
    cy.get('.footer-top').should('have.css','background-color','rgb(241, 241, 241)').and('have.css','color','rgb(168, 168, 168)')
    cy.get('.homepage-bar').should('be.visible').and('have.css','padding-bottom','20px').and('have.css','margin','0px')
    cy.get('.row').eq(17).should('have.css','display','flex').and('have.descendants','a')

    cy.get('[href="https://pk.khaadi.com/shipping-handling/"]').should('have.css','text-align','left').invoke('removeAttr', 'target').click({force:true})
    cy.url().should('equal','https://pk.khaadi.com/shipping-handling')
    cy.go('back')
    cy.get('.porto-icon-shipping').should('be.visible').and('have.css','font-size','27px')
    cy.get('.text-area').eq(0).should('be.visible').should('contain.text','SHIPPING CHARGES')


    cy.get('[href="https://pk.khaadi.com/customer-care/"]').should('have.css','text-align','center').invoke('removeAttr', 'target').click({force:true})
    cy.url().should('equal','https://pk.khaadi.com/customer-care')
    cy.go('back')
    cy.get('.porto-icon-support').should('be.visible').and('have.css','font-size','37px')
    cy.get('.text-area').eq(1).should('be.visible').should('contain.text','SUPPORT 24/7')

    cy.get('.row > [href="https://pk.khaadi.com/track-your-order/"]').should('have.css','text-align','center').invoke('removeAttr', 'target').click({force:true})
    cy.url().should('equal','https://pk.khaadi.com/track-your-order/')
    cy.go('back')
    cy.get('.porto-icon-location').should('be.visible').and('have.css','font-size','37px')
    cy.get('.text-area').eq(2).should('be.visible').should('contain.text',' TRACK YOUR ORDER')
}

footertopinner()
{
    cy.get('.footer-top-inner').should('be.visible').and('have.css','padding-right','55px').and('have.css','padding-left','55px')
    cy.get('.block-title > strong > span').should('contain.text','BE THE FIRST TO KNOW')
    cy.get('.block-content > p').should('contain.text','Sign up for our newsletter to receive updates on special offers, news and events.')

    cy.get('.col-md-5 > .block-content').should('be.visible')
    cy.get('#footer_newsletter').should('be.visible').click().type('h000@gmail.com')
    cy.get('#newsletter-validate-detail > .actions > .action').should('contain.text','Subscribe').should('have.css','text-transform','uppercase').click({force:true})
    cy.url().should('equal','https://pk.khaadi.com/newsletter/subscriber/new/')
    cy.go('back')

    cy.get('.social-icons').should('be.visible')
    cy.get('.youtube').should('be.visible').invoke('removeAttr', 'target').click()
    cy.url().should('equal','https://www.youtube.com/channel/UCosHRi7jeBb0JGZfFlOHYUA')
    cy.go('back')
    cy.get('.facebook').should('be.visible').invoke('removeAttr', 'target').click()
    cy.url().should('equal','https://www.facebook.com/khaadi/')
    cy.go('back')
    cy.get('.instagram').should('be.visible').invoke('removeAttr', 'target').click()
    cy.url().should('equal','https://www.instagram.com/khaadi/')
    cy.go('back')
}

footermiddle()
{
    cy.get('.footer-middle').should('be.visible')
    cy.get('.block-title > strong > span').should('contain.text','Get in Touch')
    cy.get('.contact-info > :nth-child(1) > p').should('contain.text','22nd Floor, Sky Tower B- East Wing, Dolmen City, Block 4, Marine Drive Clifton, Karachi, Pakistan.')
    cy.get('.contact-info > :nth-child(2) > p').should('contain.text','0800 74007')
    cy.get(':nth-child(3) > p').should('contain.text','customercare@khaadi.com')


    cy.get('.block-right > :nth-child(1) > :nth-child(1) > .block > .block-title > strong > span').should('contain.text','Our Company')
    cy.contains('About Us').should('be.visible').invoke('removeAttr', 'target').click()
    cy.url().should('equal','https://pk.khaadi.com/about-us')
    cy.go('back')
    cy.contains('Careers at Khaadi').should('be.visible').invoke('removeAttr', 'target').click()
    cy.url().should('equal','https://careers.khaadi.com/')
    cy.go('back')
    cy.contains('Careers at Khaadi').should('be.visible').invoke('removeAttr', 'target').click()
    cy.url().should('equal','https://careers.khaadi.com/')
    cy.go('back')
    cy.get('.col-md-12 > .links > :nth-child(3) > a').invoke('removeAttr', 'target').click()
    cy.url().should('equal','https://pk.khaadi.com/contact')
    cy.go('back')
    cy.contains('Gallery').should('be.visible').invoke('removeAttr', 'target').click()
    cy.url().should('equal','https://pk.khaadi.com/gallery')
    cy.go('back')

    cy.get(':nth-child(2) > .block > .block-title > strong > span').should('contain.text','Customer Support')
    cy.contains('Customer Service').should('be.visible').invoke('removeAttr', 'target').click()
    cy.url().should('equal','https://pk.khaadi.com/customer-care')
    cy.go('back')
    cy.contains('Store Locator').should('be.visible').invoke('removeAttr', 'target').click()
    cy.url().should('equal','https://pk.khaadi.com/storelocator')
    cy.go('back')
    cy.contains('Disclaimer').should('be.visible').invoke('removeAttr', 'target').click()
    cy.url().should('equal','https://pk.khaadi.com/disclaimer')
    cy.go('back')
    cy.contains('Shipping & Handling').should('be.visible').invoke('removeAttr', 'target').click()
    cy.url().should('equal','https://pk.khaadi.com/shipping-handling')
    cy.go('back')
    cy.contains('Returns & Exchanges').should('be.visible').invoke('removeAttr', 'target').click()
    cy.url().should('equal','https://pk.khaadi.com/returns-exchange')
    cy.go('back')
    cy.contains('FAQs').should('be.visible').invoke('removeAttr', 'target').click()
    cy.url().should('equal','https://pk.khaadi.com/faqs')
    cy.go('back')

    cy.get(':nth-child(3) > .block > .block-title > strong > span').should('contain.text','Help')
    cy.contains('Track Your Order').should('be.visible').invoke('removeAttr', 'target').click()
    cy.url().should('equal','https://pk.khaadi.com/track-your-order')
    cy.go('back')
    cy.contains('Terms & Conditions').should('be.visible').invoke('removeAttr', 'target').click()
    cy.url().should('equal','https://pk.khaadi.com/terms-conditions')
    cy.go('back')
    cy.contains('Privacy Policy').should('be.visible').invoke('removeAttr', 'target').click()
    cy.url().should('equal','https://pk.khaadi.com/privacy-policy')
    cy.go('back')


    cy.get(':nth-child(1) > .custom-block > .secure-payment-text-pk').should('be.visible')
    cy.get('.custom-block > img').should('be.visible')
    cy.get('.col-lg-3.copyright-for-uk > .custom-block > .secure-payment-text-pk').should('be.visible')
    cy.get('.custom-block > a > img').should('be.visible')
    cy.get('.footer-copyright-text > .copyright-for-pk').should('be.visible')
}


}

