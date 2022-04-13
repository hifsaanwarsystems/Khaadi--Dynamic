// <reference types="cypress"/>

export class Checkout{
addingProducts()
{
    cy.log('**[ Adding Products  ]()**')
    cy.get(':nth-child(3) > .level-top').click()
    let m=1
    for(let j=6;j<8;j++)
    {
        
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

        cy.log('**[ Add to  ]()**')
        cy.get('#product-addtocart-button').should('be.visible').click({force:true})
        cy.get('.modal-footer > :nth-child(1)').click({force:true})
        cy.get('.showcart > .counter > .counter-number').should('have.text',m)
        
        m++;
    }
   
}
minicart()
{
    cy.log('**[ Minicart Verification ]()**')
    cy.get('.counter-number').should('be.visible')
    cy.get('.showcart').click({force:true})
    //cy.get('.showcart').invoke('show')
    cy.get('.subtotal').should('be.visible')
    cy.get('.subtotal > .label').should('include.text','Bag Subtotal')
    cy.get('.amount > .price-container').should('not.be.empty')
    cy.get('.minicart-items-wrapper').should('be.visible')
    cy.get('.minicart-items').should('be.visible').should('have.descendants','li').invoke('children','li').then($items=>{
        $items.length
        cy.log($items.length)
        for(let i=0;i<$items.length;i++)
        {
        cy.get('.product-item-details').eq(i).should('be.visible')
        cy.get('.product-image-photo').eq(i).should('be.visible').should('have.attr','src')
        cy.get('.product-item-name').eq(i).should('be.visible')
        cy.get('.minicart-price').eq(i).should('be.visible').should('have.descendants','span')
        cy.get('.details-qty').eq(i).should('be.visible')
        cy.get('.actions > .primary > .action').eq(i).should('be.visible')
        cy.get('.actions > .secondary > .action').eq(i).should('be.visible')
        
        }
    })
   
    cy.get(':nth-child(7) > .secondary > .action').should('be.visible').click({force:true})
    cy.url().should('equal','https://pk.khaadi.com/checkout/cart/')
    cy.go('back')
    cy.wait(5000)
  cy.get('.showcart').click({force:true})
    cy.get('#top-cart-btn-checkout').should('be.visible').click({force:true})
    cy.wait(23000)
    cy.url().should('equal','https://pk.khaadi.com/checkout/#shipping')
    cy.go('back')
}
cart()
{
    cy.log('**[ Going To Main Cart ]()**')
    cy.visit('https://pk.khaadi.com/checkout/cart/')
    cy.get('.base').should('have.text','Shopping Bag')
    cy.log('**[ Validating Items Table ]()**')
    cy.get('#form-validate > .table-wrapper').should('be.visible')
    cy.get('thead > tr > .item').should('be.visible')
    cy.get('.item > span').should('have.text','Item')
    cy.get('thead > tr > .price').should('be.visible')
    cy.get('thead > tr > .price > span').should('have.text','Price')
    cy.get('thead > tr > .qty').should('be.visible')
    cy.get('tr > .qty > span').should('have.text','Qty')
    cy.get('thead > tr > .subtotal').should('be.visible')
    cy.get('thead > tr > .subtotal > span').should('have.text','Subtotal')
    let item=0
    let o=0
    cy.get('.cart > .item').then($cart=>
        {
           item= $cart.length
            cy.log(item)
            for(let o=0;o<item;o++)
            {
                
                cy.get('.item > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').eq(o).should('be.visible')
                cy.get('.item > .product-item-details > .product-item-name').eq(o).should('have.descendants','a').should('be.visible')
                cy.get('.item > .product-item-details > .item-options').eq(o).should('be.visible')
                cy.get('.item-info > .col.price > .price-including-tax > .cart-price > .price').eq(o).should('be.visible').should('not.be.empty')
                cy.get('.item-info > .col.qty > .field > .qty-changer > .qty-inc').eq(o).click({force:true})
                cy.get('.updated-cart').eq(o).should('be.visible').click({force:true})
                cy.wait(5000)
                cy.xpath("//input[@title='Qty']").eq(o).should('have.value',2)
                cy.get('.item-info > .col.qty > .field > .qty-changer > .qty-dec').eq(o).click({force:true})
                cy.get('.updated-cart').eq(o).should('be.visible').click({force:true})
                cy.wait(5000)
                cy.xpath("//input[@title='Qty']").eq(o).should('have.value',1)
                cy.get('.item-info > .subtotal > .price-including-tax > .cart-price > .price').eq(o).should('be.visible').should('not.have.value','Rs. 0')
                cy.get('.item-actions > td > .actions-toolbar > .action-edit').eq(o).should('be.visible')
                cy.get('.item-actions > td > .actions-toolbar > .action-delete').eq(o).should('be.visible')

            }
            cy.log('**[ Update Shopping Bag ]()**')
            cy.get('.main > .update > span').should('have.text','Update Shopping Bag')
            cy.get('.main > .update').should('be.visible').click({force:true})
            cy.url().should('equal','https://pk.khaadi.com/checkout/cart/')
            cy.wait(10000)
            cy.log('**[ Checking cart Summary ]()**')
            cy.get('.cart-summary').should('be.visible')
            cy.get('.summary').should('have.text','Summary')
            cy.get('.cart-totals').should('be.visible')
            cy.get('.sub > .mark').should('be.visible').should('not.be.empty').should('have.text','\n        Subtotal\n        (Excl. Tax)\n    ')
            cy.get('.sub > .amount > .price').should('be.visible').should('not.have.value','Rs. 0')
            cy.get('.fee > .mark').should('be.visible').should('not.be.empty').should('have.text','FBR service charges')
            cy.get('.fee > .amount > .price').should('be.visible').should('not.have.value','Rs. 0')
            cy.get('.shipping > .mark').should('not.be.empty').should('include.text','\n            Shipping\n            \n            (Fixed - Shipping)\n        ')
            cy.get('.shipping > .amount > .price').should('be.visible').should('not.have.value','Rs. 0')
            cy.get('.totals-tax-summary > .mark').should('be.visible').should('not.be.empty').should('have.text','\n            Tax\n        ')
            cy.get('.totals-tax-summary > .amount > .price').should('be.visible').should('not.have.value','Rs. 0')
            cy.get('.mark > strong').should('be.visible').should('not.be.empty').should('have.text','Order Total')
            cy.get('strong > .price').should('be.visible').should('not.have.value','Rs. 0')
            cy.get('.cart-checkout-button').should('be.visible')
            cy.log('**[ Discount Verification ]()**')
            cy.get('#block-discount').should('be.visible')
            cy.get('#block-discount-heading').should('be.visible').should('not.be.empty').should('have.text','Apply Discount Code')
            cy.get('#coupon_code').should('be.visible').click().type('qa_voucher_4_testing')
            cy.get('#discount-coupon-form > .fieldset > .actions-toolbar > div.primary > .action').click({force:true})
            cy.wait(10000)
            cy.get('.message-error').should('be.visible')
            cy.log('**[ Going to Checkout Page ]()**')
            cy.get('.cart-checkout-button').click({force:true})
            
        })
}
ShippingRegistered()
{
    cy.wait(23000)
    cy.log('**[ Verifying URL ]()**')
    cy.url().should('equal','https://pk.khaadi.com/checkout/#shipping')
    cy.log('**[ Checking Progress Bar ]()**')
    cy.get('._active > span').should('be.visible').should('have.css','background','rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box')
    cy.get('.opc-progress-bar > :nth-child(2) > span').should('be.visible')
    cy.log('**[ Your Details Verification ]()**')
    cy.get('#shipping > .step-title').should('be.visible').should('have.text','Your Details')
    cy.get('.shipping-address-item').should('be.visible').should('not.be.empty')
    cy.get('.new-address-popup > .action').should('be.visible').click({force:true})
    cy.get('._show > .modal-inner-wrap > .modal-header > .action-close').should('be.visible').click({force:true})
    cy.log('**[ Checking Shipping Method Section ]()**')
    cy.get('.checkout-shipping-method > .step-title').should('have.text','Shipping Method')
    cy.get('thead > .row > .col-method').should('be.visible').should('have.text','Select Method')
    cy.get('thead > .row > .col-price').should('be.visible').should('have.text','Charges')
    cy.get('thead > .row > .col-method-carrier').should('be.visible').should('have.text','Carrier')
    cy.get('thead > .row > .col-carrier').should('be.visible').should('have.text','Method')
    cy.get('tbody > .row > .col-method').should('have.descendants','input')
    cy.get('tbody > .row > .col-price').should('have.descendants','span')
    cy.get('#label_method_flatrate_flatrate').should('have.text','Shipping')
    cy.get('#label_carrier_flatrate_flatrate').should('have.text','Fixed')
    cy.log('**[ Checking order Summary ]()**')
    cy.get('.opc-block-summary').should('be.visible')
    cy.get('span.title').should('have.text','Order Summary')
    cy.get('.title > strong > :nth-child(2)').should('be.visible').should('have.text','Items in Bag')
    cy.get('.content.minicart-items > .minicart-items-wrapper > .minicart-items > .product-item').then($productItem=>{
        cy.log($productItem.length)
        for(let p=1;p<=$productItem.length;p++)
        {
            cy.get('.minicart-items > :nth-child('+p+') > :nth-child(1) > .product-image-container > .product-image-wrapper > img').should('be.visible')
            cy.get(':nth-child('+p+') > :nth-child(1) > .product-item-details > .product-item-inner > .product-item-name-block > .product-item-name').should('be.visible')
            cy.get(':nth-child('+p+') > :nth-child(1) > .product-item-details > .product-item-inner > .product-item-name-block > .details-qty').should('be.visible')
            cy.get(':nth-child('+p+') > :nth-child(1) > .product-item-details > .product-item-inner > .subtotal > .price-including-tax > .cart-price > .price').should('be.visible').should('not.have.value','Rs. 0')
        }
    })
    cy.log('**[ Clicking Next ]()**')
    cy.get('.button').should('be.visible').click({force:true})
     
}
ShippingGuest()
{
    cy.wait(23000)
    cy.url().should('equal','https://pk.khaadi.com/checkout/#shipping')
    cy.log('**[ Checking Progress Bar ]()**')
    cy.get('._active > span').should('be.visible').should('have.css','background','rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box')
    cy.get('.opc-progress-bar > :nth-child(2) > span').should('be.visible')
    cy.log('**[ Your Details Verification ]()**')
    cy.get('#shipping > .step-title').should('be.visible').should('have.text','Your Details')
    cy.get('#customer-email-fieldset > .required > label.label').should('have.text','\n                Email Address\n            ')
    cy.get('#customer-email-fieldset > .required > .control > #customer-email').click().type('h12@gmail.com')
    cy.get('.note > span').should('be.visible')
    cy.wait(5000)
    cy.get('#customer-password').should('be.visible')
    cy.xpath("//input[@name='firstname']").click().type('hifsa')
    cy.xpath("//input[@name='lastname']").click().type('khan')
    cy.xpath("//input[@name='telephone']").click().type('03458417222')
    cy.get('[name="shippingAddress.custom_attributes.shipping_details"] > label.label > span').should('have.text','Shipping Details')
    cy.xpath("//input[@name='street[0]']").click().type('54 T DHA')
    cy.xpath("//select[@name='region_id']").select('610')
    cy.xpath("//select[@name='city_id']").select('1235')
    cy.log('**[ Checking Shipping Method Section ]()**')
    cy.get('.checkout-shipping-method > .step-title').should('have.text','Shipping Method')
    cy.get('thead > .row > .col-method').should('be.visible').should('have.text','Select Method')
    cy.get('thead > .row > .col-price').should('be.visible').should('have.text','Charges')
    cy.get('thead > .row > .col-method-carrier').should('be.visible').should('have.text','Carrier')
    cy.get('thead > .row > .col-carrier').should('be.visible').should('have.text','Method')
    cy.get('tbody > .row > .col-method').should('have.descendants','input')
    cy.get('tbody > .row > .col-price').should('have.descendants','span')
    cy.get('#label_method_flatrate_flatrate').should('have.text','Shipping')
    cy.get('#label_carrier_flatrate_flatrate').should('have.text','Fixed')
    cy.log('**[ Checking order Summary ]()**')
    cy.get('.opc-block-summary').should('be.visible')
    cy.get('span.title').should('have.text','Order Summary')
    cy.get('.title > strong > :nth-child(2)').should('be.visible').should('have.text','Items in Bag')
    cy.get('.content.minicart-items > .minicart-items-wrapper > .minicart-items > .product-item').then($productItem=>{
        cy.log($productItem.length)
        for(let p=1;p<=$productItem.length;p++)
        {
            cy.get('.minicart-items > :nth-child('+p+') > :nth-child(1) > .product-image-container > .product-image-wrapper > img').should('be.visible')
            cy.get(':nth-child('+p+') > :nth-child(1) > .product-item-details > .product-item-inner > .product-item-name-block > .product-item-name').should('be.visible')
            cy.get(':nth-child('+p+') > :nth-child(1) > .product-item-details > .product-item-inner > .product-item-name-block > .details-qty').should('be.visible')
            cy.get(':nth-child('+p+') > :nth-child(1) > .product-item-details > .product-item-inner > .subtotal > .price-including-tax > .cart-price > .price').should('be.visible').should('not.have.value','Rs. 0')
        }
    })
    cy.log('**[ Clicking Next ]()**')
    cy.get('.button').should('be.visible').click({force:true})
     
}
payment()
{
    cy.wait(5000)
    cy.url().should('equal','https://pk.khaadi.com/checkout/#payment')
    cy.get('._complete > span').should('be.visible')
    cy.get('._active > span').should('be.visible')
    cy.get('.payment-group > .step-title').should('have.text','Payment Method')
    cy.get('#tns_hosted').click({force:true})
    cy.get('._active > .payment-method-content').should('be.visible')
    cy.get('._active > .payment-method-content > .payment-method-billing-address > .checkout-billing-address > .billing-address-same-as-shipping-block').should('be.visible')
    cy.get('._active > .payment-method-content > .payment-method-billing-address > .checkout-billing-address > .billing-address-details').should('be.visible').should('not.be.empty')
    cy.get('#cashondelivery').click({force:true})
    cy.get('._active > .payment-method-content').should('be.visible')
    cy.get('._active > .payment-method-content > .payment-method-billing-address > .checkout-billing-address > .billing-address-same-as-shipping-block').should('be.visible')
    cy.get('._active > .payment-method-content > .payment-method-billing-address > .checkout-billing-address > .billing-address-details').should('be.visible').should('not.be.empty')
    cy.get(':nth-child(5) > div.primary > .action').should('be.visible').should('contain.text','Place Order')
    cy.get('.opc-block-summary').should('be.visible')
    cy.get('span.title').should('have.text','Order Summary')
    cy.get('.sub > .mark').should('be.visible').should('not.be.empty').should('have.text','\n        Subtotal\n        Excl. Tax\n    ')
    cy.get('.sub > .amount > .price').should('be.visible').should('not.have.value','Rs. 0')
    cy.get('.fee > .mark').should('be.visible').should('not.be.empty').should('have.text','FBR service charges')
    cy.get('.fee > .amount > .price').should('be.visible').should('not.have.value','Rs. 0')
    cy.get('.shipping > .mark').should('not.be.empty').should('include.text','\n            Shipping\n            \n            Fixed - Shipping\n        ')
    cy.get('.shipping > .amount > .price').should('be.visible').should('not.have.value','Rs. 0')
    cy.get('.totals-tax-summary > .mark').should('be.visible').should('not.be.empty').should('have.text','Tax')
    cy.get('.totals-tax-summary > .amount > .price').should('be.visible').should('not.have.value','Rs. 0')
    cy.get('.mark > strong').should('be.visible').should('not.be.empty').should('have.text','Order Total')
    cy.get('strong > .price').should('be.visible').should('not.have.value','Rs. 0')
    cy.get('.title > strong > :nth-child(2)').should('be.visible').should('have.text','Items in Bag')
    cy.get('.content.minicart-items > .minicart-items-wrapper > .minicart-items > .product-item').then($productItem=>{
        cy.log($productItem.length)
        for(let p=1;p<=$productItem.length;p++)
        {
            cy.get('.minicart-items > :nth-child('+p+') > :nth-child(1) > .product-image-container > .product-image-wrapper > img').should('be.visible')
            cy.get(':nth-child('+p+') > :nth-child(1) > .product-item-details > .product-item-inner > .product-item-name-block > .product-item-name').should('be.visible')
            cy.get(':nth-child('+p+') > :nth-child(1) > .product-item-details > .product-item-inner > .product-item-name-block > .details-qty').should('be.visible')
            cy.get(':nth-child('+p+') > :nth-child(1) > .product-item-details > .product-item-inner > .subtotal > .price-including-tax > .cart-price > .price').should('be.visible').should('not.have.value','Rs. 0')
        }
    })
    cy.get('.ship-to > .shipping-information-title').should('have.text','\n            Ship To:\n            \n                edit\n            \n        ')
    cy.get('.ship-to > .shipping-information-content').should('not.be.empty')
    cy.get('.ship-via > .shipping-information-title > span').should('have.text','Shipping Method:')
    cy.get('.ship-via > .shipping-information-content').should('not.be.empty')

}
}