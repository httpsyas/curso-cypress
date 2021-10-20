/// <reference types="cypress" />

it.only('a external test...', () => {           // faz um teste

})

describe('Should group tests...', () => {          // serve para agrupar testes
    describe('Should group more specific tests...', () => {
        it.skip('A specific test...', () => {
            
        })

    describe('Should group more specific tests 2...', () => {
        it('A specific test2...', () => {
            
        })
    })

    it('A internal test...', () => {

    })

    })
})

/* •──────────────────────────────</>────────────────────────────────────•
-skip serve para não executar aquele código, pular ele. Exemplo na linha 9 
         para usálo é só colocar .skip na frente do it ou describe
   •──────────────────────────────</>────────────────────────────────────•      
 */


/* •──────────────────────────────</>────────────────────────────────────•
-only serve para executar apenas um teste. Exemplo na linha 3
   para usálo é só colocar .only na frente do it ou describe
       se tiver mais de 1 only, ele irá executar o último 
   •──────────────────────────────</>────────────────────────────────────•      
 */
