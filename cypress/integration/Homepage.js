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

  cy.xpath("(//nav[@class='navigation sw-megamenu ']/ul)").should('be.visible').find('li').each(($li,index)=>{
        cy.log($li)
        cy.log(index)
       banner+=1
       cy.log(banner)
      })
     
      
     /*cy.xpath("(//nav[@class='navigation sw-megamenu ']/ul)").should('be.visible').find('li').each(($li)=>{
       
        
        if (count<banner)
        {
        count=count+1
        cy.log(count)
        cy.log("The count outsie scope is "+count)
        cy.xpath("(//nav[@class='navigation sw-megamenu ']//ul/li/a)["+count+"]").click({force:true})
        cy.contains('Rs').should('exist')
        }
        else
        {

        }
      })
    
      
     
      /*cy.xpath("//div[@class='owl-stage']//div/div").should('exist').find('a').each(($a)=>{
      banner=banner+1
      cy.log(banner)
      cy.xpath("(//div[@class='owl-stage']//div/div/a)["+banner+"]").invoke('removeAttr','target').click({force:true})
      })
     // cy.xpath("//div[@class='section-item-content nav-sections-item-content']//ul/li/a").click({force:true})   */  


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

    cy.get('.half-content-img').eq(eq).should('be.visible').should('have.descendants','a').should('have.css','position','relative').should('have.css','padding','0px').click()
    cy.url().should('equal',url)
    cy.go('back')


}
Secondscrollbanners()
    {
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
}