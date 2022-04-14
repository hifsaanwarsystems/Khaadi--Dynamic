    /// <reference types="cypress"/>
    const getvalue=require('../fixtures/data.json')
    const temp=require('../fixtures/homepage.json')
const acc=require('../fixtures/account.json')

    import {Ticker} from './Ticker'
    import { HomePage } from './Homepage'
    import { PLP } from './plp'
    import { footer } from './footer'
    import { PDP } from './pdp'
    import { Account } from './account'
    import { Checkout } from './checkout'

    const ticker=new Ticker()
    const homepage= new HomePage()
    const plp=new PLP()
    const Footer=new footer()
    const pdp=new PDP()
    const account= new Account()
    const checkout=new Checkout()
    describe('Khaadi Website Automation',function(){
      it('Visiting site ',function()
        { 
            cy.visit(getvalue.baseURL)
            
    
        
        })
        it('Search',function(){
            cy.get('.porto-icon-search').click({force:true})
            cy.get('#search').should('be.visible').type('eid collection')
            cy.get('.porto-icon-search').click({force:true})
        })
   it('Testing Top Ticker',function(){
            ticker.tickerExist()
            ticker.tickerText()
            ticker.shopNow()
        }) 
    it('Testing header',function(){
    homepage.navigation()
    homepage.logoCheck()

        })
        
    it('Testing Home Page Half Images and Banners',function()
        {
    homepage.halfimage(temp.unstitchedhalf,0)
    homepage.halfimage(temp.readytowear,1)
    homepage.halfimage(temp.western,2)
    homepage.Secondscrollbanners()
    homepage.bannerImages()
    homepage.bannerDots()
    homepage.productSliderImages()

        })
        
        
    it('PLP Testing',function()
    {
        

    plp.sortbyAsc()
    plp.sortbyDesc()
    plp.filtersCheck()
        
    })

    it('Testing Footer',function(){
        Footer.footertop()
        Footer.footertopinner()
        Footer.footermiddle()

    })

it('Testing PDP',function()
{
    pdp.pdpvalidation()
    
    
})

it('Testing Account',function()
{
account.createAccount(acc.email,acc.password,'hifsa','khan')
account.signin(acc.email,acc.password)
account.myaccount()
})

it('Checkout Process with Registered account',function()
{
    account.signin(acc.email,acc.password)
    checkout.addingProducts()
       checkout.minicart()
        checkout.cart()
        checkout.ShippingRegistered()
        checkout.payment()
        cy.contains('Sign Out').click({force:true})
})

it('Checkout Process for guest user',function()
{
    checkout.addingProducts()
    checkout.minicart()
    checkout.cart()
    checkout.ShippingGuest()
    checkout.payment()
})

    })
