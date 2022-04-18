// <reference types="cypress"/>
const getvalue=require('../fixtures/data.json')
var count=1;
var arrTc=0

export class PDP{

pdpvalidation()
{

cy.document().then((doc) => {

//count elements
var mylengh = Cypress.$('.navigation .level-top').length+2;

Cypress.$('.level-top').length;
for (let i = 3; i < mylengh; i++) {
cy.log('**[ Opening New Category ]()**')
cy.get(':nth-child('+i+') > .level-top').click()
cy.xpath("//ol[@class='filterproducts products list items product-items ']//li").then($item=>{
var items=$item.length
cy.log(items)

for(let j=0;j<5;j++)
{
        cy.log('**[ Clicking on product ]()**')
        cy.get(' .product-item-link').eq(j).click({force:true})
        cy.log('**[ Product Title Verification ]()**')
        cy.get('.base').should('be.visible')
        cy.log('**[ Product Description Verification ]()**')
        cy.get('.overview > .value').should('be.visible').should('not.be.empty')
        cy.log('**[ Price Box Verification ]()**')
        cy.get('.product-info-main > .price-box').should('be.visible').should('not.be.empty')
        cy.log('**[ Availability Verification ]()**')
        cy.get('.stock > :nth-child(2)').should('contain.text','In stock')
        cy.log('**[ SKU Verification ]()**')
        cy.get('.product-info-stock-sku > .product').should('be.visible').should('not.be.empty')
        cy.log('**[ Product Options]()**')
        cy.get('#product-options-wrapper').should('be.visible')
        cy.wait(15000)
        cy.log('**[ Color Verification ]()**')
        cy.get('.swatch-attribute-label').eq(0).should('be.visible')

        cy.get('.swatch-attribute.color > .swatch-attribute-options').should('be.visible')
        // cy.get('.swatch-option.color').eq(0).should('be.visible')
        //cy.get('#option-label-color-93-item-73').should('be.selected')
        cy.log('**[ Size Verification ]()**')
        cy.get('.swatch-attribute-label').eq(1).should('be.visible')
        cy.get('.size > .swatch-attribute-options').should('be.visible')

        cy.log('**[ Increment button Verification ]()**')
        cy.get('.control').should('be.visible')
        cy.get('.porto-icon-up-dir').click({force:true})  
        cy.get('#qty').should('contain.value',2)
        cy.get('.qty-dec').click({force:true})
        cy.get('#qty').should('contain.value',1)

        cy.log('**[ Add to Cart Verification ]()**')
        cy.get('#product-addtocart-button').should('be.visible')

        cy.log('**[ Details Tab Verification ]()**')
        cy.get('.info > .product').should('be.visible')

        cy.log('**[ Show Similar Button Verification ]()**')
        cy.get('.syte-pdp-wrapper').should('be.visible')
        cy.get('.syte-discovery').should('be.visible')

        cy.log('**[ Slider Verification ]()**')
        cy.get('.MagicToolboxSelectorsContainer').should('have.descendants','a')
        cy.get('.MagicToolboxSelectorsContainer').children().invoke('children','a').then($sliderimg=>{
            var length=$sliderimg.length
            cy.log($sliderimg)
            cy.log(length)
           for(let k=0;k<length;k++)
           {
            cy.get('.mt-thumb-switcher ').eq(k).should('be.visible').click()
            
           }
        })

        cy.log('**[ Main Image Verification ]()**')
        cy.get('#mtImageContainer').should('be.visible')
        cy.get('figure').children().invoke('children','img').invoke('attr','src').should('contain','https://pk.khaadi.com/media/catalog/product/')

      //  Cypress.$("div[class^='MagicToolboxSelectors']").children()
        //cy.get('.mt-thumb-switcher mz-thumb').children()
        cy.go('back')
}
})

}
})
}
}