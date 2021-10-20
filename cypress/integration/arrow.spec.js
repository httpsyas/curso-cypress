it('nada ainda', function() { })

 function soma(a, b) {                     //first method
    return a + b;                         
}                                         
                                             
// ------------------------------------------------------------------
                                             
// const soma = function(a, b) {             second method
//     return a + b                          
// }                                         
                                             
// ------------------------------------------------------------------
                                             
// const soma = (a, b) => a + b              third method
                                             
// ------------------------------------------------------------------
                                                                     
// const soma = (a, b) => {                  common mistake          
//     a + b                                                         
// }                                                                 
                                                                     
// ------------------------------------------------------------------
                                                                     
// const soma = (a) => a + a  

/*
 both work the same way, when there is only one parameter, 
 you don't need parentheses                                
*/

// const soma = a => a + a                                              
                                                                     
// console.log(soma (1, 4))    

// -------------------------------------------------------------------

it('a function test...', function(){
    console.log('Function', this)
})

it('an arrow function...',() => {
    console.log('Arrow', this)
})