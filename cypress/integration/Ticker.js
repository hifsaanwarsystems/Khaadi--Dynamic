/// <reference types="cypress"/>
const getvalue=require('../fixtures/data.json')


export class Ticker{


tickerExist()
{

    cy.log('**[ Ticker Exists ]()**')
    cy.get(getvalue.tickerClass).should('exist')
}

tickerText()
{
    cy.log('**[ Ticker Text and Css]()**')
    cy.xpath(getvalue.tickerTextXpath).should('have.css','background-color',getvalue.tickerBackgroundColor).should('have.css','color',getvalue.tickerColor)

}

shopNow()
{
    cy.log('**[ Shop Now Text and Css]()**')
    cy.get('span > a').should('exist').should('have.css','text-decoration',getvalue.shopNowCss)
    cy.get('a > strong').should('have.text','SHOP NOW!')
    cy.get('.ticker-text > span > a').invoke('removeAttr', 'target').click({force:true})
    cy.url().should('include',getvalue.shopNowlink)
    cy.contains('Rs').should('exist')
    cy.go('back')
}

}