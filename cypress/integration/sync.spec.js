/// <reference types="cypress"/>



describe('Esperas...',() => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

    })
    beforeEach(() => {
        cy.reload

    })

    it('Deve aguardar alemento estar disponivel', ()=> {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('not.exist')
    })
        
    // it('Deve fazer retrys', ()=> {
    //     cy.get('#novoCampo').should('not.exist')
    //     cy.get('#buttonDelay').click()
    //     cy.get('#novoCampo').should('not.exist')
    //     cy.get('#novoCampo')
    //         // .should('not.exist)
    //         .should('exist')
    //         .type('funciona')
    // })

    it('Uso do find', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        // cy.get('#lista li')
        //     .find('span')
        //     .should('contain', 'Item 2')
        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })

    it('Uso do timeout', () => {
        // cy.get('#buttonDelay').click()
        // cy.get('#novoCampo', { timeout: 1000}).should('exist')

    /* ——————————————————«•»——————————————————
             𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐝𝐞 𝐞𝐬𝐩𝐞𝐫𝐚
        wait: espera um  tempo fixo 
        timeout: leva o tempo que precisar,
        se colocar 30 segundos e ele levar 
    ——————————————————«•»——————————————————
    */

    
        // cy.get('#buttonListDOM').click()
        // // cy.wait(5000)              evitar wait fixo e utilizar timeout
        // cy.get('#lista li span', { timeout: 30000})
        //     .should('contain', 'Item 2')

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span')
            .should('have.length', 1)
        cy.get('#lista li span')
            .should('have.length', 2)
    
    })

    it('Click retry', () => {
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '111')
    })
    /*  ——————————————————«•»——————————————————
        𝐝𝐢𝐟𝐞𝐫𝐞𝐧𝐜𝐚𝐬 𝐞𝐧𝐭𝐫𝐞 𝐨 𝐮𝐬𝐨 𝐝𝐨 𝐒𝐇𝐎𝐔𝐋𝐃 𝐞 𝐝𝐨 𝐓𝐇𝐄𝐍
            𝐩𝐚𝐫𝐚 𝐭𝐫𝐚𝐭𝐚𝐫 𝐚𝐬 𝐩𝐫𝐨𝐦𝐢𝐬𝐬𝐞𝐬 𝐝𝐨 𝐜𝐲𝐩𝐫𝐞𝐬𝐬
        𝐭𝐚𝐧𝐭𝐨 𝐓𝐇𝐄𝐍 𝐪𝐮𝐚𝐧𝐝𝐨 𝐒𝐇𝐎𝐔𝐋𝐃, 𝐭𝐫𝐚𝐭𝐚𝐦 𝐝𝐞 𝐩𝐫𝐨𝐦𝐢𝐬𝐬𝐞𝐬
        ——————————————————«•»——————————————————
    */

    it.only('Should vs Then', () => {
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span').then($el => {
            // .should('have.length', 1)
            console.log($el)
            expect($el).to.have.length(1)
        /* ────────────────────────────────
             O then, ele aguardou isso aqui ser sinalizado para então ser executado, já o should não. Ele fez a busca e ficou fazendo a verificação
               
           ────────────────────────────────
        */
        })
    it.only('Should vs Then', () => {
        cy.get('#buttonListDOM').then($el => {
            expect($el).to.have.length(1)
            cy.get('#buttonList')  
        })
    })

    })


    
})