// <reference types="cypress"/>
const getvalue=require('../fixtures/data.json')
var count=1;
var arrTc=0

export class PLP{

sortbyAsc()
{
    cy.log('**[ Filter Check On PLP ]()**')
   
cy.document().then((doc) => {

//count elements
var mylengh = Cypress.$('.navigation .level-top').length+2;

Cypress.$('.level-top').length;
for (let i = 4; i < mylengh; i++) {
 
   cy.get(':nth-child('+i+') > .level-top').click()
   cy.xpath("//div[@class='toolbar-sorter sorter']").should('be.visible')

   cy.log('**[ Selecting ascending prices ]()**')
    cy.get(':nth-child(1) > .toolbar-sorter > #sorter').select('price_asc')
    //cy.scrollTo('bottom').window().its('scrollY').should('not.equal', 0)
    cy.wait(10000)
   cy.url().should('contain','?product_list_order=price_asc')
    cy.get(':nth-child(1) > .filter-btn-wrapper > .filter_button').click({force:true})

    cy.log('**[ Verify the lowest price on slider with the price of first product ]()**')
    cy.wait(10000)
    cy.get(':nth-child(1) > .filter-btn-wrapper > .filter_button').click({force:true})


   


    cy.log('**[ Category Count Verification ]()**')
    cy.xpath("//div[@attribute='cat']").then($el=>{
       if($el.is(':visible'))
       {
      cy.log('category found')
     var catLength= Cypress.$('.ln-items-cat ').length
     cy.log(catLength)

     cy.xpath("//ol[@class='items ln-items-cat ']//span[@class='count']").then($count =>
     {
     var countLength= Cypress.$($count).length
     cy.log(countLength)

         
         var tc=($count).text()
            cy.log(tc)
            
            var strArray = tc.match(/(\d+)/g);
            for( var t=0; t<strArray.length;t++)
            {
               cy.log("Number at index[" + t + "]:- " + strArray[t]);
              arrTc=arrTc+ parseInt(strArray[t])
               cy.log(arrTc)
               }
 
      })
      cy.xpath("//span[@class='toolbar-number']").eq(0).then($toolbar=>{
        var ta=($toolbar).text()
        var ExpAmount=parseInt(ta)
        cy.log(ExpAmount)
        expect(arrTc).to.equal(ExpAmount)
        // if(ExpAmount===arrTc)
        // {
        //     cy.log('Product count verified')
        // }
        // else if(ExpAmount!=arrTc)
        // {
        //   cy.log("**[Product count not verified]**")
        // }
      })
      arrTc=0
 
}
       else 
       {
           i++
           cy.log("category not found")

       }
   })

   cy.log('**[ Size Filter Length ]()**')
   cy.xpath("//ol[@class='items ln-items-size ']//li[@class='item']").then($filtersize=>
   {
    var sizeLength= Cypress.$($filtersize).length
    cy.log(sizeLength)
   
   })
   cy.log('**[ Closing Filter ]()**')
    cy.get(':nth-child(1) > .filter-btn-wrapper > .filter-close-btn').click({force:true})
    cy.get('.product-item').last().scrollIntoView()
    }
  
  
  

})
// cy.log('**[ Calculating Product Count in View ]()**')
// var productlength=Cypress.$('.product-item ').length
// cy.log(productlength)
}


sortbyDesc()
{
    cy.log('**[ Filter Check On PLP ]()**')
   
cy.document().then((doc) => {

//count elements
var mylengh = Cypress.$('.navigation .level-top').length+2;

Cypress.$('.level-top').length;
for (let i = 4; i < mylengh; i++) {
   
 
   cy.get(':nth-child('+i+') > .level-top').click()
   cy.xpath("//div[@class='toolbar-sorter sorter']").should('be.visible')
   cy.log('**[ Selecting Descending prices ]()**')
    cy.get(':nth-child(1) > .toolbar-sorter > #sorter').select('price_desc')
    cy.wait(5000)
    cy.url().should('contain','?product_list_order=price_desc')
   
    cy.get(':nth-child(1) > .filter-btn-wrapper > .filter_button').click({force:true})
    cy.log('**[ Verify the highest price on slider with the price of first product ]()**')
    cy.wait(10000)
    cy.get(':nth-child(1) > .filter-btn-wrapper > .filter_button').click({force:true})
   

    cy.log('**[ Category Count Verification ]()**')
cy.xpath("//div[@attribute='cat']").then($el=>{
       if($el.is(':visible'))
       {
      cy.log('category found')
     var catLength= Cypress.$('.ln-items-cat ').length
     cy.log(catLength)

     cy.xpath("//ol[@class='items ln-items-cat ']//span[@class='count']").then($count =>
     {
     var countLength= Cypress.$($count).length
     cy.log(countLength)

         
         var tc=($count).text()
            cy.log(tc)
            
            var strArray = tc.match(/(\d+)/g);
            for( var t=0; t<strArray.length;t++)
            {
               cy.log("Number at index[" + t + "]:- " + strArray[t]);
              arrTc=arrTc+ parseInt(strArray[t])
               cy.log(arrTc)
               }
 
      })
      cy.xpath("//span[@class='toolbar-number']").eq(0).then($toolbar=>{
        var ta=($toolbar).text()
        var ExpAmount=parseInt(ta)
        cy.log(ExpAmount)
        expect(arrTc).to.equal(ExpAmount)
        // if(ExpAmount===arrTc)
        // {
        //     cy.log('Product count verified')
        // }
        // else if(ExpAmount!=arrTc)
        // {
        //   cy.log("**[Product count not verified]**")
        // }
      })
      arrTc=0
 
}
       else if($el.is(':not exists'))
       {
           cy.log("category not found")

       }
   })
   cy.log('**[ Closing Filter ]()**')
    cy.get(':nth-child(1) > .filter-btn-wrapper > .filter-close-btn').click({force:true})
    cy.get('.product-item').last().scrollIntoView()
    }
  

})


}
filtersCheck()
{
    cy.log('**[ Filter Check On PLP ]()**')
   
    cy.document().then((doc) => {
    
    //count elements
    var mylengh = Cypress.$('.navigation .level-top').length+2;
    
    Cypress.$('.level-top').length;
    for (let i = 4; i < mylengh; i++) {
        
        cy.get(':nth-child('+i+') > .level-top').click()
        cy.get(':nth-child(1) > .filter-btn-wrapper > .filter_button').click({force:true})
        cy.get('.layer-input-filter').then($input=>{
          
            cy.log($input.length)
            for(let u=0;u<$input.length;u++)
            {
                cy.get('.layer-input-filter').eq(u).should('exist')
               
            }
        })
        cy.xpath("//a[@class='swatch-option-link-layered']").then($colors=>{
            for(let f=0;f<$colors.length;f++)
            {
                cy.xpath("//a[@class='swatch-option-link-layered']").eq(f).trigger('mouseover').should('have.attr','aria-label')
                cy.get('.swatch-option-tooltip > .image').should('be.visible')
            }
        })
        cy.log('**[ Closing Filter ]()**')
        cy.get(':nth-child(1) > .filter-btn-wrapper > .filter-close-btn').click({force:true})

        cy.xpath("//ol[@class='filterproducts products list items product-items ']//li").then($item=>{
            var items=$item.length
            cy.log(items)
            for(let q=0;q<$item.length;q++)
            {
            cy.get('.product-item-info > .details > .name > .product-item-link').eq(q).should('be.visible').scrollIntoView()
            cy.get('.product-item-info > .details > .description').eq(q).should('be.visible')
            cy.get('.price').eq(q).should('be.visible').should('not.have.value','Rs. 0')
            cy.get('.product-item-info > .photo > .syte-plp-wrapper > .syte-discovery').eq(q).should('exist')
          //  cy.get('.product-item-info > .photo > a > .default_image').eq(q).invoke('attr','src').should('include','https://pk.khaadi.com/media/catalog/product/')
            }
    })
    
}
})
    
}

}
