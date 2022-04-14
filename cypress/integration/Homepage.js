/// <reference types="cypress"/>
const getvalue=require('../fixtures/header.json')
var count=0;
var banner=0;
var tc=0;
var index=1;

export class HomePage{

    logoCheck()
    {
      cy.log('**[ Checking Logo ]()**')
      cy.get('.logo > img').should('exist').should('be.visible').should('have.css','width',"104px").should('have.css','height',"28px").click({force:true})
    }
navigation(){
  cy.log('**[ Navigation ]()**')
  
     
    
     cy.xpath("(//nav[@class='navigation sw-megamenu ']/ul)").should('be.visible').find('li').each(($li)=>{
        count=count+1
        cy.log(count)
        cy.log("The count outsie scope is "+count)
        cy.xpath("(//div[@class='section-item-content nav-sections-item-content']//ul/li/a)["+count+"]").click({force:true})
    
        cy.get('.page-header > .content').should('exist')
      })
  }
  halfimage(url,eq)
{
  cy.log('**[Half Images Check ]()**')
    cy.get('.half-content-img').eq(eq).should('be.visible').should('have.descendants','a').should('have.css','position','relative').should('have.css','padding','0px').click()
    cy.url().should('equal',url)
    cy.go('back')


}
Secondscrollbanners()
    {
      cy.log('**[Second Scroll Banner ]()**')
        cy.get('.home-promo-imgs-main').should('exist').should('have.css','margin','4px').should('have.css','padding','0px').scrollIntoView()
        cy.get(getvalue.homepromoimages).eq(0).should('be.visible').should('have.css','padding','4px').and('have.css','height','350px').and('have.css','position','relative').and('have.css','overflow','hidden').should('have.descendants','a')
        cy.get(getvalue.imgLink).eq(0).should('be.visible').should('have.css','display','block').and('have.css','height','342px').and('have.css','overflow','hidden').and('have.css','position','relative').should('have.descendants','video')
        //cy.url().should('equal',getvalue.readytowear)
        //cy.go('back')
        //cy.get('video').should('be.visible').and('have.css','height','342px').and('have.css','width','342px').should('have.attr','src',getvalue.videolink).should('have.attr','muted')
        //cy.get('.video').should('contain.html','loop')

        cy.get(getvalue.homepromoimages).eq(1).should('be.visible').should('have.css','padding','4px').and('have.css','height','350px').and('have.css','position','relative').and('have.css','overflow','hidden').should('have.descendants','a')
        cy.get(getvalue.imgLink).eq(1).should('be.visible').should('have.css','display','block').and('have.css','height','342px').and('have.css','overflow','hidden').and('have.css','position','relative').should('have.descendants','video')
        //cy.url().should('equal',getvalue.accesories)
        //cy.go('back')
        //cy.get('.image-link > img').eq(0).should('be.visible').should('have.attr','src','https://pk.khaadi.com/media/wysiwyg/khaadi/19-03-2022/1-_Western_T-shirts_Placeholder.png')

        cy.get(getvalue.homepromoimages).eq(2).should('be.visible').should('have.css','padding','4px').and('have.css','height','350px').and('have.css','position','relative').and('have.css','overflow','hidden').should('have.descendants','a')
        cy.get(getvalue.imgLink).eq(2).should('be.visible').should('have.css','display','block').and('have.css','height','342px').and('have.css','overflow','hidden').and('have.css','position','relative').should('have.descendants','video')
        //.should('have.descendants','img')
        //cy.url().should('equal',getvalue.under2000)
       // cy.go('back')
        //cy.get('.image-link > img').eq(1).should('be.visible').should('have.attr','src',getvalue.under2000img)

        cy.get(getvalue.homepromoimages).eq(3).should('be.visible').should('have.css','padding','4px').and('have.css','height','350px').and('have.css','position','relative').and('have.css','overflow','hidden').should('have.descendants','a')
        cy.get(getvalue.imgLink).eq(3).should('be.visible').should('have.css','display','block').and('have.css','height','342px').and('have.css','overflow','hidden').and('have.css','position','relative').should('have.descendants','img')
        //cy.url().should('equal',getvalue.readytoweartops)
        //cy.go('back')
        //cy.get('.image-link > img').eq(2).should('be.visible').should('have.attr','src',getvalue.readytoweartopsimg)
    }
    bannerImages()
    {

        cy.log('**[ Banner Images ]()**')
        cy.xpath("//div[@class='owl-stage-outer']").should('exist')
        cy.xpath("//div[@class='owl-stage']").should('exist')
       cy.get('.owl-item').then($owlitem=>{
         cy.log($owlitem.length)
         for(let i=0;i<=10;i++)
         {
           cy.get('.owl-item').eq(i).should('exist').invoke('children').should('exist').should('have.descendants','a').invoke('children').should('exist').should('have.descendants','img').invoke('children').should('have.attr','src')
         }
       })

    }
    bannerDots()
    {
      cy.log('**[ Banner Dots Verification ]()**')
        cy.get('#banner-slider-demo-4 > .owl-controls > .owl-dots').should('be.visible')
        cy.get('.owl-dots > .active').should('be.visible')
    }
    productSliderImages()
    {
      cy.log('**[ Slider Product Images Verification ]()**')
      cy.get('.product-item').then($productitem=>{
        cy.log($productitem.length)
        for(let j=0;j<$productitem.length;j++)
        {
          cy.get('.product-item').eq(j).should('exist').invoke('children').should('exist').should('have.class','product-item-info').invoke('children','div','product-item-photo').should('have.descendants','a').invoke('children','a').should('have.descendants','img').invoke('children').should('have.attr','src')
          cy.get('.product-item').eq(j).should('exist').invoke('children').should('exist').should('have.class','product-item-info').invoke('children','div','product-item-photo').should('have.descendants','a').invoke('children','div','product-item-inner').invoke('children').should('have.class','product-item-actions').invoke('children').should('have.class','actions-primary').invoke('children').should('have.descendants','button')
          cy.get('.product-item').eq(j).should('exist').invoke('children').should('exist').should('have.class','product-item-info').invoke('children','div','product-item-details').should('have.descendants','strong').invoke('children','strong','product-item-name').should('have.descendants','a').invoke('children').should('have.attr','href')
          cy.get('.product-item').eq(j).should('exist').invoke('children').should('exist').should('have.class','product-item-info').invoke('children','div','product-item-details').should('have.descendants','div').invoke('children','div','product-item-description').should('have.descendants','a').invoke('children','a').should('have.class','action').should('have.attr','href')
          cy.get('.product-item').eq(j).should('exist').invoke('children').should('exist').should('have.class','product-item-info').invoke('children','div','product-item-details').should('have.descendants','div').invoke('children','div','price-final_price').should('have.descendants','span').invoke('children').should('have.class','normal-price').invoke('children').should('have.descendants','span').invoke('children').should('have.descendants','span').invoke('children','span','price-wrapper').should('exist').should('not.have.text','Rs. 0')
        
        
        
        }
      })
    }
}